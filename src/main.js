import Vue from 'vue'
import App from './App'

import Button from 'vant/lib/button'
import 'vant/lib/button/style'

import CellGroup from 'vant/lib/cell-group'
import 'vant/lib/cell-group/style'
import Cell from 'vant/lib/cell'
import 'vant/lib/cell/style'

import Switch from 'vant/lib/switch'
import 'vant/lib/switch/style'

import Field from 'vant/lib/field'
import 'vant/lib/field/style'

import Notify from 'vant/lib/notify'
import 'vant/lib/notify/style'

import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'

import Loading from 'vant/lib/loading'
import 'vant/lib/loading/style'

import Swipe from 'vant/lib/swipe'
import 'vant/lib/swipe/style'
import SwipeItem from 'vant/lib/swipe-item'
import 'vant/lib/swipe-item/style'

import Popup from 'vant/lib/popup'
import 'vant/lib/popup/style'

import { Lazyload } from 'vant';

import axios from 'axios'
Vue.prototype.$axios = axios //定义为全局
//axios.defaults.baseURL = '/api'

import router from './router/router'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(Switch)
Vue.use(Field)
Vue.use(Notify)
Vue.use(Toast)
Vue.use(Loading)
Vue.use(Lazyload)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Popup)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})