import { CSSProperties } from 'vue'
import type { AddressListAddress } from 'vant'

export interface AddressListAttrs {
  style?: CSSProperties,
  list?: AddressListAddress[],
  disabledList?: AddressListAddress[],
  disabledText?: string,
  switchable?: boolean,
  addButtonText?: string,
  defaultTagText?: string,
}