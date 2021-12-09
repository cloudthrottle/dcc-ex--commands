import {makeCommand} from "../utils";

export enum Direction {
  REVERSE = 0,
  FORWARD = 1
}

export type Speed = -1 | number;

export type ThrottleCommandParams = {
  cab: number;
  speed: Speed;
  direction: Direction.REVERSE | Direction.FORWARD
};

const throttleCommandKey = 't'

/**
 * https://dcc-ex.com/reference/software/command-reference.html#engine-decoder-cab-operation-commands
 */
export const throttleCommand: (params: ThrottleCommandParams) => string = ({cab, speed, direction}) => {
  const legacyAttribute = 1
  const attributes = [
    throttleCommandKey,
    legacyAttribute,
    cab.toString(),
    speed.toString(),
    direction.toString()
  ]
  const str = attributes.join(' ')
  return makeCommand(str)
};
