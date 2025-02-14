import { getElementScope } from '../element.js';
import { textFromElementIds } from './helpers.js';

/**
 * Get element label based on `aria-label`, `aria-labelledby` or `label[for="<element.id>"]`
 * @param element Element to get label for
 * @returns label
 */
const label = (element: HTMLElement): string | null => {
  if (element.hasAttribute('aria-label')) {
    return element.getAttribute('aria-label') || '';
  }

  const rootNode = getElementScope(element);
  if (!rootNode) {
    return null;
  }

  if (element.hasAttribute('aria-labelledby')) {
    const ids = element.getAttribute('aria-labelledby');
    if (!ids) {
      return '';
    }

    return textFromElementIds(rootNode, ids);
  }

  if (element.id) {
    const labelForElement = rootNode.querySelector(`label[for="${element.id}"]`);
    return labelForElement instanceof HTMLLabelElement ? (labelForElement.textContent || '') : null;
  }

  return null;
};

export {
  label
};
