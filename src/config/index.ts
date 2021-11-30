import { ComponentItem } from '@/types'
import { areaList } from '@vant/area-data'

export const baseComponent: ComponentItem[] = [
  {
    type: 'icon',
    label: '图标',
    icon: 'info-o',
    attrs: {
      name: 'info-o',
      color: 'inherit',
      company: 'px',
      size: '20',
      dot: false,
      badge: ''
    }
  },
  {
    type: 'button',
    label: '按钮',
    icon: 'setting-o',
    attrs: {
      text: '按钮',
      type: 'default',
      size: 'normal',
      square: false,
      round: false,
      hairline: false,
      color: '',
      plain: false,
      disabled: false,
      block: false,
      loading: false,
      icon: '',
      iconPosition: 'left',
      loadingText: '',
      loadingType: 'circular',
      url: '',
      to: '',
      replace: false
    }
  },
  {
    type: 'search',
    label: '搜索框',
    icon: 'search',
    value: '',
    field: 'searchValue',
    attrs: {
      placeholder: '请搜索',
      background: '',
      maxLength: '',
      clearable: true,
      shape: 'square',
      clearIcon: 'clear',
      leftIcon: 'search',
      rightIcon: '',
      left: '',
      action: '',
      label: '',
      showAction: false,
      actionText: '取消',
      disabled: false,
      readonly: false,
      error: false,
      errorMessage: '',
      inputAlign: 'left',
    }
  },
  {
    type: 'field',
    value: '',
    label: '输入框',
    icon: 'edit',
    field: 'value',
    attrs: {
      placeholder: '请输入',
      maxlength: '',
      size: '',
      type: 'text',
      label: '文本',
      required: false,
      disabled: false,
      readonly: false,
      clearable: true,
      colon: false,
      isLink: false,
      showWordLimit: false,
      border: false,
      error: false,
      errorMessage: '',
      labelAlign: 'left',
      inputAlign: 'left',
      leftIcon: '',
      rightIcon: '',
    }
  },
  {
    type: 'radio-group',
    label: '单选框',
    icon: 'passed',
    value: '1',
    field: 'radio',
    attrs: {
      direction: 'vertical',
      disabled: false,
      iconSize: 20,
      checkedColor: '#1989fa'
    },
    children: [
      {
        type: 'radio',
        attrs: {
          name: '1',
          shape: 'round',
          disabled: false,
          labelDisabled: false,
          labelPosition: 'left',
          iconSize: 20,
          checkedColor: '#1989fa',
          text: '选项1'
        }
      },
      {
        type: 'radio',
        attrs: {
          name: '2',
          shape: 'round',
          disabled: false,
          labelDisabled: false,
          labelPosition: 'left',
          iconSize: 20,
          checkedColor: '#1989fa',
          text: '选项2'
        }
      },
      {
        type: 'radio',
        attrs: {
          name: '3',
          shape: 'round',
          disabled: false,
          labelDisabled: false,
          labelPosition: 'left',
          iconSize: 20,
          checkedColor: '#1989fa',
          text: '选项3'
        }
      },
    ]
  },
  {
    type: 'checkbox-group',
    icon: 'passed',
    label: '复选框',
    value: ['1'],
    field: 'checkbox',
    attrs: {
      direction: 'vertical',
      disabled: false,
      iconSize: 20,
      checkedColor: '#1989fa'
    },
    children: [
      {
        type: 'checkbox',
        attrs: {
          name: '1',
          shape: 'round',
          disabled: false,
          labelDisabled: false,
          labelPosition: 'left',
          iconSize: 20,
          checkedColor: '#1989fa',
          text: '选项1'
        }
      },
      {
        type: 'checkbox',
        attrs: {
          name: '2',
          shape: 'round',
          disabled: false,
          labelDisabled: false,
          labelPosition: 'left',
          iconSize: 20,
          checkedColor: '#1989fa',
          text: '选项2'
        }
      },
      {
        type: 'checkbox',
        attrs: {
          name: '3',
          shape: 'round',
          disabled: false,
          labelDisabled: false,
          labelPosition: 'left',
          iconSize: 20,
          checkedColor: '#1989fa',
          text: '选项3'
        }
      },
    ]
  },
  {
    type: 'stepper',
    value: 1,
    field: 'stepper',
    icon: 'plus',
    label: '步进器',
    attrs: {
      min: 1,
      max: 100,
      step: 1,
      name: '',
      inputWidth: 32,
      buttonSize: 28,
      decimalLength: '',
      theme: '',
      placeholder: '',
      integer: false,
      disabled: false,
      disablePlus: false,
      disableMinus: false,
      disableInput: false,
      showPlus: true,
      showMinus: true,
      showInput: true,
      longPress: true,
    }
  },
  {
    type: 'swipe',
    label: '轮播图',
    icon: 'photo-o',
    attrs: {
      width: 375,
      height: 150,
      autoplay: 3000,
      duration: 500,
      initialSwipe: 0,
      loop: true,
      showIndicators: true,
      vertical: false,
      touchable: true,
      indicatorColor: '#1989fa'
    },
    children: [
      {
        type: 'swipe-item',
        attrs: {
          src: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg'
        }
      },
      {
        type: 'swipe-item',
        attrs: {
          src: 'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'
        }
      },
      {
        type: 'swipe-item',
        attrs: {
          src: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg'
        }
      }
    ]
  },
  {
    type: 'notice-bar',
    label: '通知栏',
    icon: 'bullhorn-o',
    attrs: {
      mode: '',
      text: "在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准",
      leftIcon: 'volume-o',
      color: '#ed6a0c',
      background: '#fffbe8',
      delay: 1,
      scrollable: true,
      wrapable: false,
      speed: 60,
    }
  },
  {
    type: 'nav-bar',
    label: '头部导航',
    icon: 'arrow-left',
    attrs: {
      title: '订单详情',
      leftText: '返回',
      rightText: '更多',
      leftArrow: true,
      border: false,
      fixed: false,
      placeholder: false,
      zIndex: 1,
      safeAreaInsetTop: false
    }
  },
  {
    type: 'avatar',
    label: '头像',
    icon: 'user-o',
    attrs: {
      src: 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png',
      round: true,
      size: ''
    }
  },
  {
    type: 'slider',
    label: '滑块',
    icon: 'revoke',
    value: 0,
    attrs: {
      range: false,
      max: 100,
      min: 0,
      step: 1,
      disabled: false,
      activeColor: '#1989fa',
      inactiveColor: '#e5e5e5',
      buttonSize: 24,
      barHeight: 2,
      readonly: false,
      vertical: false
    }
  },
  {
    type: 'divider',
    label: '分割线',
    icon: 'minus',
    attrs: {
      dashed: false,
      hairline: true,
      contentPosition: 'center',
      text: '文本'
    }
  },
  {
    type: 'tabbar',
    label: '标签栏',
    icon: 'sign',
    value: 0,
    attrs: {
      bottom: true,
      size: '20',
      inactiveColor: '#7d7e80',
      activeColor: '#1989fa',
      route: false,
      fixed: false,
      border: false,
      placeholder: false,
      safeAreaInsetBottom: false,
    },
    children: [
      {
        type: 'tabbar-item',
        attrs: {
          name: '首页',
          icon: 'home-o',
          href: '',
          to: '',
          badge: '',
          dot: false
        }
      },
      {
        type: 'tabbar-item',
        attrs: {
          name: '分类',
          icon: 'apps-o',
          href: '',
          to: '',
          badge: '',
          dot: false
        }
      },
      {
        type: 'tabbar-item',
        attrs: {
          name: '购物车',
          icon: 'cart-o',
          href: '',
          to: '',
          badge: '',
          dot: false
        }
      },
      {
        type: 'tabbar-item',
        attrs: {
          name: '我的',
          icon: 'user-o',
          href: '',
          to: '',
          badge: '',
          dot: false
        }
      }
    ]
  },
  {
    type: 'tag',
    label: '标签',
    icon: 'label-o',
    attrs: {
      text: '标签',
      size: '',
      type: 'default',
      color: '',
      textColor: 'white',
      plain: false,
      round: false,
      mark: false,
      closeable: false,
    }
  },
  {
    type: 'rate',
    label: '评分',
    value: 3,
    field: 'rate',
    icon: 'star-o',
    attrs: {
      count: 5,
      size: 20,
      color: '#ee0a24',
      voidColor: '#c8c9cc',
      disabledColor: '#c8c9cc',
      icon: 'star',
      voidIcon: 'star-o',
      allowHalf: false,
      readonly: false,
      disabled: false,
      touchable: true,
      gutter: 4
    }
  },
  {
    type: 'switch',
    label: '开关',
    icon: 'eye-o',
    value: false,
    attrs: {
      disabled: false,
      loading: false,
      size: 20,
      activeColor: '#fa2c19',
      inactiveColor: '#ebebeb',
      activeValue: true,
      inactiveValue: false,
    }
  },
  {
    type: 'progress',
    label: '进度条',
    icon: 'exchange',
    attrs: {
      percentage: 60,
      strokeWidth: '10',
      color: '#1989fa',
      trackColor: '#e5e5e5',
      pivotColor: '#1989fa',
      textColor: 'white',
      inactive: false,
      showPivot: true,
      pivotText: '',
    }
  },
  {
    type: 'circle',
    label: '环形进度条',
    icon: 'replay',
    value: 60,
    field: 'circle',
    attrs: {
      rate: 60,
      size: '100',
      color: '#1989fa',
      layerColor: '#fff',
      fill: 'none',
      speed: 0,
      text: '',
      strokeWidth: 40,
      strokeLinecap: 'round',
      clockwise: true,
      startPosition: 'top'
    }
  },
  {
    type: 'empty',
    label: '空状态',
    icon: 'close',
    attrs: {
      image: 'default',
      imageSize: '',
      description: ''
    }
  },
  {
    type: 'skeleton',
    label: '骨架屏',
    icon: 'font-o',
    attrs: {
      row: 3,
      title: false,
      avatar: false,
      animate: false,
      round: false,
      rowWidth: 100,
      titleWidth: 40,
      avatarSize: 32,
      avatarShape: 'round'
    }
  },
  {
    type: 'pagination',
    label: '分页',
    icon: 'aim',
    value: 1,
    field: 'pagination',
    attrs: {
      mode: 'multi',
      prevText: '上一页',
      nextText: '下一页',
      totalItems: 100,
      itemsPerPage: 10,
      showPageSize: 5,
      forceEllipses: false,
    }
  },
  {
    type: 'loading',
    label: '加载',
    icon: 'underway-o',
    attrs: {
      color: '#c9c9c9',
      type: 'circular',
      size: 30,
      textSize: 14,
      textColor: '#c9c9c9',
      vertical: false,
      text: ''
    }
  },
  {
    type: 'cell',
    label: '单元格',
    icon: 'records',
    attrs: {
      title: '单元格',
      value: '内容',
      label: '描述信息',
      size: '',
      icon: 'location-o',
      rightIcon: '',
      extra: '',
      url: '',
      to: '',
      border: true,
      replace: false,
      clickable: false,
      isLink: true,
      required: false,
      center: false,
      arrowDirection: 'right'
    }
  },
  {
    type: 'steps',
    label: '步骤条',
    icon: 'flag-o',
    attrs: {
      active: 0,
      direction: 'horizontal',
      activeIcon: 'checked',
      inactiveIcon: '',
      finishIcon: '',
      activeColor: '#07c160',
      inactiveColor: '#969799',
    },
    children: [
      {
        type: 'step',
        attrs: { name: '买家下单' }
      },
      {
        type: 'step',
        attrs: { name: '商家接单' }
      },
      {
        type: 'step',
        attrs: { name: '买家提货' }
      },
      {
        type: 'step',
        attrs: { name: '交易完成' }
      },
    ]
  }
]

