import {
  FunctionName,
  ParserKeyError,
  ParserStatus,
  turnoutDCCParser,
  turnoutParser, TurnoutResult,
  TurnoutState
} from '../../../../src'

describe('turnoutParser()', function () {
  it('parses `<H 1 0>`', () => {
    const result = turnoutParser('<H 1 0>')

    const expected: TurnoutResult = {
      key: 'H',
      parser: FunctionName.TURNOUT,
      status: ParserStatus.SUCCESS,
      params: {
        id: 1,
        thrown: TurnoutState.CLOSED
      }
    }
    expect(result).toEqual(expected)
  })

  describe('with incorrect key', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        turnoutDCCParser('<incorrect-key>')
      }).toThrowError(ParserKeyError)
    })
  })
})
