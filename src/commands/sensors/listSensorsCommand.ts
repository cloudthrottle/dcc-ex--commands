import { makeCommand } from '../../utils/index.js'

const listSensorsCommandKey = 'S'

export const listSensorsCommand: () => string = () => makeCommand(listSensorsCommandKey)
