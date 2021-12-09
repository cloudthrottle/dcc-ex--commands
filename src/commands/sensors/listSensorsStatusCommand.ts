import { makeCommand } from '../utils'

const listSensorsStatusCommandKey = 'Q'

export function listSensorsStatusCommand () {
  return makeCommand(listSensorsStatusCommandKey)
}
