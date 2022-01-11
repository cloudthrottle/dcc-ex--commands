import { makeCommand } from '../../utils/index.js'

const listSensorsStatusCommandKey = 'Q'

export const listSensorsStatusCommand: () => string = () => makeCommand(listSensorsStatusCommandKey)
