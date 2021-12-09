export const makeCommand = (instruction: string): string => {
  return `<${instruction}>`
}

export const makeCommandFromAttributes = (attributes: Array<string | number | undefined | null>) => {
  const str = attributes
    .map(attribute => {
      if (typeof attribute === 'number') {
        return attribute.toString()
      }

      return attribute
    })
    .filter(attribute => !!attribute)
    .join(' ')
  return makeCommand(str)
}
