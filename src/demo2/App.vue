<<template>
  <div class="app-wrapper">
    <van-nav-bar title="demo2" style="line-height: 40px;font-size: 28px;"></van-nav-bar>
    <van-notice-bar
      wrapable
      :scrollable="false"
      text="vue2框架使用外链引入，vant按需引入">
    </van-notice-bar>
<div>示例：</div>
    <textarea class="code-containner" resizable="false">
<!-- src/demo2.html-->
<!DOCTYPE html>
<html>
<head>
  <title>vue(外链) + vant</title>
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <meta name="screen-orientation" content="portrait">
  <meta name="x5-orientation" content="portrait">
</head>
<body>
<!-- 引入 Vue 的 JS 文件 -->
<script src="/static/vue/vue.runtime.min.js"></script>
<div id="app"></div>
<!-- built files will be auto injected -->
</body>
</html>

<!--src/demo2/main.js-->
import App from './App.vue'
new Vue({
  el: '#app',
  components: {
    App
  },
  render (h) {
    return h('App')
  }
})
    </textarea>



    <div class="bottom-btns">
      <van-button type="primary" url="/index.html">首页</van-button>
    </div>
  </div>
</template>

<script>
import {NavBar, Button, NoticeBar} from 'vant'
export default {
  data () {
    return {}
  },

  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [NoticeBar.name]: NoticeBar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body, .app-wrapper {
  height: 100%;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
}

.code-containner {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
}

.bottom-btns {
  bottom: 0;
  padding: 20px;
}
</style>
