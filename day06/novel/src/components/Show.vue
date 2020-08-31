<template>
  <div class="show">
    <ul>
      <li v-for="(item, i) in lists" :key="i">
        <div class="l" @click="choose(item)">
          <img :src="item.img" />
        </div>
        <div class="r">
          <div class="up">
            <div class="book" @click="choose(item)">{{ item.name }}</div>
            <div class="author">{{ item.author }}</div>
          </div>
          <div class="desc">
            {{ item.desc }}
          </div>
        </div>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import util from "../api/getData.js";

export default {
  data() {
    return {
      lists: [],
    };
  },
  created() {// 使用方法
    // 获取id
    let id = this.$route.params.id;
    this._getNovelList(id);
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to.params)
    this._getNovelList(to.params.id);
    next();
  },
  methods: { // 方法
    _getNovelList(id) {
      util
        .getNovelList(id)
        .then((data) => {
          this.lists = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    choose(item){
        // 切换路由到某小说列表组件
        console.log(item)
        // 使用编程式导航切换路由
        // let id = this.$route.params.id;
        this.$router.push({
            name:`chapter`,
            params:{
                url:item.path,
                name:item.name
            }
        })
    }
  },
};
</script>

<style scoped>
.show{
    position: relative;
}
ul {
  list-style: none;
  display: flex;
  justify: space-between;
  flex-wrap: wrap;
  padding: 0 10px;
}
li {
  width: 30%;
  height: 220px;
  overflow: hidden;
  margin-top: 10px;
  background-color: #e9faff;
}
.l,
.r {
  float: left;
}
.l {
  width: 40%;
}
.r {
  width: 60%;
  padding-left: 5px;
}
img {
  width: 100%;
  height: 220px;
}
.book {
  font-size: 18px;
  color: #88c6e5;
}
.author {
  font-size: 14px;
}
.up {
  border-bottom: 1px dotted #6191d0;
  text-align: left;
}
.desc {
  font-size: 0.5em;
  clear: both;
}
</style>
