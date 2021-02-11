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

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(Switch)
Vue.use(Field)
Vue.use(Notify)
Vue.use(Toast)

new Vue({
  el: '#app',
  render: h => h(App)
})