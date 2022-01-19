import {
  createParser,
  Direction,
  genericParser,
  ParserStatus,
  ReturnTrack,
  rosterItemParser
} from '../../../src'

describe('createParser()', () => {
  describe('when no parsers can parse the command', () => {
    it('should raise AggregateError', async () => {
      const parser = createParser([])
      const result = parser.parse('<j 70 "My Loco" "Flash/Ring/*Blast">')
      return await result.catch((e: any) =>
        expect(e).toBeInstanceOf(AggregateError)
      )
    })
  })

  describe('when parsers can parse the command', () => {
    it('should parse the command', async () => {
      const parsers = [
        rosterItemParser
      ]
      const parser = createParser(parsers)
      const result = await parser.parse('<j 70 "My Loco" "Flash/Ring/*Blast">')

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
})

describe('genericParser()', () => {
  const expectations = [
    {
      command: '<p1 MAIN>',
      expectation: {
        key: 'p',
        params: {
          power: 1,
          track: ReturnTrack.MAIN
        },
        status: ParserStatus.SUCCESS
      }
    },
    {
      command: '<T 1 20 1>',
      expectation: {
        key: 'T',
        params: {
          register: 1,
          speed: 20,
          direction: Direction.FORWARD
        },
        status: ParserStatus.SUCCESS
      }
    },
    {
      command: '<e nTurnouts nSensors>',
      expectation: {
        key: 'e',
        status: ParserStatus.SUCCESS,
        params: {}
      }
    },
    {
      command: '<0>',
      expectation: {
        key: '0',
        status: ParserStatus.SUCCESS,
        params: {}
      }
    },
    {
      command: '<j 70 "My Loco" "Flash/Ring/*Blast">',
      expectation: {
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
    }

  ]

  expectations.forEach(({ command, expectation }) => {
    it(`it parses ${command}`, async () => {
      const parser = genericParser()
      const result = await parser.parse(command)
      expect(result).toEqual(expectation)
    })
  })
})
