import { CSSProperties } from 'vue'
import type { ContactListItem } from 'vant'

export interface ContactList {
  style?: CSSProperties,
  list?: ContactListItem[],
  addText?: string,
  defaultTagText?: string,
}