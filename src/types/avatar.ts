import { CSSProperties } from 'vue'

export interface AvatarAttrs {
  style?: CSSProperties,
  icon?: string,
  bgColor?: string,
  shape?: 'round' | 'square',
  size?: 'normal' | 'small' | 'large'
}