import {
  FunctionName, ParserKeyError,
  ParserStatus,
  turnoutItemParser, TurnoutItemResult,
  TurnoutState
} from '../../../../src'

describe('turnoutItemParser()', function () {
  it('parses `<jT 1 0 "Description">`', () => {
    const result = turnoutItemParser('<jT 1 0 "Description">')

    const expected: TurnoutItemResult = {
      key: 'jT',
      parser: FunctionName.TURNOUT_ITEM,
      status: ParserStatus.SUCCESS,
      params: {
        turnoutId: 1,
        thrown: TurnoutState.CLOSED,
        description: 'Description'
      }
    }
    expect(result).toEqual(expected)
  })

  describe('with incorrect key', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        turnoutItemParser('<incorrect-key>')
      }).toThrowError(ParserKeyError)
    })
  })
})
