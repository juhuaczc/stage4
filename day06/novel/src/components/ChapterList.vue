<template>
  <div class="chapter">
    <h1>{{$route.params.name}}</h1>
    <div class="close" @click="close">X</div>
    <div class="row">
        <div v-for="(c,i) in chapters" :key="i" value class="col-sm-4" @click="choose(c)">
            {{ c.title }}
        </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import util from "../api/getData.js"
export default {
    data() {
        return {
            chapters: []
        }
    },
  methods: {
      _getChapter(){
        //   console.log(this.$route)
          let url = this.$route.params.url
          util.getChapter(url).then(data=>{
              this.chapters = data
          })
      },
    close(){
        // this.router.go(-1);
      this.$router.back();
    },
    choose(chapter){
      // 切换路由到某个章节组件
      console.log(chapter)
      this.$router.push({
        name: 'content',
        params: {
          title: chapter.title,
          url: chapter.url
        }
      })
    }
  },
  created() {
      this._getChapter()
  },
}
</script>

<style scoped>
  .chapter{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    width: 100%;
    height: 500px;
    background-color: #E9FAFF;
    overflow: scroll;
    padding: 0;
  }
  .close{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 15px;
    right: 25px;
    cursor: pointer;
  }
</style>