import { CSSProperties } from 'vue'


interface XAxisData {
  name: string
}

export interface LineAttrs {
  style?: CSSProperties,
  width?: number,
  height?: number,
  title?: string,
  xAxisData: XAxisData[],
  seriesData: any[],
  smooth?: boolean,
  areaStyle?: boolean
}