export function matches(element: Element, selector: string): boolean {
  const nativeMatches = element.matches
    || element.webkitMatchesSelector
    || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}

export function closest(element: Element, selector: string): Element | null {
  if (element.closest) {
    return element.closest(selector);
  }

  let el: Element | null = element;
  while (el) {
    if (matches(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
