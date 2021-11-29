import { CSSProperties } from 'vue'


export interface CircleProgressAttrs {
  style?: CSSProperties,
  rate?: number,
  size?: number | string,
  color?: string,
  layerColor?: string,
  fill?: string,
  speed?: number | string,
  text?: string,
  strokeWidth?: number | string,
  strokeLinecap?: 'round' | 'square' | 'butt',
  clockwise?: boolean,
  startPosition?: 'top' | 'bottom' | 'left' | 'right'
}