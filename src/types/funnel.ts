import { CSSProperties } from 'vue'

interface SeriesData {
  value: any,
  name: string
}

export interface FunnelAttrs {
  style?: CSSProperties,
  width?: number,
  height?: number,
  title?: string,
  seriesData: SeriesData,
}