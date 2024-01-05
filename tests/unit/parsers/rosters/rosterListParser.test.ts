import {
  FunctionName,
  ParserKeyError,
  ParserStatus,
  rosterListParser,
  RosterListResult
} from '../../../../src'

describe('rosterListParser()', function () {
  describe('without any Roster Items', function () {
    it('parses `<jR>`', () => {
      const result = rosterListParser('<jR>')

      const expected: RosterListResult = {
        key: 'jR',
        parser: FunctionName.ROSTER_LIST,
        params: {
          cabIds: []
        },
        status: ParserStatus.SUCCESS
      }
      expect(result).toEqual(expected)
    })
  })

  describe('with Roster Items', function () {
    it('parses `<jR 1 22 333 4444>`', () => {
      const result = rosterListParser('<jR 1 22 333 4444>')

      const expected: RosterListResult = {
        key: 'jR',
        parser: FunctionName.ROSTER_LIST,
        params: {
          cabIds: [
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
        rosterListParser('<incorrect-key>')
      }).toThrowError(ParserKeyError)
    })
  })
})
