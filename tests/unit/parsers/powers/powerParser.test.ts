import { FunctionName, ParserKeyError, ParserStatus, powerParser, PowerResult, ReturnTrack } from '../../../../src'

describe('powerParser()', function () {
  it("parses '<p1 MAIN>'", () => {
    const result = powerParser('<p1 MAIN>')

    const expected: PowerResult = {
      key: 'p',
      parser: FunctionName.POWER,
      params: {
        power: 1,
        track: ReturnTrack.MAIN
      },
      status: ParserStatus.SUCCESS
    }
    expect(result).toEqual(expected)
  })

  it("parses '<p0 MAIN>'", () => {
    const result = powerParser('<p0 MAIN>')

    const expected: PowerResult = {
      key: 'p',
      parser: FunctionName.POWER,
      params: {
        power: 0,
        track: ReturnTrack.MAIN
      },
      status: ParserStatus.SUCCESS
    }
    expect(result).toEqual(expected)
  })

  it("parses '<p1>'", () => {
    const result = powerParser('<p1>')

    const expected: PowerResult = {
      key: 'p',
      parser: FunctionName.POWER,
      params: {
        power: 1,
        track: ReturnTrack.ALL
      },
      status: ParserStatus.SUCCESS
    }
    expect(result).toEqual(expected)
  })

  describe('with incorrect key', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        powerParser('<incorrect-key>')
      }).toThrowError(ParserKeyError)
    })
  })
})
