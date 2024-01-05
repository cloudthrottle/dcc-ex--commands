export function removeDoubleQuotes (str: string): string {
  return str.replaceAll('"', '')
}
