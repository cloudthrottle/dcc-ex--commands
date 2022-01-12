import { parseCommand, ParserKeyError, ParserStatus, rosterItemParser } from '../../../../src'

describe('throttleParser()', function () {
  it('parses \'<j 70 "My Loco">\'', () => {
    const commandParams = parseCommand('<j 70 "My Loco">')
    const result = rosterItemParser(commandParams)

    const expected = {
      key: 'j',
      params: {
        cabId: 70,
        displayName: 'My Loco'
      },
      status: ParserStatus.SUCCESS
    }
    expect(result).toEqual(expected)
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
