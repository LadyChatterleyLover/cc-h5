import { CSSProperties } from 'vue'


export interface ContactCardAttrs {
  style?: CSSProperties,
  // 类型
  type?: 'add' | 'edit',
  // 联系人姓名
  name?: string,
  // 联系人手机号
  tel?: string,
  // 添加时的文案提示
  addText?: string,
  // 是否可编辑
  editable?: boolean,
  icon?: string,
}