export const chartsComponents: ComponentItem[] = [
  {
    type: 'line',
    label: '折线图',
    icon: 'bar-chart-o',
    attrs: {
      width: 375,
      height: 300,
      title: '折线图',
      smooth: false,
      areaStyle: false,
      xAxisData: [
        { name: 'Mon' },
        { name: 'Tue' },
        { name: 'Wed' },
        { name: 'Thu' },
        { name: 'Fri' },
        { name: 'Sat' },
        { name: 'Sun' }
      ],
      seriesData: [
        { data: 820 },
        { data: 932 },
        { data: 901 },
        { data: 934 },
        { data: 1290 },
        { data: 1330 },
        { data: 1320 }
      ]
    }
  },
  {
    type: 'bar',
    label: '柱状图',
    icon: 'chart-trending-o',
    attrs: {
      width: 375,
      height: 300,
      title: '柱状图',
      xAxisData: [
        { name: 'Mon' },
        { name: 'Tue' },
        { name: 'Wed' },
        { name: 'Thu' },
        { name: 'Fri' },
        { name: 'Sat' },
        { name: 'Sun' }
      ],
      seriesData: [
        { data: 820 },
        { data: 932 },
        { data: 901 },
        { data: 934 },
        { data: 1290 },
        { data: 1330 },
        { data: 1320 }
      ]
    }
  },
  {
    type: 'funnel',
    label: '漏斗图',
    icon: 'filter-o',
    attrs: {
      width: 375,
      height: 300,
      title: '漏斗图',
      seriesData: [
        { value: 60, name: 'Visit' },
        { value: 40, name: 'Inquiry' },
        { value: 20, name: 'Order' },
        { value: 80, name: 'Click' },
        { value: 100, name: 'Show' }
      ]
    }
  },
  {
    type: 'pie',
    label: '饼图',
    icon: 'points',
    attrs: {
      width: 375,
      height: 300,
      title: '饼图',
      seriesData: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  }
]

export const goodsComponents: ComponentItem[] = [

  {
    type: 'goods-nav',
    icon: 'balance-pay',
    label: '商品导航',
    attrs: {
      rowNum: 5,
      titleColor: '#000',
      titleFontSize: 12,
      imgWidth: 50,
      imgHeight: 50,
      imgMarginTop: 0,
      imgMarginBottom: 0,
      titleMarginTop: 0,
      titleMarginBottom: 0,
      list: [
        {
          src: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机数码',
        },
        {
          src: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机数码',
        },
        {
          src: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机数码',
        },
        {
          src: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机数码',
        },
        {
          src: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机数码',
        },
        {
          src: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机数码',
        },
        {
          src: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机数码',
        },
        {
          src: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机数码',
        },
        {
          src: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机数码',
        },
        {
          src: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
          title: '手机数码',
        },
      ]
    }
  },
  {
    type: 'more',
    label: '更多',
    icon: 'more-o',
    attrs: {
      leftOptions: {
        style: {
          color: '#000',
          fontWeight: 700,
          fontSize: 18
        },
        text: '新品好物'
      },
      rightOptions: {
        style: {
          color: '#ddd',
          fontSize: 14,
          fontWeight: 400,
        },
        icon: 'right',
        iconSize: 12,
        iconColor: '#ddd',
        text: '更多'
      }
    }
  },
  {
    type: 'goods-action',
    label: '订单操作栏',
    icon: 'setting-o',
    attrs: {
      goodsActionOptions: [
        {
          text: '首页',
          icon: 'home-o',
          dot: false,
          info: '',
          infoColor: 'red'
        },
        {
          text: '收藏',
          icon: 'star-o',
          dot: false,
          info: '',
          infoColor: 'red'
        },
        {
          text: '购物车',
          icon: 'cart',
          dot: false,
          info: '',
          infoColor: 'red'
        }
      ],
      goodsActionButton: [
        {
          text: '加入购物车',
          background: '#ff8917'
        },
        {
          text: '立即购买',
          background: '#ee0a24'
        }
      ]
    }
  },
  {
    type: 'good-card',
    label: '商品卡片',
    icon: 'comment-o',
    attrs: {
      background: '#fafafa',
      num: "2",
      tag: "标签",
      price: "2.00",
      desc: "描述信息",
      title: "商品标题",
      thumb: "https://img01.yzcdn.cn/vant/ipad.jpeg",
      originPrice: "10.00",
      currency: '￥'
    }
  },
  {
    type: 'coupons',
    label: '优惠券',
    icon: 'orders-o',
    attrs: {
      background: '#e4a216',
      amount: 50,
      condition: '满199元使用',
      validity: '2021.02.12-02.16',
      tips: '有家店铺'
    }
  },
  {
    type: 'qrcode',
    label: '二维码',
    icon: 'qr',
    attrs: {
      value: 'https://www.baidu.com',
      errorCorrectionLevel: 'H',
      tag: 'svg',
      margin: 4,
      width: 200,
      src: "https://avatars.githubusercontent.com/u/3456749",
      imgWidth: 40,
      imgHeight: 40,
      backgroundColor: '#fff'
    }
  },
  {
    type: 'address-list',
    label: '地址列表',
    icon: 'location-o',
    value: '1',
    field: 'addressList',
    attrs: {
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号',
        },
      ],
      disabledText: '以下地址超出配送范围',
      switchable: true,
      addButtonText: '新增地址',
      defaultTagText: '默认',
    }
  },
  {
    type: 'address-edit',
    label: '地址编辑',
    icon: 'warning-o',
    attrs: {
      areaList,
      areaPlaceholder: '选择省 / 市 / 区',
      addressInfo: {
        name: '',
        tel: '',
        city: '',
        county: '',
        province: '',
        country: '',
        areaCode: '',
        addressDetail: ''
      },
      showPostal: false,
      showDelete: false,
      showSetDefault: false,
      showArea: true,
      showDetail: true,
      disableArea: false,
      saveButtonText: '保存',
      deleteButtonText: '删除',
      isSaving: false,
      isDeleting: false,
    }
  },
  {
    type: 'contact-card',
    label: '联系人卡片',
    icon: 'friends-o',
    attrs: {
      type: 'add',
      name: "cc",
      tel: "13888888888",
      editable: false,
      addText: '添加联系人'
    }
  },
  {
    type: 'contact-edit',
    label: '编辑联系人',
    icon: 'user-circle-o',
    attrs: {
      contactInfo: {
        name: '',
        tel: ''
      },
      isEdit: false,
      isSaving: false,
      isDeleting: false,
      showSetDefault: false,
      setDefaultLabel: ''
    }
  },
  {
    type: 'contact-list',
    label: '联系人列表',
    icon: 'friends-o',
    value: '1',
    field: 'contactList',
    attrs: {
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          isDefault: false
        },
      ],
      addText: '新建联系人',
      defaultTagText: '默认'
    }
  },
  {
    type: 'area',
    label: '省市区选择',
    icon: 'envelop-o',
    value: '',
    field: 'area',
    attrs: {
      title: '',
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      areaList,
      columnsPlaceholder: [],
      loading: false,
      readonly: false,
      columnsNum: '3',
      visibleItemCount: 6,
      swipeDuration: 1000,
    }
  },
  {
    type: 'submit-bar',
    label: '提交订单栏',
    icon: 'balance-pay',
    attrs: {
      price: 3050,
      decimalLength: 2,
      label: '合计：',
      suffixLabel: '',
      textAlign: 'right',
      buttonText: '提交订单',
      buttonType: 'danger',
      buttonColor: '',
      tip: '',
      currency: '¥',
      disabled: false,
      loading: false,
      safeAreaInsetBottom: true,
    }
  }
]