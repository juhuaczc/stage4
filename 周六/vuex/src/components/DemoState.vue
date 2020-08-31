<template>
  <div>
    <h1>State</h1>
    <div>
      <h3>直接使用$store.state.num</h3>
      {{ $store.state.num }}
      <h3>在脚本中使用this.$store</h3>
      showNum:{{ showNum }} num:{{ num }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      showNum: (state) => state.num,
      showNum2: (state) => state.num,
    }),
    ...mapState(["num"]),
  },
  // 1. mapState方法的返回值就是一个对象
  // 使用自定义的key

  /*  computed:mapState({
        showNum: state=>state.num
    }), */

  // 2. 使用自动生成的key，与state属性相同的key
  // computed:mapState(['num']),

  /* computed: {
        // 使用辅助函数mapState
        // 在computed中使用$store对象
        showNum(){
            return this.$store.state.num
        }
    }, */
};
</script>
