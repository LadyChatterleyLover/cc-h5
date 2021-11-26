import { CSSProperties } from 'vue'

interface SeriesData {
  value: any,
  name: string
}

export interface PieAttrs {
  style?: CSSProperties,
  width?: number,
  height?: number,
  title?: string,
  seriesData: SeriesData,
}