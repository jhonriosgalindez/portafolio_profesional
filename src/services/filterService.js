/**
 * Pure Category Filtering Service
 * Filters collections of items by category. Handles both single category string or categories array.
 *
 * @param {Array<Object>} items - List of items to filter
 * @param {string} activeCategory - 'all' | 'frontend' | 'backend' | 'ai' | 'database'
 * @returns {Array<Object>} Filtered list of items
 */
export function filterItemsByCategory(items, activeCategory = 'all') {
  if (!Array.isArray(items)) {
    return [];
  }

  if (!activeCategory || activeCategory === 'all') {
    return [...items];
  }

  const normalizedTarget = String(activeCategory).trim().toLowerCase();

  return items.filter((item) => {
    if (!item) return false;

    // Multi-category items (e.g. projects)
    if (Array.isArray(item.categories)) {
      return item.categories.some(
        (cat) => String(cat).trim().toLowerCase() === normalizedTarget
      );
    }

    // Single-category items (e.g. skills)
    if (typeof item.category === 'string') {
      return item.category.trim().toLowerCase() === normalizedTarget;
    }

    return false;
  });
}
