import { ComponentItem } from "@/types"
import cloneDeep from "lodash/cloneDeep"

export const vueTemplate = (componentList: ComponentItem[]) => {
  let template = ``
  let attrs = ``
  let script = ``
  let isValue = componentList.find(item => item.field)
  if (isValue) script += `import {ref} from 'vue'
  `

  componentList.map(item => {
    for (let i in item.attrs) {
      let cloneAttrs: any = cloneDeep(item.attrs)
      attrs += `
      ${typeof cloneAttrs[i] !== 'undefined' ? `${typeof cloneAttrs[i] === 'boolean' ? `${cloneAttrs[i] ? i : `:${i}="false"`}` : `${typeof cloneAttrs[i] === 'number' ? `:${i}=${cloneAttrs[i]}` : `${i}='${cloneAttrs[i]}'`}`}` : ''}`
    }
    template += `
    <nut-${item.type} 
     ${item.field ? 'v-model=' + `"${item.field}"` : ''}
     ${attrs}>
     
    </nut-${item.type}>
    `
    script += `${item.field ? `
    let ${item.field} = ref('')` : ''}`
    attrs = ''
  })
  return `
    <template>
      ${template}
    </template>

    <script lang="ts" setup>
    ${script}
    </script>

    <style scoped lang="scss"></style>
  `
}
