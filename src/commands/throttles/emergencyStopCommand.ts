import {makeCommand} from "../utils";

const emergencyStopCommandKey = '!'

/**
 * Stops all locos on the track but leaves power on
 */
export const emergencyStopCommand: () => string = () => {
  return makeCommand(emergencyStopCommandKey)
};
