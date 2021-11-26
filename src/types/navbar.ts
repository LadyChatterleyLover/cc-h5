import { CSSProperties } from 'vue'


export interface NavbarAttrs {
  style?: CSSProperties,
  title?: string,
  desc?: string,
  leftShow?: boolean,
  icon?: string,
  titIcon?: string,
}