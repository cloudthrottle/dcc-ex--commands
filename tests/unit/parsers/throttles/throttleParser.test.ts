import {
  Direction,
  parseCommand,
  ParserAttributeError,
  ParserKeyError,
  ParserStatus,
  throttleParser
} from '../../../../src'

describe('throttleParser()', function () {
  it("parses '<T 1 20 1>'", () => {
    const commandParams = parseCommand('<T 1 20 1>')
    const result = throttleParser(commandParams)

    const expected = {
      key: 'T',
      params: {
        register: 1,
        speed: 20,
        direction: Direction.FORWARD
      },
      status: ParserStatus.SUCCESS
    }
    expect(result).toEqual(expected)
  })

  describe('with incorrect key', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        const commandParams = parseCommand('<incorrect-key>')
        throttleParser(commandParams)
      }).toThrowError(ParserKeyError)
    })
  })

  describe('with an incorrect direction attribute', function () {
    it('throws a ParserAttributeError', function () {
      expect(() => {
        const commandParams = parseCommand('<T 1 1 9>')
        throttleParser(commandParams)
      }).toThrowError(ParserAttributeError)
    })
  })
})
