import { CSSProperties } from 'vue'


export interface SwiperAttrs {
  style?: CSSProperties,
  width?: number | string,
  height?: number | string,
  autoplay?: number | string,
  duration?: number | string,
  initialSwipe?: number | string,
  loop?: boolean,
  showIndicators?: boolean,
  vertical?: boolean,
  touchable?: boolean,
  indicatorColor?: string
}