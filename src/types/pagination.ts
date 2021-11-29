import { CSSProperties } from 'vue'


export interface PaginationAttrs {
  style?: CSSProperties,
  mode?: 'multi' | 'simple',
  prevText?: string,
  nextText?: string,
  totalItems?: number | string,
  itemsPerPage?: number | string,
  showPageSize?: number | string,
  forceEllipses?: boolean,
}