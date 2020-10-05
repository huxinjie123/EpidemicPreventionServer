<template>
  <div>
    <ul class="nav navbar-nav navbar-left">
      <!-- 使用go函数返回上一个页面 -->
      <li> <button class="btn btn-control btn-primary" @click="go" >返回</button></li>
    </ul>
      
      <h1 class="page-header">{{index.name}}

          <span class="pull-right">
            
              <button class="btn btn-danger" @click="go" v-on:click="deleteindex(index.id)"> 删除 </button>
          </span>

      </h1>
      <ul class="list-group">
        <!-- glyphicon 为bootstrap的小图标组件 -->
          <li class="list-group-item"><span class="glyphicon glyphicon-book"> {{index.name}} </span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-phone"> {{index.phone}} </span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-envelope"> {{index.email}} </span></li>

          <li class="list-group-item"><span class="glyphicon glyphicon-education"> {{index.education}} </span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-search"> {{index.graduationschool}} </span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-plus"> {{index.profession}} </span></li>
          <li class="list-group-item"><span class="glyphicon glyphicon-minus"> {{index.profile}} </span></li>
        
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
        index:"" 
    }
  },
   methods:{
     //go函数
        go:function(){
          this.$router.go(-1);
      },
      //获取 资源
      fetchIndex(id){
          this.$http.get("http://localhost:3000/users/"+id)
              .then(function(response){
                  this.index=response.body;

              })
      },
      //根据id删除
        deleteindex(id){
            this.$http.delete("http://localhost:3000/users/"+id)
              
        },
  },

  created(){
      this.fetchIndex(this.$route.params.id);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
