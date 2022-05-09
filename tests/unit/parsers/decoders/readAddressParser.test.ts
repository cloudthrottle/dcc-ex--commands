import { eraseParser, FunctionName, ParserKeyError, ParserResult, ParserStatus, decoderAddressParser } from '../../../../src'

describe('decoderAddressParser()', function () {
  it("parses '<r 1024>' successfully", () => {
    const result = decoderAddressParser('<r 1024>')

    const expected: ParserResult<any> = {
      key: 'r',
      parser: FunctionName.DECODER_ADDRESS,
      status: ParserStatus.SUCCESS,
      params: {
        address: 1024
      }
    }
    expect(result).toEqual(expected)
  })

  it("parses '<r -1>' with failure", () => {
    const result = decoderAddressParser('<r -1>')

    const expected: ParserResult<any> = {
      key: 'r',
      parser: FunctionName.DECODER_ADDRESS,
      status: ParserStatus.FAILURE,
      params: {
        address: null
      }
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
