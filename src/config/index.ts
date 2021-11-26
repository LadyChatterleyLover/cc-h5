import { ComponentItem } from '@/types'


export const baseComponent: ComponentItem[] = [
  {
    type: 'icon',
    label: '图标',
    icon: 'ask',
    attrs: {
      name: 'home',
      color: '',
      company: 'px',
      size: '',
    }
  },
  {
    type: 'searchbar',
    label: '搜索框',
    icon: 'search',
    value: '',
    field: 'searchValue',
    attrs: {
      placeholder: '请搜索',
      background: '',
      maxLength: 9999,
      clearable: true,
      inputType: 'text',
      inputBackground: '#f7f7f7',
      rightout: '取消'
    }
  },
  {
    type: 'input',
    value: '',
    label: '输入框',
    icon: 'edit',
    field: 'value',
    attrs: {
      placeholder: '请输入',
      maxLength: 9999,
      type: 'text',
      label: '文本',
      requireShow: false,
      disabled: false,
      readonly: false,
      clearable: true,
      textAlign: 'left'
    }
  },
  {
    type: 'swiper',
    label: '轮播图',
    icon: 'horizontal',
    attrs: {
      width: 375,
      height: 150,
      direction: 'horizontal',
      paginationVisible: false,
      paginationColor: '#fff',
      loop: true,
      duration: 500,
      autoPlay: 5000,
      initPage: 0,
      touchable: true
    },
    children: [
      {
        type: 'swiper-item',
        attrs: {
          src: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg'
        }
      },
      {
        type: 'swiper-item',
        attrs: {
          src: 'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'
        }
      },
      {
        type: 'swiper-item',
        attrs: {
          src: 'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg'
        }
      }
    ]
  },
  {
    type: 'noticebar',
    label: '通知栏',
    icon: 'comment',
    attrs: {
      direction: 'across',
      text: "华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！",
      closeMode: false,
      leftIcon: '',
      color: 'rgb(217, 80, 11)',
      background: 'rgb(251, 248, 220)',
      delay: 1,
      scrollable: true,
      speed: 50,
      list: [
        {
          text: '惊喜红包免费领',
        }, {
          text: '爆款准点秒'
        },
        {
          text: '买超值优惠'
        },
        {
          text: '赢百万京豆'
        }],
      standTime: 1000,
      complexAm: false,
      height: 40,
    }
  },
  {
    type: 'navbar',
    label: '头部导航',
    icon: 'home',
    attrs: {
      title: '订单详情',
      desc: '',
      leftShow: true,
      icon: 'share',
      titIcon: '',
    }
  },
  {
    type: 'video',
    label: '视频',
    icon: 'play-circle-fill',
    attrs: {
      source: {
        src: 'https://storage.jd.com/about/big-final.mp4Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
      },
      options: {
        autoplay: false,
        poster: '',
        loop: false,
        controls: true,
        muted: false,
        volume: 0.5,
        disabled: false,
        playsinline: false
      }
    }
  },
  {
    type: 'button',
    label: '按钮',
    icon: 'setting',
    attrs: {
      text: '按钮',
      type: 'default',
      size: 'normal',
      shape: 'square',
      color: '',
      plain: false,
      disabled: false,
      block: false,
      loading: false,
      icon: '',
    }
  },
  {
    type: 'avatar',
    label: '头像',
    icon: 'check-normal',
    attrs: {
      icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png',
      bgColor: '',
      shape: 'round',
      size: 'normal'
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
    type: 'price',
    label: '价格',
    icon: 'order',
    attrs: {
      price: 0,
      needSymbol: true,
      symbol: '¥',
      decimalDigits: 2,
      thousands: false,
      position: 'before',
      size: 'normal'
    }
  },
  {
    type: 'tabbar',
    label: '标签栏',
    icon: 'category',
    attrs: {
      bottom: true,
      size: '20',
      unactiveColor: '#7d7e80',
      activeColor: '#1989fa'
    },
    children: [
      {
        type: 'tabbar-item',
        attrs: {
          tabTitle: '首页',
          icon: 'home',
          href: '',
          to: '',
          num: ''
        }
      },
      {
        type: 'tabbar-item',
        attrs: {
          tabTitle: '分类',
          icon: 'category',
          href: '',
          to: '',
          num: ''
        }
      },
      {
        type: 'tabbar-item',
        attrs: {
          tabTitle: '发现',
          icon: 'find',
          href: '',
          to: '',
          num: ''
        }
      },
      {
        type: 'tabbar-item',
        attrs: {
          tabTitle: '购物车',
          icon: 'cart',
          href: '',
          to: '',
          num: ''
        }
      },
      {
        type: 'tabbar-item',
        attrs: {
          tabTitle: '我的',
          icon: 'my',
          href: '',
          to: '',
          num: ''
        }
      }
    ]
  },
  {
    type: 'tag',
    label: '标签',
    icon: 'success',
    attrs: {
      text: '标签',
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
    icon: 'star-n',
    attrs: {
      count: 5,
      iconSize: 18,
      activeColor: '#fa200c',
      voidColor: '#ccc',
      uncheckedIcon: 'star-n',
      checkedIcon: 'star-fill-n',
      allowHalf: false,
      readonly: false,
      disabled: false,
      spacing: 20
    }
  },
  {
    type: 'switch',
    label: '开关',
    icon: 'retweet',
    attrs: {
      value: false,
      disable: false,
      activeColor: '#fa2c19',
      inactiveColor: '#ebebeb',
      activeText: '',
      inactiveText: '',
    }
  },
  {
    type: 'progress',
    label: '进度条',
    icon: 'arrow-right',
    attrs: {
      percentage: 60,
      strokeColor: '#f30',
      strokeWidth: '10',
      size: 'base',
      showText: true,
      textInside: false,
      textColor: '#333',
      status: '',
      iconName: 'checked',
      iconColor: '#439422'
    }
  },
  {
    type: 'circleprogress',
    label: '环形进度条',
    icon: 'refresh2',
    attrs: {
      width: 120,
      height: 120,
      progress: 60,
      strokeInnerWidth: 10,
      isAuto: false,
      text: '自定义',
      progressOption: {
        radius: 50,
        strokeOutWidth: 10,
        backColor: '#d9d9d9',
        progressColor: 'red'
      }
    }
  },
]

export const chartsComponents: ComponentItem[] = [
  {
    type: 'line',
    label: '折线图',
    icon: 'marshalling',
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
    icon: 'microphone',
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
    icon: 'microphone',
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
    icon: 'microphone',
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
    icon: 'category',
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
          src: 'https://image3.suning.cn/uimg/cms/img/161293957567317395.pngfrom=mobile',
          title: '手机数码',
        },
        {
          src: 'https://image3.suning.cn/uimg/cms/img/161293957567317395.pngfrom=mobile',
          title: '手机数码',
        },
        {
          src: 'https://image3.suning.cn/uimg/cms/img/161293957567317395.pngfrom=mobile',
          title: '手机数码',
        },
        {
          src: 'https://image3.suning.cn/uimg/cms/img/161293957567317395.pngfrom=mobile',
          title: '手机数码',
        },
        {
          src: 'https://image3.suning.cn/uimg/cms/img/161293957567317395.pngfrom=mobile',
          title: '手机数码',
        },
        {
          src: 'https://image3.suning.cn/uimg/cms/img/161293957567317395.pngfrom=mobile',
          title: '手机数码',
        },
        {
          src: 'https://image3.suning.cn/uimg/cms/img/161293957567317395.pngfrom=mobile',
          title: '手机数码',
        },
        {
          src: 'https://image3.suning.cn/uimg/cms/img/161293957567317395.pngfrom=mobile',
          title: '手机数码',
        },
        {
          src: 'https://image3.suning.cn/uimg/cms/img/161293957567317395.pngfrom=mobile',
          title: '手机数码',
        },
        {
          src: 'https://image3.suning.cn/uimg/cms/img/161293957567317395.pngfrom=mobile',
          title: '手机数码',
        },
      ]
    }
  },
  {
    type: 'more',
    label: '更多',
    icon: 'more-s',
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
    label: '提交订单',
    icon: 'setting',
    attrs: {
      goodsActionOptions: [
        {
          text: '首页',
          icon: 'home',
          dot: false,
          info: '',
          infoColor: 'red'
        },
        {
          text: '收藏',
          icon: 'heart1',
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
    type: 'goods-card',
    label: '商品卡片',
    icon: 'comment',
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
    type: 'coupon',
    label: '优惠券',
    icon: 'order',
    attrs: {
      background: '#e4a216',
      amount: 50,
      condition: '满199元使用',
      validity: '2021.02.12-02.16',
      tips: '有家店铺'
    }
  },
  {
    type: 'contact-card',
    label: '联系人卡片',
    icon: 'my',
    attrs: {
      type: 'add',
      name: "cc",
      tel: "13888888888",
      editable: false,
      addText: '添加联系人',
      icon: 'my'
    }
  },
]