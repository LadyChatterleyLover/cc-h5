import { CSSProperties } from 'vue'

export interface AreaAttrs {
  style?: CSSProperties,
  title?: string,
  confirmButtonText?: string,
  cancelButtonText?: string,
  areaList?: any,
  columnsPlaceholder?: string[],
  loading?: boolean,
  readonly?: boolean,
  columnsNum?: 1 | 2 | 3 | '1' | '2' | '3',
  visibleItemCount?: number | string,
  swipeDuration?: number | string,
}