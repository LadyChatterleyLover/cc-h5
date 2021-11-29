import { CSSProperties } from 'vue'

export interface ButtonAttrs {
  style?: CSSProperties,
  type?: 'default' | 'primary' | 'warning' | 'danger' | 'success',
  size?: 'normal' | 'small' | 'large' | 'mini',
  color?: string,
  plain?: boolean,
  disabled?: boolean,
  block?: boolean,
  square?: boolean,
  round?: boolean,
  loading?: boolean,
  hairline?: boolean,
  icon?: string,
  text?: string,
  iconPosition?: 'left' | 'right',
  loadingText?: string,
  loadingType?: 'circular' | 'spinner',
  url?: string,
  to?: string,
  replace?: boolean
}