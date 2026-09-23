import React, { useState } from 'react';
import {
  Mail,
  Send,
  Linkedin,
  Github,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  Loader2,
  X,
  MapPin,
  Sparkles,
  ShieldCheck,
  Eye,
  EyeOff,
  Lock,
} from 'lucide-react';
import { contactChannels } from '../data/profileData';
import { validateContactForm, submitContactMessage } from '../services/contactService';

export const Contact = () => {
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [copied, setCopied] = useState(false);

  // Validate a single field
  const validateField = (fieldName, value) => {
    const updatedData = { ...formData, [fieldName]: value };
    const { errors: allErrors } = validateContactForm(updatedData);
    return allErrors[fieldName] || '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation on change if field was touched
    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validation = validateContactForm(formData);
    setErrors(validation.errors);

    if (!validation.isValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitContactMessage(formData);
      if (result.success) {
        setSuccessMessage(result.message);
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setTouched({});
        setErrors({});
      } else {
        setSubmitError(result.message || 'Error al enviar el mensaje.');
      }
    } catch {
      setSubmitError('Ocurrió un error de red inesperado. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(contactChannels.email);
      }
    } catch {
      // Fallback
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const messageLength = formData.message.length;
  const isMessageNearLimit = messageLength > 900;
  const isMessageAtLimit = messageLength >= 1000;

  return (
    <section id="contacto" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" />
            Contacto Directo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Iniciemos una Conversación
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-base">
            ¿Tienes un proyecto en mente o buscas potenciar tu equipo con desarrollo Full Stack e Inteligencia Artificial?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Direct Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-white/10 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-500" />
                Información de Contacto
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                Disponible para integrarme a equipos de alto impacto, consultoría de arquitectura web, integración de modelos de lenguaje (LLMs/RAG) y optimización de rendimiento.
              </p>

              {/* Email Box & Anti-Spam Protection */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-gray-800/60 border border-slate-200 dark:border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Correo Oficial (Anti-Spam)
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300/40 dark:border-emerald-700/40">
                    <Lock className="w-2.5 h-2.5" />
                    Protegido de bots
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                  Para evitar spam y rastreadores web, la dirección está protegida. Puedes usar el formulario directo o revelar la dirección:
                </p>

                {isEmailRevealed ? (
                  <div className="space-y-2">
                    <a
                      href={`mailto:${contactChannels.email}`}
                      data-testid="contact-email-link"
                      className="text-base font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-2 break-all"
                    >
                      <Mail className="w-4 h-4 shrink-0" />
                      {contactChannels.email}
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-gray-900 border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-400 dark:text-gray-500 select-none">
                    <span className="tracking-widest">•••••••••••@•••••.com</span>
                    <span className="text-[10px] text-amber-500 font-semibold uppercase">Oculto</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    data-testid="reveal-email-button"
                    onClick={() => setIsEmailRevealed(!isEmailRevealed)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 transition-colors shadow-sm"
                  >
                    {isEmailRevealed ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Ocultar</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Revelar correo</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    data-testid="copy-email-button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-white dark:bg-gray-700 text-slate-700 dark:text-gray-200 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 hover:text-cyan-500 transition-colors shadow-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">
                          ¡Copiado al portapapeles!
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copiar correo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels & Location */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{contactChannels.location} (Remoto Global / Presencial)</span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={contactChannels.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-200 hover:text-cyan-500 hover:border-cyan-500/30 border border-transparent transition-colors text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    LinkedIn
                  </a>
                  <a
                    href={contactChannels.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-200 hover:text-cyan-500 hover:border-cyan-500/30 border border-transparent transition-colors text-xs font-semibold"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-white/10 shadow-md">
              {/* Success Banner */}
              {successMessage && (
                <div
                  data-testid="contact-success-message"
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 flex items-start justify-between gap-3 animate-fadeIn"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm">¡Mensaje enviado con éxito!</p>
                      <p className="text-xs mt-0.5">{successMessage}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSuccessMessage('')}
                    className="text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-200 p-1"
                    aria-label="Cerrar notificación"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Submit Error Banner */}
              {submitError && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-300 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-xs">{submitError}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitError('')}
                    className="text-red-600 hover:text-red-800 dark:text-red-400 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5"
                  >
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    data-testid="contact-name-input"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Ej. Carlos Mendoza"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-gray-800/80 text-slate-900 dark:text-white border ${
                      errors.name && touched.name
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-200 dark:border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                    } focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.name && touched.name && (
                    <p
                      data-testid="error-name"
                      className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5"
                  >
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    data-testid="contact-email-input"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="nombre@dominio.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-gray-800/80 text-slate-900 dark:text-white border ${
                      errors.email && touched.email
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-200 dark:border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                    } focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.email && touched.email && (
                    <p
                      data-testid="error-email"
                      className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300 mb-1.5"
                  >
                    Asunto <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    data-testid="contact-subject-input"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Ej. Oportunidad laboral / Proyecto RAG"
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-gray-800/80 text-slate-900 dark:text-white border ${
                      errors.subject && touched.subject
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-200 dark:border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                    } focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.subject && touched.subject && (
                    <p
                      data-testid="error-subject"
                      className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-300"
                    >
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <span
                      data-testid="message-char-counter"
                      className={`text-xs ${
                        isMessageAtLimit
                          ? 'text-red-500 font-bold'
                          : isMessageNearLimit
                          ? 'text-amber-500 font-medium'
                          : 'text-slate-400 dark:text-gray-500'
                      }`}
                    >
                      {messageLength} / 1000 caracteres
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    data-testid="contact-message-input"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={1000}
                    placeholder="Describe tu propuesta, consulta o requerimiento técnico..."
                    className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-gray-800/80 text-slate-900 dark:text-white border ${
                      errors.message && touched.message
                        ? 'border-red-500 focus:ring-red-500/20'
                        : 'border-slate-200 dark:border-white/10 focus:border-cyan-500 focus:ring-cyan-500/20'
                    } focus:outline-none focus:ring-2 transition-all resize-none`}
                  />
                  {errors.message && touched.message && (
                    <p
                      data-testid="error-message"
                      className="mt-1 text-xs text-red-500 dark:text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="contact-submit-button"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-slate-400 text-slate-200 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:opacity-95 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.99]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Enviando mensaje...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
