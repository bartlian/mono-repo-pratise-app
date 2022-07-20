import Vue from 'vue'
import App from './App.vue'
import { printHi, sayHi } from '@practise/shared-utils'
import { CommonHello } from '@practise/shared-components'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')

sayHi()
printHi()
CommonHello
console.log('bbbb')
