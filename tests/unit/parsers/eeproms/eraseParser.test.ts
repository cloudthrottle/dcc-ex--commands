import { eraseParser, FunctionName, ParserKeyError, ParserResult, ParserStatus } from '../../../../src'

describe('eraseParser()', function () {
  it("parses '<0>'", () => {
    const result = eraseParser('<0>')

    const expected: ParserResult<any> = {
      key: '0',
      parser: FunctionName.EEPROMS_ERASE,
      status: ParserStatus.SUCCESS,
      params: {}
    }
    expect(result).toEqual(expected)
  })

  describe('with incorrect key', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        eraseParser('<incorrect-key>')
      }).toThrowError(ParserKeyError)
    })
  })
})
