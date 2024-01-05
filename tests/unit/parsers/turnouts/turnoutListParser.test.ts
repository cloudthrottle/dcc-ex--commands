import { FunctionName, ParserKeyError, ParserStatus, turnoutListParser, TurnoutListResult } from '../../../../src'

describe('turnoutListParser()', function () {
  describe('without any Turnout Items', function () {
    it('parses `<jT>`', () => {
      const result = turnoutListParser('<jT>')

      const expected: TurnoutListResult = {
        key: 'jT',
        parser: FunctionName.TURNOUT_LIST,
        params: {
          turnoutIds: []
        },
        status: ParserStatus.SUCCESS
      }
      expect(result).toEqual(expected)
    })
  })

  describe('with Roster Items', function () {
    it('parses `<jT 1 22 333 4444>`', () => {
      const result = turnoutListParser('<jT 1 22 333 4444>')

      const expected: TurnoutListResult = {
        key: 'jT',
        parser: FunctionName.TURNOUT_LIST,
        params: {
          turnoutIds: [
            1,
            22,
            333,
            4444
          ]
        },
        status: ParserStatus.SUCCESS
      }
      expect(result).toEqual(expected)
    })
  })

  describe('with incorrect key', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        turnoutListParser('<incorrect-key>')
      }).toThrowError(ParserKeyError)
    })
  })
})
