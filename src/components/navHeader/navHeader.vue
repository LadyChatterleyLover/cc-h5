<template>
  <div class="header">
    <div class="logo">
      <div>cc-h5</div>
      <div>
        <a href="https://github.com/LadyChatterleyLover/cc-h5" target="_blank" class="github">
          <img src="https://github.githubassets.com/pinned-octocat.svg" />
        </a>
      </div>
    </div>
    <div class="icons">
      <a-button @click="open" style="margin-right: 20px;" type="primary" size="small">模板库</a-button>
      <div class="item" @click="clickItem(item)" v-for="(item, index) in list" :key="index">
        <div class="icon">
          <component :is="item.icon"></component>
        </div>
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>

  <a-modal v-model:visible="previewVisible" title="真机测试" :footer="null">
    <div class="content">
      <h3>请扫描下面二维码预览</h3>
      <van-qrcode value="http://169.254.63.127:3000/#/preview" :width="200"></van-qrcode>
    </div>
  </a-modal>

  <a-modal v-model:visible="saveVisible" title="保存模板" @ok="saveOk" @cancel="saveCancel">
    <a-form
      ref="form"
      :model="model"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      destroyOnClose
    >
      <a-form-item label="模板标题" name="title">
        <a-input v-model:value="model.title" placeholder="请输入模板标题"></a-input>
      </a-form-item>
      <a-form-item label="模板分类" name="category">
        <a-select v-model:value="model.category" style="width: 100%" placeholder="请选择模板分类">
          <a-select-option
            v-for="(item, index) in options"
            :key="index"
            :value="item.value"
          >{{ item.label }}</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>

  <a-modal
    class="cc-h5-template-modal"
    v-model:visible="templateVisible"
    title="模板库"
    :footer="null"
    :width="1000"
  >
    <a-tabs v-model:activeKey="activeKey" tab-position="left">
      <a-tab-pane v-for="(item, index) in options" :key="item.value" :tab="item.label">
        <div class="template" v-if="currentTemplate.length">
          <div class="template-item" v-for="(item, index) in currentTemplate" :key="index">
            <div class="title">{{ item.title }}</div>
            <div>
              <img :src="item.cover" />
            </div>
            <div class="btn">
              <a-button @click.stop="useTemplate(item)" type="primary" size="small">立即使用</a-button>
            </div>
          </div>
        </div>
        <div v-else>暂无模板</div>
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script lang="ts" setup>
import { PlayCircleOutlined, SaveOutlined, ExclamationCircleOutlined, EyeOutlined, DownloadOutlined, CopyOutlined, DeleteOutlined, MobileOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import { Modal, message } from 'ant-design-vue'
import { computed, ComputedRef, ref, watch, createVNode } from 'vue'
import { useCopy } from '../../hooks/useCopy'
import { ComponentItem } from '@/types'
import { vueTemplate } from '@/utils/template'
import { saveAs } from 'file-saver'
import { getTemplate, saveTemplate } from '@/http/api'
import html2canvas from 'html2canvas'

interface ListItem {
  icon: any,
  name: string
}
interface Options {
  label: string,
  value: string
}

let store = useStore()

let form = ref<any>()
let componentList: ComputedRef<ComponentItem[]> = computed(() => store.state.componentList)
let previewVisible = ref<boolean>(false)
let saveVisible = ref<boolean>(false)
let templateVisible = ref<boolean>(false)
let cover = ref<string>('')
let activeKey = ref<string>()
let templates = ref<any[]>([])
let currentTemplate = ref<any[]>([])

let labelCol = { span: 4 }
let wrapperCol: { span: 14 }

let model = ref<any>({
  title: '',
  category: undefined
})
let rules = ref<any>({
  title: [
    {
      required: true,
      message: '模板标题不能为空',
      trigger: 'blur'
    }
  ],
  category: [
    {
      required: true,
      message: '模板分类不能为空',
      trigger: 'blur'
    }
  ]
})

let list: ListItem[] = [
  {
    icon: SaveOutlined,
    name: '保存模板'
  },
  {
    icon: PlayCircleOutlined,
    name: '预览'
  },
  {
    icon: MobileOutlined,
    name: '真机调试',
  },
  {
    icon: EyeOutlined,
    name: '查看json'
  },
  {
    icon: DownloadOutlined,
    name: '导出vue文件'
  },
  {
    icon: CopyOutlined,
    name: '复制代码'
  },
  {
    icon: DeleteOutlined,
    name: '清空'
  }
]


let options: Options[] = [
  {
    label: '教育/培训',
    value: '教育/培训'
  },
  {
    label: '餐饮/美食',
    value: '餐饮/美食'
  },
  {
    label: '电商',
    value: '电商'
  },
  {
    label: '美容美妆',
    value: '美容美妆'
  },
  {
    label: '金融理财',
    value: '金融理财'
  },
  {
    label: 'IT互联网',
    value: 'IT互联网'
  },
  {
    label: '医疗医药',
    value: '医疗医药'
  },
  {
    label: '酒店旅游',
    value: '酒店旅游'
  },
  {
    label: '运动健身',
    value: '运动健身'
  },
  {
    label: '地产家居',
    value: '地产家居'
  },
  {
    label: '工业制造',
    value: '工业制造'
  },
  {
    label: '其他',
    value: '其他'
  },
]

let clickItem = (item: ListItem) => {
  if (!componentList.value) {
    message.warn('请先生成组件')
    return
  }
  else {
    if (item.name === '保存模板') {
      saveVisible.value = true
      let dom = document.getElementById('cc-h5-editor')
      html2canvas(dom!, { useCORS: true, allowTaint: true }).then(resolve => {
        cover.value = resolve.toDataURL('image/png')
      })
    }
    if (item.name === '清空') {
      Modal.confirm({
        title: '确认要清空组件吗?',
        onOk() {
          store.commit('setCurrentComponent', null)
          store.commit('setComponentList', null)
          store.commit('setActiveIndex', null)
          localStorage.removeItem('currentComponent')
          localStorage.removeItem('componentList')
          localStorage.removeItem('activeIndex')
          message.success('清空成功')
        }
      })
    }
    if (item.name === '真机调试') {
      previewVisible.value = true
    }
    if (item.name === '预览') {
      if (!componentList.value) message.warn('请先生成组件')
      else window.open('/preview', '_blank')
    }
    if (item.name === '导出vue文件') {
      let str = vueTemplate(componentList.value)
      const blob = new Blob([str!], { type: 'text/plain;charset=utf-8' })
      saveAs(blob, `${Date.now()}.vue`)
    }
    if (item.name === '复制代码') {
      let str = vueTemplate(componentList.value)
      useCopy(str!)

    }
    if (item.name === '查看json') {
      let str = JSON.stringify(componentList.value)
      const blob = new Blob([str!], { type: 'text/plain;charset=utf-8' })
      saveAs(blob, `${Date.now()}.json`)

    }
  }
}

let saveOk = () => {
  form.value
    .validate()
    .then(() => {
      saveTemplate({
        title: model.value.title,
        category: model.value.category,
        cover: cover.value,
        config: componentList.value
      }).then((res: any) => {
        if (res.code === 200) {
          message.success(res.msg)
        } else {
          message.error(res.msg)
        }
      })
      saveVisible.value = false
      form.value.resetFields()
    })
    .catch(() => {
      message.error('表单填写有误,请检查')
      form.value.resetFields()
      return
    })
}
let saveCancel = () => {
  form.value.resetFields()
  saveVisible.value = false
}

let open = () => {
  templateVisible.value = true
  getTemplate().then((res: any) => {
    if (res.code === 200) {
      templates.value = res.data
      activeKey.value = options[2].value
    }
  })
}

let useTemplate = (item: any) => {
  if (componentList.value) {
    Modal.confirm({
      title: 'cc-h5温馨提示',
      icon: createVNode(ExclamationCircleOutlined),
      content: '导入模板会在已有页面追加元素，如画布中元素不需要, 可及时清空~',
      cancelText: '去清空',
      okText: '确认导入',
      onOk() {
        let arr = componentList.value.concat(item.config)
        localStorage.setItem('componentList', JSON.stringify(arr))
        store.commit('setComponentList', arr)
        templateVisible.value = false
      }
    })
  } else {
    localStorage.setItem('componentList', JSON.stringify(item.config))
    store.commit('setComponentList', item.config)
    templateVisible.value = false
  }
}

watch(() => [activeKey.value, templates.value], val => {
  currentTemplate.value = (val[1] as any)!.filter((item: any) => item.category === val[0])
})
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
  height: 50px;
  .logo {
    display: flex;
    align-items: center;
    line-height: 30px;
    color: #00afff;
    font-weight: 600;
    font-size: 17px;
    .github {
      display: inline-block;
      vertical-align: sub;
      margin-left: 15px;
    }
    img {
      height: 22px;
      position: relative;
      top: -4px;
    }
  }
  .icons {
    display: flex;
    align-items: center;
    .item {
      display: flex;
      align-items: center;
      margin-right: 15px;
      color: #409eff;
      cursor: pointer;
      &:last-child {
        color: #f56c6c;
      }
      .icon {
        margin-right: 3px;
      }
    }
  }
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.template {
  display: flex;
  flex-wrap: wrap;
  &-item {
    width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 15px;
    position: relative;
    &:hover {
      .btn {
        display: block;
      }
    }
    .btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      display: none;
    }
    .title {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    img {
      width: 210px;
      height: 360px;
    }
  }
}
</style>
