export function randomId(prefix: string) {
  return prefix + '_' + Math.random().toString(36).substr(2, 9);
}
