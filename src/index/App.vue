<template>
  <div class="app-wrapper">
    <van-nav-bar title="webview中心"></van-nav-bar>
    <van-list>
      <van-cell title="应用分发" is-link url="/appIssue.html"/>
    </van-list>
    <circles/>

    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" fixed>
  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="friends-o">记录</van-tabbar-item>
  <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
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
        name: 'liu77'
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