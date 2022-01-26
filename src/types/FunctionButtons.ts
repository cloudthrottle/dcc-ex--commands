import { BitValue } from './index.js'

export enum FunctionButtonKind {
  TOGGLE = 'toggle',
  PRESS = 'press'
}

export interface FunctionButton {
  value: BitValue
  display: string
  kind: FunctionButtonKind
}

export interface FunctionButtons<T = FunctionButton> {
  [name: number]: T
}
