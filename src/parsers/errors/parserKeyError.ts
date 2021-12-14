export class ParserKeyError extends Error {
  constructor (parser: string, key: string) {
    const message = `${parser} can not parse the key '${key}'`
    super(message)
    this.name = 'ParserKeyError'
  }
}
