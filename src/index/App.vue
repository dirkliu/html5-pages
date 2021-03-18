<template>
  <div class="app-wrapper">
    <van-nav-bar title="webview中心"/>
    <van-list>
      <van-cell title="应用分发" is-link url="/appIssue.html"/>
    </van-list>
    <circles/>
  </div>
</template>

<script>
import Circles from './components/Circles.vue'
export default {
  name: 'app',
  data () {
    return {
      json: {
        name: 'liu77'
      }
    }
  },

  components: {
    Circles
  }
}
</script>