import { CSSProperties } from 'vue'

interface ListItem {
  src?: string,
  title?: string,
}

export interface GoodsNavAttrs {
  style?: CSSProperties,
  rowNum?: number,
  list: ListItem[],
  titleColor?: string,
  titleFontSize?: number | string,
  imgWidth?: number | string,
  imgHeight?: number | string,
  imgMarginTop?: number | string,
  imgMarginBottom?: number | string,
  titleMarginTop?: number | string,
  titleMarginBottom?: number | string,
}