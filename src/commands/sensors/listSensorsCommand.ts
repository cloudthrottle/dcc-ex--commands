import { makeCommand } from '../utils'

const listSensorsCommandKey = 'S'

export function listSensorsCommand () {
  return makeCommand(listSensorsCommandKey)
}
