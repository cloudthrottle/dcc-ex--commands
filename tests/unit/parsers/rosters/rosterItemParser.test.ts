import {
  FunctionButtonKind,
  FunctionName,
  ParserKeyError,
  ParserStatus,
  rosterItemParser,
  RosterItemResult
} from '../../../../src'

describe('rosterItemParser()', function () {
  describe('without function descriptions', function () {
    it('parses `<j 70 "My Loco">`', () => {
      const result = rosterItemParser('<j 70 "My Loco">')

      const expected: RosterItemResult = {
        key: 'j',
        parser: FunctionName.ROSTER_ITEM,
        params: {
          cabId: 70,
          display: 'My Loco',
          functionButtons: []
        },
        status: ParserStatus.SUCCESS
      }
      expect(result).toEqual(expected)
    })
  })

  describe('with function descriptions', function () {
    it('parses `<j 70 "My Loco" "Flash/Ring/*Blast">`', () => {
      const result = rosterItemParser('<j 70 "My Loco" "Flash/Ring/*Blast">')

      const expected: RosterItemResult = {
        key: 'j',
        parser: FunctionName.ROSTER_ITEM,
        params: {
          cabId: 70,
          display: 'My Loco',
          functionButtons: [
            {
              display: 'Flash',
              kind: FunctionButtonKind.TOGGLE
            },
            {
              display: 'Ring',
              kind: FunctionButtonKind.TOGGLE
            },
            {
              display: 'Blast',
              kind: FunctionButtonKind.PRESS
            }
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
        rosterItemParser('<incorrect-key>')
      }).toThrowError(ParserKeyError)
    })
  })
})
