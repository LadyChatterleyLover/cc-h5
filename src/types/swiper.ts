import { CSSProperties } from 'vue'


export interface SwiperAttrs {
  style?: CSSProperties,
  width?: number | string,
  height?: number | string,
  direction?: 'horizontal' | 'vertical',
  paginationVisible?: boolean,
  paginationColor?: string,
  loop?: boolean,
  duration?: number | string,
  autoPlay?: number,
  initPage?: number,
  touchable?: boolean,
  src?: string
}