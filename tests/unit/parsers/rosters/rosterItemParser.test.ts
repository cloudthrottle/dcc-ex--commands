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
    it('parses `<jR 70 "My Loco">`', () => {
      const result = rosterItemParser('<jR 70 "My Loco">')

      const expected: RosterItemResult = {
        key: 'jR',
        parser: FunctionName.ROSTER_ITEM,
        params: {
          cabId: 70,
          display: 'My Loco',
          functionButtons: {}
        },
        status: ParserStatus.SUCCESS
      }
      expect(result).toEqual(expected)
    })
  })

  describe('with function descriptions', function () {
    it('parses `<jR 70 "My Loco" "Flash/Ring/*Blast">`', () => {
      const result = rosterItemParser('<jR 70 "My Loco" "Flash/Ring/*Blast">')

      const expected: RosterItemResult = {
        key: 'jR',
        parser: FunctionName.ROSTER_ITEM,
        params: {
          cabId: 70,
          display: 'My Loco',
          functionButtons: {
            0: {
              display: 'Flash',
              kind: FunctionButtonKind.TOGGLE
            },
            1: {
              display: 'Ring',
              kind: FunctionButtonKind.TOGGLE
            },
            2: {
              display: 'Blast',
              kind: FunctionButtonKind.PRESS
            }
          }
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
