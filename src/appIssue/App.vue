<template>
  <div class="app-wrapper">
    <van-nav-bar title="应用分发"/>
  </div>
</template>

<script>
import {NavBar} from 'vant'
export default {
  name: 'app',
  data () {
    return {
    }
  },

  components: {
    [NavBar.name]: NavBar
  }
}
</script>