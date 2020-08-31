<template>
  <div>
    <h1>Element-UI</h1>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click="show">主要按钮</el-button>
    </div>
    <h4>Select</h4>
    <div>
      <el-select v-model="num">
        <el-option v-for="(i, idx) in arr" :key="idx" :value="i">
          {{ i }}
        </el-option>
      </el-select>
    </div>
    <h4>消息框</h4>
    <!-- <el-button @click="msg">弹出的消息框 </el-button> -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      arr: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  methods: {
    show() {
      alert("ok");
    },
     msg(){
      this.$alert('消息内容', '标题', {
        confirmButtonText: '确定'
      });
    },
  }
}
</script>

<style scoped></style>
