import { makeCommand } from '../utils'

const listSensorsStatusCommandKey = 'Q'

export const listSensorsStatusCommand: () => string = () => makeCommand(listSensorsStatusCommandKey)
