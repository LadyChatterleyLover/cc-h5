import { CSSProperties } from 'vue'
import { AddressEditInfo } from 'vant'

export interface AddressEditAttrs {
  style?: CSSProperties,
  areaList?: any,
  areaPlaceholder?: string,
  addressInfo?: AddressEditInfo,
  showPostal?: boolean,
  showDelete?: boolean,
  showSetDefault?: boolean,
  showArea?: boolean,
  showDetail?: boolean,
  disableArea?: boolean,
  saveButtonText?: string,
  deleteButtonText?: string,
  isSaving?: boolean,
  isDeleting?: boolean,
}