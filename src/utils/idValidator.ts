export function idValidator(id: number) {
  return !isNaN(id) && id > 0;
}
