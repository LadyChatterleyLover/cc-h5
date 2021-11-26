import { CSSProperties } from 'vue'

export interface DividerAttrs {
  style?: CSSProperties,
  dashed?: boolean,
  hairline?: boolean,
  contentPosition?: 'left' | 'center' | 'right',
  text?: string
}