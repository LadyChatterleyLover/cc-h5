import { CSSProperties } from 'vue'

export interface ProgressAttrs {
  style?: CSSProperties,
  percentage?: number,
  strokeColor?: string,
  strokeWidth?: string,
  size?: 'base' | 'small' | 'large',
  showText?: boolean,
  textInside?: boolean,
  textColor?: string,
  status?: '' | 'active' | 'icon',
  iconName?: string,
  iconColor?: string
}