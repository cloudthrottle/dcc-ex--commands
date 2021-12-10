import { makeCommandFromAttributes } from '../../utils'

export enum TransitionProfile {
  IMMEDIATE = 0,
  FAST = 1,
  MEDIUM = 2,
  SLOW = 3,
  BOUNCE = 4
}

export interface DefineServoTurnoutCommandParams {
  turnout: number
  pin: number
  thrownPosition: number
  closedPosition: number
  profile: TransitionProfile
}

const defineServoTurnoutCommandKey = 'T'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#defining-setting-up-a-turnout
 */
export const defineServoTurnoutCommand: (params: DefineServoTurnoutCommandParams) => string = ({
  turnout,
  pin,
  thrownPosition,
  closedPosition,
  profile
}) => {
  const constant = 'SERVO'
  const attributes = [
    defineServoTurnoutCommandKey,
    turnout,
    constant,
    pin,
    thrownPosition,
    closedPosition,
    profile
  ]
  return makeCommandFromAttributes(attributes)
}
