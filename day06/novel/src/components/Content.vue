<template>
  <div class="content">
    <h2>{{ $route.params.title }}</h2>
    <div class="close" @click="close">X</div>
    <div>
     <a href="">上一章</a>  
     <a href="">目录</a>   
     <a href="">下一章</a>   
    </div>
    <p v-html="content"></p>
    
  </div>
</template>
<script>
import util from "../api/getData.js";
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    _getContent(url) {
      util.getContent(url).then((data) => {
        this.content = data;
      });
    },
     close(){
        // this.router.go(-1);
      this.$router.back();
    }
  },
  created() {
    let url = this.$route.params.url;
    this._getContent(url);
  },
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 500px;
  background-color: #e9faff;
  overflow: scroll;
  padding: 0;
}
</style>
