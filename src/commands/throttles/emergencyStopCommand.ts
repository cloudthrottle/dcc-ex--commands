import { makeCommand } from '../../utils/index.js'

const emergencyStopCommandKey = '!'

/**
 * Stops all locos on the track but leaves power on
 */
export const emergencyStopCommand: () => string = () => {
  return makeCommand(emergencyStopCommandKey)
}
