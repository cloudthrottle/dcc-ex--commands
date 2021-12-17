import { storeParser, ParserKeyError, ParserStatus, parseCommand } from '../../../../src'

describe('storeParser()', function () {
  it("parses '<e nTurnouts nSensors>'", () => {
    const commandParams = parseCommand('<e nTurnouts nSensors>')
    const result = storeParser(commandParams)

    const expected = {
      key: 'e',
      status: ParserStatus.SUCCESS,
      params: {}
    }
    expect(result).toEqual(expected)
  })

  describe('with incorrect key', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        const commandParams = parseCommand('<incorrect-key>')
        storeParser(commandParams)
      }).toThrowError(ParserKeyError)
    })
  })
})
