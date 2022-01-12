export function isControlCharacters (char: string): boolean {
  return ['<', '>'].includes(char)
}

export function removeControlCharacters (command: string): string {
  return command.split('')
    .filter(char => !isControlCharacters(char))
    .join('')
}

export interface Command {
  attributes: string[]
  key: string
}

/**
 * Regex example https://rubular.com/r/qy9A4gVz8ieDCQ
 * Split string by space and/or by quoted string
 */
function splitBySpaceOrQuote (cleanedParams: string): string[] {
  const parts = cleanedParams.match(/\w+|"[^"]+"/g)
  return parts ?? []
}

function getStrings (cleanedParams: string): string[] {
  return splitBySpaceOrQuote(cleanedParams).map((part) => {
    return part.replaceAll('"', '')
  })
}

export function parseCommand (command: string): Command {
  const cleanedParams = removeControlCharacters(command)
  const [key, ...attributes] = getStrings(cleanedParams)
  return {
    key,
    attributes
  }
}
