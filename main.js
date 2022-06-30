// import App from './App'

// // #ifndef VUE3
// import Vue from 'vue'
// Vue.config.productionTip = false
// Vue.prototype.$adpid = "1111111111"
// Vue.prototype.$backgroundAudioData = {
// 	playing: false,
// 	playTime: 0,
// 	formatedPlayTime: '00:00:00'
// }
// App.mpType = 'app'
// const app = new Vue({
// 	store,
// 	...App
// })
// app.$mount()
// // #endif

// // #ifdef VUE3
// import {
// 	createSSRApp
// } from 'vue'
// export function createApp() {
// 	const app = createSSRApp(App)
// 	app.config.globalProperties.$adpid = "1111111111"
// 	app.config.globalProperties.$backgroundAudioData = {
// 		playing: false,
// 		playTime: 0,
// 		formatedPlayTime: '00:00:00'
// 	}
	
// 	// #ifdef MP
// 	import aplus from './utils/aplus.js'
// 	app.use(aplus);
// 	// #endif
	
// 	return {
// 		app
// 	}
// }
// // #endif


import App from './App'



// #ifndef VUE3
import Vue from 'vue'

// #ifdef MP
import aplus from './utils/aplus.js'
Vue.use(aplus);
// #endif

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  
  // #ifdef MP
  import aplus from './utils/aplus.js'
  app.use(aplus);
  // #endif
  
  return {
    app
  }
}
// #endif

