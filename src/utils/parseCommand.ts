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

export function parseCommand (command: string): Command {
  const cleanedParams = removeControlCharacters(command)
  const [key, ...attributes] = cleanedParams.split(' ')
  return {
    key,
    attributes
  }
}
