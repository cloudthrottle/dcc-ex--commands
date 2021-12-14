import { parseCommand, ParserKeyError, ParserStatus, powerParser, ReturnTrack } from '../../../../src'

describe('powerParser()', function () {
  it("parses '<p1 MAIN>'", () => {
    const commandParams = parseCommand('<p1 MAIN>')
    const result = powerParser(commandParams)

    const expected = {
      power: 1,
      track: ReturnTrack.MAIN,
      status: ParserStatus.SUCCESS
    }
    expect(result).toEqual(expected)
  })

  it("parses '<p0 MAIN>'", () => {
    const commandParams = parseCommand('<p0 MAIN>')
    const result = powerParser(commandParams)

    const expected = {
      power: 0,
      track: ReturnTrack.MAIN,
      status: ParserStatus.SUCCESS
    }
    expect(result).toEqual(expected)
  })

  it("parses '<p1>'", () => {
    const commandParams = parseCommand('<p1>')
    const result = powerParser(commandParams)

    const expected = {
      power: 1,
      track: ReturnTrack.ALL,
      status: ParserStatus.SUCCESS
    }
    expect(result).toEqual(expected)
  })

  describe('with incorrect key', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        const commandParams = parseCommand('<incorrect-key>')
        powerParser(commandParams)
      }).toThrowError(ParserKeyError)
    })
  })
})
