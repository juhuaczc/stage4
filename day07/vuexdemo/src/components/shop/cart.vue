<template>
  <div>
    <h1>购物车</h1>
    <table>
        <tr>
            <td>商品名称</td>
            <td>商品单价</td>
            <td>商品数量</td>
            <td>金额</td>
            <td>操作</td>
        </tr>
        <tr v-for="(p,i) in cartPro" :key="i">
            <td>{{p.name}}</td>
            <td>{{p.price}}</td>
            <td>{{p.count}}</td>
            <td>{{p.price*p.count}}</td>
            <td>
                <span @click="del(i)">删除该商品</span>
            </td>
        </tr>
        <tr>
            <td>合计</td>
            <td>{{total}}</td>
        </tr>
    </table>
    <!-- {{cartPro}} -->
    <button @click="buy">结账</button>
  </div>
</template>

<script>
import {  mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartPro"]),
    // cartPro(){return cartPro}
    total(){
        // 金额
        let sum = 0;
        let cart = this.cartPro
        for(let i=0;i<cart.length;i++){
            sum += cart[i].price*cart[i].count
        }
        return sum;
    }
  },
  created() {},
  methods: {
    ...mapMutations(["removePro","removeAll"]),
    del(i){
      this.removePro({
        idx:i
      })
    },
    buy(){
        this.removeAll()
    }
  },
};
</script>

<style scoped>
span{
    color:#e4af23
}
span:hover{
    cursor: pointer;
    color:aqua;
}
</style>
