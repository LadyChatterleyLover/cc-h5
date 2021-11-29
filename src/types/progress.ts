import { CSSProperties } from 'vue'

export interface ProgressAttrs {
  style?: CSSProperties,
  percentage?: number,
  color?: string,
  strokeWidth?: string,
  trackColor?: string,
  pivotColor?: string,
  textColor?: string,
  inactive?: boolean,
  showPivot?: boolean
  pivotText?: string,
}