<template>
  <div class="app-wrapper">
    <div class="page-nav">多页html5项目演示</div>
    <circles/>
    <van-list>
      <van-cell title="VUE + VANT" is-link url="/demo1.html"/>
      <van-cell title="VUE(外链) + VANT" is-link url="/demo2.html"/>
      <van-cell title="不使用VUE" is-link url="/demo3.html"/>
      <van-cell title="部分使用静态资源" is-link url="demo4.html"/>
      <van-cell title="全部使用静态资源" is-link url="/static/demo4/demo4.html"/>
    </van-list>

    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" fixed>
</van-tabbar>
  </div>
</template>

<script>
import {NavBar, List, Cell, Tabbar, TabbarItem} from 'vant'
import Circles from './components/Circles.vue'
export default {
  name: 'app',
  data () {
    return {
      json: {
      }
    }
  },

  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [Cell.name]: Cell,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    Circles
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.page-nav {
  background-color: #576b95;
  line-height: 60px;
  font-size: 28px;
  color: #fff;
  text-align: center;
}
</style>