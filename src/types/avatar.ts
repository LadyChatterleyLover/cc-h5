import { CSSProperties } from 'vue'

export interface AvatarAttrs {
  style?: CSSProperties,
  src?: string,
  round?: boolean,
  size?: '' | 'small' | 'large'
}