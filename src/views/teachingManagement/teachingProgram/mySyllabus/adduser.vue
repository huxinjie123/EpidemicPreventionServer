<template>
  <div >
      <h1 class="page-header">添加用户</h1>
      <form v-on:submit="addcoustomer">
          <div class="well">
              <h4>用户信息</h4>
              <div class="form-group">
                  <label>姓名</label>
                  <input type="text" class="form-control" placeholder="name" v-model="customer.name">
              </div>
              <div class="form-group">
                  <label>电话</label>
                  <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
              </div>
              <div class="form-group">
                  <label>邮箱</label>
                  <input type="text" class="form-control" placeholder="email" v-model="customer.email">
              </div>
              <div class="form-group">
                  <label>学历</label>
                  <input type="text" class="form-control" placeholder="education" v-model="customer.education">
              </div>
              <div class="form-group">
                  <label>毕业学校</label>
                  <input type="text" class="form-control" placeholder="graduationschool" v-model="customer.graduationschool">
              </div>
              <div class="form-group">
                  <label>职业</label>
                  <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
              </div>
              <div class="form-group">
                  <label>个人简历</label>
                  <textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
              </div>
              <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><button type="submit" class="btn btn-control btn-primary">添加</button></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><button @click="go" class="btn btn-control btn-danager">取消</button></li>
                    </ul>
              </div>
          </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Adduser',
  data () {
    return {
        customer:{},
        alert:""
    }
  },
  methods:{
      go:function(){
          this.$router.go(-1)
      },
      addcoustomer(e){
          if(!this.customer.name || !this.customer.phone || !this.customer.email){
            //   console.log("请添加信息");
            this.$message.warning("请添加对应的信息");
              }else{
                let newCustomer={
                    name:this.customer.name,
                    phone:this.customer.phone,
                    email:this.customer.email,
                    education:this.customer.education,
                    graduationschool:this.customer.graduationschool,
                    profession:this.customer.profession,
                    profile:this.customer.profile
                    }

                    this.$http.post("http://localhost:3000/users",newCustomer)
                        .then(function(response){
                            this.$router.push({path:"./mySyllabus"});
                            })
                        e.preventDefault();
            }
          e.preventDefault();
      }
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
