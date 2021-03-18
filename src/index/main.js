import App from './App.vue'

Vue.use(vant.Lazyload, {
  lazyComponent: true
})
new Vue({
  el: '#app',
  components: {
    App
  },
  render (h) {
    return h('App')
  }
})
  