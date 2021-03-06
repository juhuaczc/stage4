import Vue from 'vue'
import Vuex from 'vuex'
// import Emp from './entity/Emp.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    emps:[]
  },
  mutations: {
    setAllEmps(state,payload){
      state.emps = payload.emps;
    },
    addEmp(state,payload){
      state.emps.push(payload.emp)
    },
    modifyEmp(state,payload){
      console.log(payload)
      // filter=> {empId: xxx}
      let filter = payload.filter
      // data=> {xx:xx,xx:xx,xx:xx...}
      let data = payload.data
      for(let i=0;i<state.emps.length;i++){
        let emp = state.emps[i];
        if(emp.empId==filter.empId){
          state.emps[i] = data
          break;
        }
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
