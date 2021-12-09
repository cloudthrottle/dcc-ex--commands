import { makeCommand } from '../utils'

const listSensorsCommandKey = 'S'

export const listSensorsCommand: () => string = () => makeCommand(listSensorsCommandKey)
