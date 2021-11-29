import { ComponentItem } from "@/types"
import cloneDeep from "lodash/cloneDeep"

let template = ``
let attrs = ``
let script = ``
let childStr = ``
let slots = ``
let cloneAttrs: any = {}
let objStr = ``

const jsonReplace = (val: string) => {
  return val.
    replace(/\"name\"/g, 'name')
    .replace(/\"value\"/g, 'value')
    .replace(/\"data\"/g, 'data')
    .replace(/\"text\"/g, 'text')
    .replace(/\"src\"/g, 'src')
}


const generateSlot = (attrs: any, name: string) => {
  if (attrs[name]) {
    if (attrs[name].startsWith('icon-')) {
      slots += `
      <template #${name}>
        <van-icon name="${attrs[name].slice(5)}"></van-icon>
      </template>`
    } else {
      slots += `
      <template #${name}>
        <span>${attrs[name]}</span>
      </template>`
    }
  }
}



export const vueTemplate = (componentList: ComponentItem[]) => {
  if (componentList && componentList.length) {
    let isValue = componentList.find(item => item.field || (item.attrs as any).seriesData)
    if (isValue) script = `import {ref} from 'vue'
  `
    componentList.map(item => {
      cloneAttrs = cloneDeep(item.attrs)
      for (let i in item.attrs) {
        if (i === 'width' || i === 'height') {
          if (item.type === 'line' || item.type === 'bar' || item.type === 'pie' || item.type === 'funnel') {
            let style = ``
            style += `${i}: ${cloneAttrs[i]}px;`
            attrs = `style="${style}"`
          }
        } else {
          if (Array.isArray(cloneAttrs[i])) {
            attrs += `
      :${i}="${i}"`
            objStr += `
let ${i} = ref(${jsonReplace(JSON.stringify(cloneAttrs[i]))})`
          } else {
            attrs += `
      ${typeof cloneAttrs[i] !== 'undefined' && cloneAttrs[i] !== '' ? `${typeof cloneAttrs[i] === 'boolean' ? `${cloneAttrs[i] ? i : `:${i}="false"`}` : `${typeof cloneAttrs[i] === 'number' ? `:${i}="${cloneAttrs[i]}"` : `${i}="${cloneAttrs[i]}"`}`}` : ''}`
          }
        }
      }

      if (item.type === 'searchbar') {
        if (cloneAttrs.leftin) generateSlot(cloneAttrs, 'leftin')
        if (cloneAttrs.leftout) generateSlot(cloneAttrs, 'leftout')
        if (cloneAttrs.rightin) generateSlot(cloneAttrs, 'rightin')
        if (cloneAttrs.rightout) generateSlot(cloneAttrs, 'rightout')
      }
      if (item.type === 'tabbar' || item.type === 'swiper') {
        let childAttrs = ``
        item.children!.map(child => {
          for (let i in child.attrs) {
            if ((child.attrs as any)[i]) {
              childAttrs += `
              ${i}="${(child.attrs as any)[i]}"`
            }
          }
          if (item.type === 'tabbar') {
            childStr += `
          <van-${child.type} ${childAttrs}>
          </van-${child.type}>`
          } else {
            childStr += `
          <van-${child.type}>
            <img style="width: ${cloneAttrs.width}px;height:${cloneAttrs.height}px;" src="${(child.attrs as any).src}">
          </van-${child.type}>
            `
          }
          childAttrs = ''
        })
      }
      template += `
    <van-${item.type} 
     ${item.field ? 'v-model=' + `"${item.field}"` : ''}
     ${attrs}>
     ${childStr}
     ${item.type === 'searchbar' ? slots : ''}
    </van-${item.type}>
    `
      script += `${objStr}${item.field ? `
    let ${item.field} = ref(${item.value ? item.value : '""'})` : ''}`
      attrs = ''
      slots = ''
      objStr = ''
      childStr = ''
    })
    return `<template>
      ${template}
    </template>

<script lang="ts" setup>
  ${script}
</script>

<style scoped lang="scss"></style>
  `
  }
}

