import { FunctionName, ParserKeyError, ParserResult, ParserStatus, storeParser } from '../../../../src'

describe('storeParser()', function () {
  it("parses '<e nTurnouts nSensors>'", () => {
    const result = storeParser('<e nTurnouts nSensors>')

    const expected: ParserResult<any> = {
      key: 'e',
      parser: FunctionName.EEPROMS_STORE,
      status: ParserStatus.SUCCESS,
      params: {}
    }
    expect(result).toEqual(expected)
  })

  describe('with incorrect key', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        storeParser('<incorrect-key>')
      }).toThrowError(ParserKeyError)
    })
  })
})
