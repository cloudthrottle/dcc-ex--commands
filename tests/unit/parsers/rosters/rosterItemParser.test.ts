import { parseCommand, ParserKeyError, ParserStatus, rosterItemParser } from '../../../../src'

describe('rosterItemParser()', function () {
  describe('without function descriptions', function () {
    it('parses `<j 70 "My Loco">`', () => {
      const commandParams = parseCommand('<j 70 "My Loco">')
      const result = rosterItemParser(commandParams)

      const expected = {
        key: 'j',
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
      const commandParams = parseCommand('<j 70 "My Loco" "Flash/Ring/*Blast">')
      const result = rosterItemParser(commandParams)

      const expected = {
        key: 'j',
        params: {
          cabId: 70,
          display: 'My Loco',
          functionButtons: [
            {
              display: 'Flash',
              kind: 'toggle'
            },
            {
              display: 'Ring',
              kind: 'toggle'
            },
            {
              display: 'Blast',
              kind: 'press'
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
        const commandParams = parseCommand('<incorrect-key>')
        rosterItemParser(commandParams)
      }).toThrowError(ParserKeyError)
    })
  })
})
