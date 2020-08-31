<template>
    <div>
        <h1>这是Hello组件</h1>
        <button @click="add">xxx</button>
        <h2>{{num}}</h2>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
      
    data() {
        return {
            num:1
        }
    },
    methods: {
        add(){
            this.num++
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log("===Enter===")
        console.log(this)// undefined
        next();
    },
    beforeRouteUpdate(to, from, next) {
        console.log("===Update===")
        console.log(this)// 当前组件
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log("===Leave===")
        console.log(this)// 当前组件
        next();
    }
}
</script>

<style scoped>
    h1{
        color:red;
    }
</style>