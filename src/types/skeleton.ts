import { CSSProperties } from 'vue'


export interface SkeletonAttrs {
  style?: CSSProperties,
  row?: number | string,
  title?: boolean,
  avatar?: boolean,
  animate?: boolean,
  round?: boolean,
  rowWidth?: number | string,
  titleWidth?: number | string,
  avatarSize?: number | string,
  avatarShape?: 'round' | 'square'
}