import { Command } from '../../utils/index.js'
import { ParserResult, ParserStatus } from '../../types/index.js'
import { ParserKeyError } from '../errors/index.js'

enum FunctionButtonKind {
  TOGGLE = 'toggle',
  PRESS = 'press'
}

interface FunctionButton {
  display: string
  kind: FunctionButtonKind
}

type FunctionButtons = FunctionButton[]

interface RosterItemParams {
  cabId: number
  display: string
  functionButtons: FunctionButtons
}

type RosterItemResult = ParserResult<RosterItemParams>
const rosterItemParserKey = 'j'

export const rosterItemParser: (params: Command) => RosterItemResult = ({ key, attributes }) => {
  const [cabId, display, rawFunctionButtons] = attributes

  if (key !== rosterItemParserKey) {
    throw new ParserKeyError('rosterItemParser', key)
  }

  const functionButtons: FunctionButtons = functionButtonsParser(rawFunctionButtons)

  return {
    key: rosterItemParserKey,
    status: ParserStatus.SUCCESS,
    params: {
      cabId: parseInt(cabId),
      display,
      functionButtons
    }
  }
}

function functionButtonsParser (param: string | null = null): FunctionButtons {
  if (param === null) {
    return []
  }

  const buttons = param.split('/')
  return buttons.map((button) => {
    const [display, isPress] = button.split(/(\*)/).reverse()
    const kind = (isPress == null && !isPress) ? FunctionButtonKind.TOGGLE : FunctionButtonKind.PRESS

    return {
      display,
      kind
    }
  })
}
