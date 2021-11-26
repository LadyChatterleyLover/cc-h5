import { CSSProperties } from 'vue'

export interface QrcodeAttrs {
  style?: CSSProperties,
  value?: string,
  tag?: 'canvas' | 'img' | 'svg',
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H',
  backgroundColor?: string,
  src?: string,
  margin?: number,
  width?: number,
  imgWidth?: number | string,
  imgHeight?: number | string,
}