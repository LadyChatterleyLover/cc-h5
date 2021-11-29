import { CSSProperties } from 'vue'

export interface StepperAttrs {
  style?: CSSProperties,
  min?: number | string,
  max?: number | string,
  step?: number | string,
  name?: number | string,
  inputWidth?: number | string,
  buttonSize?: number | string,
  decimalLength?: number | string,
  theme?: '' | 'round',
  placeholder?: string,
  integer?: boolean,
  disabled?: boolean,
  disablePlus?: boolean,
  disableMinus?: boolean,
  disableInput?: boolean,
  showPlus?: boolean,
  showMinus?: boolean,
  showInput?: boolean,
  longPress?: boolean,
}