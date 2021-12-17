export class ParserKeyError extends Error {
  constructor (parser: string, key: string) {
    const message = `${parser} can not parse the key '${key}'`
    super(message)
    this.name = 'ParserKeyError'
  }
}

export class ParserAttributeError extends Error {
  constructor (attribute: string, value: string | number, msg: string) {
    const message = `${attribute} set to ${value}. ${msg}`
    super(message)
    this.name = 'ParserAttributeError'
  }
}
