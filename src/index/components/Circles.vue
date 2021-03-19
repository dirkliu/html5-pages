<template>
  <div class="circles-page">
    <div class="circles">
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
    <img src="../imgs/test333.jpg"/>
  </div>
</template>

<script>
  export default {
    data () {
    }
  }
</script>

<style>
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #dd6633;
}
.circles {
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: space-around;
}
</style>
