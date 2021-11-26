import { CSSProperties } from 'vue'

export interface ProgressOption {
  radius?: number,
  strokeOutWidth?: number,
  backColor?: string,
  progressColor?: string,
  text?: string,
  width?: number,
  height?: number
}

export interface CircleProgressAttrs {
  style?: CSSProperties,
  progress?: number | string,
  strokeInnerWidth?: number | string,
  isAuto?: boolean,
  progressOption?: ProgressOption
}