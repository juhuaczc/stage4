<template>
  <div class="hello">
    {{ $store.state.num}} | {{ showNum }}| {{ showNum2 }} | {{num2}}| {{num}} | {{ stus[0].name }}
    <h1>{{ msg }}</h1>
    {{getNames}}
    <button @click="show">显示num的值</button>
    
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  /* ======方式====== */
  /* computed:{
    showNum(){
      // 通过$store对象获取动态
      return this.$store.state.num;
    }
  }, */
  /* 方式二：通过辅助函数mapState */
/* mapState方法的返回值就是一个对象  */
/*   computed: mapState({
      showNum: state => state.num
    }), */

    /* 讲方法一和方法二合并 */
    computed: {// 使用扩展符号将对象打散何宁到另一个对象里面
      ...mapState({showNum:state => state.num}),

      /* 方式三，参数映射状态 */
      // 数组的元素对应着store中的state里面定义的状态属性，必须保持一致，使用时，在模板中就是使用num
      // 返回的{num2:state.num2}
      ...mapState(['num2','num',"stus"]),

      // 使用mapGetters辅助函数
      ...mapGetters({
        // 计算属性名：getters名
        getNames:'getStuNames'
      }),
      // {getStuNames:this.$store.getters.getStuNames}
      ...mapGetters(['getStuNames']),


      showNum2(){
        return this.$store.state.num
      },
      // getNames(){
      //   return this.$store.getters.getStuNames;
      // },
      // getStu(){
      //   let a = this.$store.getters.getStuById(2)
      //   return a;
      // }
    },
    methods: {
      show(){
        console.log(1,this.$store.state.num)
        // 通过当前组件实例调用计算属性
        console.log(2,this.showNum)
        console.log(3,this.showNum2)
        console.log(4,this.num)
        console.log(5,this.num2)
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
