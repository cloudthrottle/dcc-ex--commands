import { makeCommandFromAttributes } from '../../utils/makeCommand'

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
    thrown
  ]
  return makeCommandFromAttributes(attributes)
}
