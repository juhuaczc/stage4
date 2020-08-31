<template>
  <div>
    <h1>
      {{ msg }}
    </h1>
    <div class="con">
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Vue11"
    }
  },
}
</script>

<style scoped>
  h1{
    color: red;
  }
  .con{
    color: blue;
  }
</style>