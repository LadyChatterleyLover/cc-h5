import { CSSProperties } from 'vue'


interface ContactInfo {
  name?: string,
  tel?: number | string,
}

export interface ContactEdit {
  style?: CSSProperties,
  contactInfo?: ContactInfo,
  isEdit?: boolean,
  isSaving?: boolean,
  isDeleting?: boolean,
  showSetDefault?: boolean,
  setDefaultLabel?: string
}