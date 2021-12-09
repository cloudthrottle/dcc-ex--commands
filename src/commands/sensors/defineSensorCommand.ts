import {makeCommand} from "../utils";
import {BitValue} from "../../types";

export type DefineSensorCommandParams = { sensor: number; pin: number; pullUp: BitValue };

const defineSensorCommandKey = "S"

/**
 * https://dcc-ex.com/reference/software/command-reference.html#sensors-inputs
 */
export const defineSensorCommand: (params: DefineSensorCommandParams) => string = ({sensor, pin, pullUp}) => {
  const attributes = [
    defineSensorCommandKey,
    sensor,
    pin,
    pullUp
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
};
