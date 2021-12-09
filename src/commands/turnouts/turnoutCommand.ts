import { makeCommand } from '../utils'

export enum TurnoutState {
  CLOSED = 0,
  THROWN = 1
}
export interface TurnoutCommandParams {
  turnout: number
  thrown: TurnoutState
}

const turnoutCommandKey = 'T'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#controlling-a-defined-turnout
 */
export const turnoutCommand: (params: TurnoutCommandParams) => string = ({ turnout, thrown }) => {
  const attributes = [
    turnoutCommandKey,
    turnout,
    thrown.toString()
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
}
