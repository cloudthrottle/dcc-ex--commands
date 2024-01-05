import {
  BitValue,
  createParser,
  Direction,
  FunctionButtonKind,
  FunctionName,
  genericParser,
  parseFunctionButtons,
  ParserResult,
  ParserStatus,
  ReturnTrack,
  rosterItemParser,
  RosterItemResult,
  TurnoutState
} from '../../../src'

describe('createParser()', () => {
  describe('when no parsers can parse the command', () => {
    it('should raise AggregateError', async () => {
      const parser = createParser([])
      const result = parser.parse('<jR 70 "My Loco" "Flash/Ring/*Blast">')
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
      const result = await parser.parse('<jR 70 "My Loco" "Flash/Ring/*Blast">')

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
})

interface Expectation {
  command: string
  expectation: ParserResult<any>
}

describe('genericParser()', () => {
  const expectations: Expectation[] = [
    {
      command: '<p1 MAIN>',
      expectation: {
        key: 'p',
        parser: FunctionName.POWER,
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
        parser: FunctionName.THROTTLE,
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
        parser: FunctionName.EEPROMS_STORE,
        status: ParserStatus.SUCCESS,
        params: {}
      }
    },
    {
      command: '<0>',
      expectation: {
        key: '0',
        parser: FunctionName.EEPROMS_ERASE,
        status: ParserStatus.SUCCESS,
        params: {}
      }
    },
    {
      command: '<r 100>',
      expectation: {
        key: 'r',
        parser: FunctionName.DECODER_ADDRESS,
        status: ParserStatus.SUCCESS,
        params: {
          address: 100
        }
      }
    },
    {
      command: '<jR 70 "My Loco" "Flash/Ring/*Blast">',
      expectation: {
        key: 'jR',
        parser: FunctionName.ROSTER_ITEM,
        params: {
          cabId: 70,
          display: 'My Loco',
          functionButtons: {
            0: {
              display: 'Flash',
              kind: 'toggle'
            },
            1: {
              display: 'Ring',
              kind: 'toggle'
            },
            2: {
              display: 'Blast',
              kind: 'press'
            }
          }
        },
        status: ParserStatus.SUCCESS
      }
    },
    {
      command: '<l 10 1 127 43>',
      expectation: {
        key: 'l',
        parser: FunctionName.LOCO,
        params: {
          cabId: 10,
          register: 1,
          speed: 126,
          direction: Direction.REVERSE,
          functionButtons: {
            ...parseFunctionButtons(0),
            0: {
              value: 1 as BitValue
            },
            1: {
              value: 1 as BitValue
            },
            2: {
              value: 0 as BitValue
            },
            3: {
              value: 1 as BitValue
            },
            4: {
              value: 0 as BitValue
            },
            5: {
              value: 1 as BitValue
            }
          }
        },
        status: ParserStatus.SUCCESS
      }
    },
    {
      command: '<H 1 DCC 2 23 0>',
      expectation: {
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
    },
    {
      command: '<H 1 0>',
      expectation: {
        key: 'H',
        parser: FunctionName.TURNOUT,
        status: ParserStatus.SUCCESS,
        params: {
          id: 1,
          thrown: TurnoutState.CLOSED
        }
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
