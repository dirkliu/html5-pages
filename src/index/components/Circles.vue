<template>
  <div class="circles-page">
    <div class="banner">
      <img src="../imgs/test333.jpg"/>
    </div>    
  </div>
</template>

<script>
  export default {
    data () {
    }
  }
</script>

<style lang="scss">
.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #dd6633;
}
.banner {
  text-align: center;
  margin: 20px;
}
.circles {
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: space-around;
}
</style>
