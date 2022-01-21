import {
  BitValue,
  Direction,
  FunctionName, locoParser, LocoResult, parseFunctionButtons,
  ParserKeyError,
  ParserStatus, parseSpeedAndDirection,
  throttleParser
} from '../../../../src'

describe('locoParser()', function () {
  it("parses '<l 10 1 127 43>'", () => {
    const result = locoParser('<l 10 1 127 43>')

    const defaultFunctionButtons = parseFunctionButtons(0)
    const expectedFunctionButtons = {
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

    const expected: LocoResult = {
      key: 'l',
      parser: FunctionName.LOCO,
      params: {
        cabId: 10,
        register: 1,
        speed: 126,
        direction: Direction.REVERSE,
        functionButtons: {
          ...defaultFunctionButtons,
          ...expectedFunctionButtons
        }
      },
      status: ParserStatus.SUCCESS
    }
    expect(result).toEqual(expected)
  })

  describe('with incorrect key', function () {
    it('throws a ParserKeyError', function () {
      expect(() => {
        throttleParser('<incorrect-key>')
      }).toThrowError(ParserKeyError)
    })
  })
})

describe('parseSpeedAndDirection()', () => {
  const expectations = [
    {
      value: 0,
      expected: {
        speed: 0,
        direction: Direction.REVERSE
      }
    },
    {
      value: 1,
      expected: {
        speed: -1,
        direction: Direction.REVERSE
      }
    },
    {
      value: 2,
      expected: {
        speed: 1,
        direction: Direction.REVERSE
      }
    },
    {
      value: 127,
      expected: {
        speed: 126,
        direction: Direction.REVERSE
      }
    },
    {
      value: 128,
      expected: {
        speed: 0,
        direction: Direction.FORWARD
      }
    },
    {
      value: 129,
      expected: {
        speed: -1,
        direction: Direction.FORWARD
      }
    },
    {
      value: 130,
      expected: {
        speed: 1,
        direction: Direction.FORWARD
      }
    },
    {
      value: 255,
      expected: {
        speed: 126,
        direction: Direction.FORWARD
      }
    }
  ]

  expectations.forEach(({ value, expected }) => {
    it(`parses ${value} as speed: ${expected.speed}, direction: ${expected.direction === 1 ? 'Forward' : 'Reverse'}`, () => {
      expect(parseSpeedAndDirection(value))
        .toEqual(expected)
    })
  })
})

describe('parseFunctionButtons()', () => {
  const expectations = [
    {
      value: 0,
      expected: ['0', { value: 0 }]
    },
    {
      value: 1,
      expected: ['0', { value: 1 }]
    },
    {
      value: 12,
      expected: ['1', { value: 0 }]
    },
    {
      value: 12,
      expected: ['2', { value: 1 }]
    },
    {
      value: 12,
      expected: ['3', { value: 1 }]
    }
  ]

  expectations.forEach(({ value, expected }) => {
    it(`parses ${value}`, () => {
      expect(parseFunctionButtons(value))
        .toHaveProperty(expected[0] as string, expected[1])
    })
  })
})
