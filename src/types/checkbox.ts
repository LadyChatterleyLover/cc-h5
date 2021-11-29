import { CSSProperties } from 'vue'


export interface CheckboxAttrs {
  style?: CSSProperties,
  disabled?: boolean,
  max?: number,
  direction?: 'vertical' | 'horizontal',
  labelDisabled?: boolean,
  labelPosition?: 'left' | 'right',
  iconSize?: number | string,
  checkedColor?: string,
  text?: string,
}