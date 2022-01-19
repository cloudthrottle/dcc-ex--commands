import {
  Direction,
  FunctionName,
  ParserAttributeError,
  ParserKeyError,
  ParserStatus,
  throttleParser,
  ThrottleResult
} from '../../../../src'

describe('throttleParser()', function () {
  it("parses '<T 1 20 1>'", () => {
    const result = throttleParser('<T 1 20 1>')

    const expected: ThrottleResult = {
      key: 'T',
      parser: FunctionName.THROTTLE,
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
        throttleParser('<incorrect-key>')
      }).toThrowError(ParserKeyError)
    })
  })

  describe('with an incorrect direction attribute', function () {
    it('throws a ParserAttributeError', function () {
      expect(() => {
        throttleParser('<T 1 1 9>')
      }).toThrowError(ParserAttributeError)
    })
  })
})
