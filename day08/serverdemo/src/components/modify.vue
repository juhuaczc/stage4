<template>
  <div class="modify" ref="modify">
    <h1>modify</h1>
    <div class="close" @click="back">X</div>
    <div v-if="emp == null">
      <h3>数据加载中...</h3>
    </div>
    <div v-else class="container" ref="container">
      <div class="row">
        <div class="col-sm-5">
          empId:
        </div>
        <div class="col-sm-4">
          {{ emp.empId }}
        </div>
      </div>
      <div class="row">
        <div class="col-sm-5">
          empName:
        </div>
        <div class="col-sm-4">
          <input
            type="text"
            v-model="empName"
            class="form-control"
            :placeholder="emp.empName"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-5">
          gender:
        </div>
        <div class="col-sm-4 center">
          <select v-model="gender" class="form-control">
            <option value="M">男</option>
            <option value="F">女</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-5">
          age:
        </div>
        <div class="col-sm-4">
          <input
            type="text"
            v-model="age"
            class="form-control"
            :placeholder="emp.age"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-5">
          postion:
        </div>
        <div class="col-sm-4">
          <select v-model="postion" class="form-control">
            <option value="销售">销售</option>
            <option value="人事">人事</option>
            <option value="技术">技术</option>
            <option value="财务">财务</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-5">
          telephone:
        </div>
        <div class="col-sm-5">
          <input
            type="text"
            v-model="telephone"
            class="form-control"
            :placeholder="emp.telephone"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-5">
          address:
        </div>
        <div class="col-sm-5">
          <input
            type="text"
            v-model="address"
            class="form-control"
            :placeholder="emp.address"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-5">
          edu:
        </div>
        <div class="col-sm-5">
          <select v-model="edu" class="form-control">
            <option value="高中以下">高中以下</option>
            <option value="本科">本科</option>
            <option value="大专">大专</option>
            <option value="研究生以上">研究生以上</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-5">
          status:
        </div>
        <div class="col-sm-4">
          <select v-model="status" class="form-control">
            <option value="false">在职</option>
            <option value="true">离职</option>
          </select>
        </div>
      </div>
      <button class="btn btn-danger" @click="mod">修改</button>
    </div>
  </div>
</template>

<script>
import util from "../api/index.js";
import $ from "jquery";
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      emp: null,
      empId: null,
      empName: "",
      gender: "M",
      age: null,
      postion: "销售",
      telephone: "",
      address: "",
      edu: "高中以下",
      status: false,
    };
  },
  /* beforeRouteUpdate(to, from, next) {
    console.log(from);
    let { empId, empName } = to.query;
    this._getEmpInfo(empId, empName);
    next();
  }, */
  updated() {
    // let $con = $(this.$refs.container)
    let $mod = $(this.$refs.modify);
    // let con_h = parseInt($con.css('height'))
    let mod_h = parseInt($mod.css("height"));
    if (480 > mod_h) {
      $mod.css("height", "480px");
    }
  },
  beforeRouteEnter(to, from, next) {
    // 根据路由参数获取某个员工的数据
    console.log(from);
    let { empId, empName } = to.query;
    next((vm) => {
      vm._getEmpInfo(empId, empName);
    });
  },
  methods: {
      ...mapMutations(['modifyEmp']),
    _getEmpInfo(empId, empName) {
      // 获取某个员工的数据
      console.log(empId, empName);
      util
        .getEmpInfo(empId, empName)
        .then((data) => {
          this.emp = data;
          // 给每一个属性重新赋值
          this.empId = this.emp.empId;
          this.empName = this.emp.empName;
          this.gender = this.emp.gender;
          this.age = this.emp.age;
          this.postion = this.emp.postion;
          this.telephone = this.emp.telephone;
          this.address = this.emp.address;
          this.edu = this.emp.edu;
          this.status = this.emp.status;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back() {
      // this.$router.go(-1)
      this.$router.back();
    },
    mod() {
      // 提交修改
      // 修改的条件
      let filter = { empId: this.empId };
      let data = {
          empId: this.empId,
        empName: this.empName,
        gender: this.gender,
        age: this.age,
        postion: this.postion,
        telephone: this.telephone,
        address: this.address,
        edu: this.edu,
        status: this.status
      };
      util.modify(filter,data).then(res=>{
          alert(res)
          // 修改状态管理里面的数据
          this.modifyEmp({
              filter,
              data
          })
      }).catch(err=>{
          alert(err)
      }).finally(()=>{
          this.$router.push('/')
      })
    },
  },
};
</script>

<style scoped>
.modify {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: pink;
}
.row {
  margin-top: 5px;
}
.col-sm-5 {
  text-align: right;
}
.center {
  text-align: center;
}
.close {
  position: absolute;
  top: 20px;
  right: 100px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  line-height: 30px;
  background-color: skyblue;
  cursor: pointer;
}
</style>
