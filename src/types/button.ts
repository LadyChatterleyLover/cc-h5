import { CSSProperties } from 'vue';

export interface ButtonAttrs {
  style?: CSSProperties,
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger' | 'success',
  size?: 'normal' | 'small' | 'large',
  shape?: 'square' | 'round',
  color?: string,
  plain?: boolean,
  disabled?: boolean,
  block?: boolean,
  loading?: boolean,
  icon?: string,
  text?: string
}