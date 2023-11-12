import {
  FunctionName,
  ParserKeyError,
  ParserStatus,
  turnoutDCCParser,
  TurnoutDCCResult,
  TurnoutState
} from '../../../../src'

describe('turnoutDCCParser()', function () {
  it('parses `<H 1 DCC 2 23 0>`', () => {
    const result = turnoutDCCParser('<H 1 DCC 2 23 0>')

    const expected: TurnoutDCCResult = {
      key: 'H',
      parser: FunctionName.TURNOUT_DCC,
      status: ParserStatus.SUCCESS,
      params: {
        id: 1,
        kind: 'DCC',
        address: {
          primaryAddress: 2,
          subAddress: 23
        },
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

  describe('with incorrect kind', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        turnoutDCCParser('<H 2 SERVO>')
      }).toThrowError(ParserKeyError)
    })
  })

  describe('with generic turnout command', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        turnoutDCCParser('<H 2 1>')
      }).toThrowError(ParserKeyError)
    })
  })
})
