import { CSSProperties } from 'vue'

export interface NoticeBarAttrs {
  style?: CSSProperties,
  direction?: 'across' | 'vertical',
  text?: string,
  closeMode?: boolean,
  leftIcon?: string,
  color?: string,
  background?: string,
  delay?: string | number,
  scrollable?: boolean,
  speed?: number,
  list?: any[],
  standTime?: number,
  complexAm?: boolean,
  height?: number,
}