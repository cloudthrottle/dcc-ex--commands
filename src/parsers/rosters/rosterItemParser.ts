import { Command, parseCommand } from '../../utils/index.js'
import { FunctionName, ParserResult, ParserStatus } from '../../types/index.js'
import { ParserKeyError } from '../errors/index.js'

export enum FunctionButtonKind {
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

export type RosterItemResult = ParserResult<RosterItemParams>
const rosterItemParserKey = 'j'

const functionButtonsParser = (param: string | null = null): FunctionButtons => {
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

const parseFromCommand: (params: Command) => RosterItemResult = ({ key, attributes }) => {
  const [cabId, display, rawFunctionButtons] = attributes

  if (key !== rosterItemParserKey) {
    throw new ParserKeyError('rosterItemParser', key)
  }

  const functionButtons: FunctionButtons = functionButtonsParser(rawFunctionButtons)

  return {
    key: rosterItemParserKey,
    parser: FunctionName.ROSTER_ITEM,
    status: ParserStatus.SUCCESS,
    params: {
      cabId: parseInt(cabId),
      display,
      functionButtons
    }
  }
}

export const rosterItemParser: (command: string) => RosterItemResult = (command) => {
  const commandParams = parseCommand(command)
  return parseFromCommand(commandParams)
}
