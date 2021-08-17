export const createClassString = (classes) => {
  return classes
    .map((c) => (c ? c.trim() : c))
    .filter((c) => c)
    .join(' ');
}
