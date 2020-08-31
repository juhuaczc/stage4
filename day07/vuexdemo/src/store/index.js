import Vue from 'vue'
import Vuex from 'vuex'
import {ADD,REDUCE} from './event.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    num: 7,
    stus: [
      {id:1,name:'zhangsan'},
      {id:2,name:'lisi'},
      {id:3,name:'wangwu'}
    ]
  },
  getters: {
    cartPro(state){
      let arr = []
      state.products.forEach(val=>{
        let name = val.name
        let price = val.price
        let count = val.count || 1
        arr.push({
          name,price,count
        })
      })
      return arr;
    },
    getStuById(state){
      return function(id){
        /* return state.stus.filter(function(val){
        return val.id == id }*/
        return state.stus.filter(val=>val.id == id)
         
      }
    },
    getStuNames(state){
      return state.stus.filter(stu=>stu.name.indexOf("a")!=-1)
      /* let names = [];
      for(let i=0;i<state.stus.length;i++){
        names.push(state.stus[i].name)
      }
      return names; */
    }
  },
  mutations: {
    addPro(state,payload){
      console.log(payload.pro)
      state.products.push(payload.pro)
    },
    addCount(state,payload){
      state.products[payload.idx].count++
    },
    reduceCount(state,payload){
      let pros = state.products;
      let name = payload.name;
      for(let i=0;i<pros.length;i++){
        if(name==pros[i].name){
          // 找到相同名称
          if(state.products[i].count>1){
            state.products[i].count--
          }
          break;
        }
      }
    
    },
    removePro(state,payload){
      console.log(this.getters.cartPro)
      console.log(state)
      state.products.splice(payload.idx,1)
    },
    removeAll(state){
      state.products = []
    },
    increase(state){
      console.log('mutation--increase')
      state.num++
    },
    // 有载荷的事件
    inc2(state,n){
      state.num+=n.a
    },
    [ADD](state){
      state.num++
    },
    [REDUCE](state){
      state.num--
    },
    testAsync(state){
      setTimeout(()=>{
        state.num++
      },2000)
      
    }

  },
  actions: {
    // 参数不是state，因为actions不能修改state
    actAdd(context){
      console.log('action--actAdd')
      // action提交事件给mutation
      // 提交一个increase事件给mutation
      // context.commit('increase')
      setTimeout(()=>{
        context.commit('increase')
      },2000)
    }
  }
})
