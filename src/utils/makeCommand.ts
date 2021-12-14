export const makeCommand = (instruction: string): string => {
  return `<${instruction}>`
}

export const makeCommandFromAttributes = (attributes: Array<string | number | undefined | null>): string => {
  const str = attributes
    .map(attribute => {
      if (typeof attribute === 'number') {
        return attribute.toString()
      }

      return attribute
    })
    .filter(attribute => !isBlank(attribute))
    .join(' ')
  return makeCommand(str)
}

function isBlank (param: string | undefined | null): boolean {
  if (typeof param === 'string') {
    return param.trim() === ''
  }
  return true
}
