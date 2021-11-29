import { CSSProperties } from 'vue'


export interface NavbarAttrs {
  style?: CSSProperties,
  title?: string,
  leftText?: string,
  rightText?: string,
  leftArrow?: boolean,
  border?: boolean,
  fixed?: boolean,
  placeholder?: boolean,
  zIndex?: number | string,
  safeAreaInsetTop?: boolean
}