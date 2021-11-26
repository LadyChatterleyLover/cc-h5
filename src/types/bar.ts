import { CSSProperties } from 'vue'


interface XAxisData {
  name: string
}

export interface BarAttrs {
  style?: CSSProperties,
  width?: number,
  height?: number,
  title?: string,
  xAxisData: XAxisData[],
  seriesData: any[],
}