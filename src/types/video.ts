import { CSSProperties } from 'vue'

export interface VideoSource {
  src: string
}

export interface VideoOptions {
  autoplay?: boolean,
  poster?: string,
  loop?: boolean,
  controls?: boolean,
  muted?: boolean,
  volume?: number,
  disabled?: boolean,
  playsinline?: boolean
}

export interface VideoAttrs {
  style?: CSSProperties,
  source: VideoSource,
  options?: VideoOptions
}