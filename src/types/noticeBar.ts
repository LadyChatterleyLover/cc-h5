import { CSSProperties } from 'vue'

export interface NoticeBarAttrs {
  style?: CSSProperties,
  mode?: '' | 'link' | 'vertical',
  text?: string,
  leftIcon?: string,
  color?: string,
  background?: string,
  delay?: string | number,
  scrollable?: boolean,
  wrapable?: boolean,
  speed?: number,
}