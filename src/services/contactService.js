/**
 * Contact Form Validation & Submission Service
 * Implements strict RFC 5322 validation and localStorage persistence.
 */

// RFC 5322 compliant regex for practical email validation
export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Validates contact form fields.
 *
 * @param {Object} formData
 * @param {string} [formData.name]
 * @param {string} [formData.email]
 * @param {string} [formData.subject]
 * @param {string} [formData.message]
 * @returns {{ isValid: boolean, errors: Record<string, string> }}
 */
export function validateContactForm(formData = {}) {
  const errors = {};
  const { name = '', email = '', subject = '', message = '' } = formData;

  const trimmedName = String(name || '').trim();
  const trimmedEmail = String(email || '').trim();
  const trimmedSubject = String(subject || '').trim();
  const rawMessage = String(message || '');
  const trimmedMessage = rawMessage.trim();

  // 1. Name validation: required, min 2 chars
  if (!trimmedName) {
    errors.name = 'El nombre completo es requerido.';
  } else if (trimmedName.length < 2) {
    errors.name = 'El nombre debe tener al minímo 2 caracteres.';
  }

  // 2. Email validation: required, RFC 5322 regex
  if (!trimmedEmail) {
    errors.email = 'El correo electrónico es requerido.';
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Ingresa una dirección de correo válida (ej. nombre@dominio.com).';
  }

  // 3. Subject validation: required, min 3 chars
  if (!trimmedSubject) {
    errors.subject = 'El asunto es requerido.';
  } else if (trimmedSubject.length < 3) {
    errors.subject = 'El asunto debe tener al menos 3 caracteres.';
  }

  // 4. Message validation: required, min 10 chars, max 1000 chars
  if (!trimmedMessage) {
    errors.message = 'El mensaje es requerido.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'El mensaje debe tener al menos 10 caracteres.';
  } else if (rawMessage.length > 1000) {
    errors.message = 'El mensaje no puede exceder los 1000 caracteres.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Submits contact form message with simulated network delay and localStorage persistence.
 *
 * @param {Object} formData
 * @param {Object} [options]
 * @param {number} [options.delayMs=500] - Simulated network latency
 * @returns {Promise<{ success: boolean, message: string, errors?: Record<string, string> }>}
 */
export async function submitContactMessage(
  formData,
  {
    delayMs = typeof process !== 'undefined' && process.env?.NODE_ENV === 'test' ? 0 : 500,
  } = {}
) {
  const validation = validateContactForm(formData);

  if (!validation.isValid) {
    return {
      success: false,
      message: 'Por favor corrige los errores en el formulario antes de enviar.',
      errors: validation.errors,
    };
  }

  // Simulate realistic network delay
  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  try {
    const existingMessagesStr = localStorage.getItem('portfolio-messages');
    let messages = [];

    if (existingMessagesStr) {
      try {
        messages = JSON.parse(existingMessagesStr);
        if (!Array.isArray(messages)) {
          messages = [];
        }
      } catch {
        messages = [];
      }
    }

    const newMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      name: String(formData.name).trim(),
      email: String(formData.email).trim(),
      subject: String(formData.subject).trim(),
      message: String(formData.message).trim(),
      timestamp: new Date().toISOString(),
    };

    messages.push(newMessage);
    localStorage.setItem('portfolio-messages', JSON.stringify(messages));

    return {
      success: true,
      message: '¡Mensaje enviado con éxito! Muchas gracias por ponerte en contacto.',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Ocurrió un error al procesar el mensaje. Por favor intenta de nuevo.',
    };
  }
}
