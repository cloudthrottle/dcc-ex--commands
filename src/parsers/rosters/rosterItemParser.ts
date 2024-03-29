import { Command, parseCommand, removeDoubleQuotes } from '../../utils/index.js'
import {
  FunctionButton,
  FunctionButtonKind,
  FunctionButtons,
  FunctionName,
  ParserResult,
  ParserStatus
} from '../../types/index.js'
import { ParserAttributeError, ParserKeyError } from '../errors/index.js'

type RosterFunctionButton = Pick<FunctionButton, 'display' | 'kind'>
type RosterFunctionButtons = FunctionButtons<RosterFunctionButton>
interface RosterItemParams {
  cabId: number
  display: string
  functionButtons: RosterFunctionButtons
}

export type RosterItemResult = ParserResult<RosterItemParams>
const rosterItemParserKey = 'jR'

const functionButtonsParser = (param: string | null = null): RosterFunctionButtons => {
  if (param === null) {
    return {}
  }

  const buttons = param.split('/')

  return buttons.reduce<RosterFunctionButtons>((accum, button, index) => {
    const [display, isPress] = button.split(/(\*)/).reverse()
    const kind = (isPress == null && !isPress) ? FunctionButtonKind.TOGGLE : FunctionButtonKind.PRESS
    accum[index] = {
      display: removeDoubleQuotes(display),
      kind
    }
    return accum
  }, {})
}

const parseFromCommand: (params: Command) => RosterItemResult = ({ key, attributes }) => {
  const [cabId, display, rawFunctionButtons] = attributes

  if (key !== rosterItemParserKey || attributes.length > 3) {
    throw new ParserKeyError('rosterItemParser', key)
  }

  if (!display.includes('"')) {
    throw new ParserAttributeError('display', display, 'display must be wrapped in double quotes')
  }

  const functionButtons = functionButtonsParser(rawFunctionButtons)

  return {
    key: rosterItemParserKey,
    parser: FunctionName.ROSTER_ITEM,
    status: ParserStatus.SUCCESS,
    params: {
      cabId: parseInt(cabId),
      display: removeDoubleQuotes(display),
      functionButtons
    }
  }
}

export const rosterItemParser: (command: string) => RosterItemResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
