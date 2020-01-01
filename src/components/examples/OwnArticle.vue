<template>
  <div>
    <Header ref="header"></Header>

    <el-container style="height: 1000px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <!--分栏菜单1-->
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-user"></i>个人管理</template>

            <a href="/person" style='text-decoration:none'>
              <el-menu-item index="1-1">个人信息</el-menu-item>
            </a>
            <a href="/person" style='text-decoration:none'>
              <el-menu-item index="1-2">隐私</el-menu-item>
            </a>
            <a href="/oa" style='text-decoration:none'>
              <el-menu-item index="1-3">我的文章</el-menu-item>
            </a>
          </el-submenu>

          <!--分栏菜单2-->
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
          </el-dropdown>
          <span>{{user.username}}</span>
        </el-header>

        <el-main>
          <template>

            <el-table
              :data="articleList"
              height="700"
              width="800"
              border
              style="width: 100%">
              <el-table-column
                prop="title"
                label="标题"
                width="180">
              </el-table-column>
              <el-table-column
                prop="id"
                label="文章编号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="type"
                label="类型">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="180">
                <template slot-scope="scope">
                  <el-button @click="showArticle(scope.row)" type="text" size="small">查看</el-button>
                  <el-button @click="compilerArticle(scope.row)" type="text" size="small">编辑</el-button>
                  <el-button @click="deleteArticle(scope.row)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>

          </template>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import Header from "../commons/Header2"
  import Login from "../commons/Login"
  import Reg from "../commons/Reg"

  export default {
    components: {
      Header,
      Login,
      Reg,
    },
    name: "OwnArticle",
    data() {
      return {
        articleList:[],
        user: {},
      }
    },
    mounted() {
      this.user = this.$refs.header.loginSuccessUser;
      this.initArticle();
    },
    methods:{

      //路由传参实现查看个人文章功能
      showArticle(row){
        this.$router.push({
          path: `/article/${row.id}`,
        })
      },

      //路由传参实现编辑个人文章功能
      compilerArticle(row){
        this.$router.push({
          path: `/compiler/${row.id}`,
        })
      },

      //删除文章功能
      deleteArticle(row){
        let id=row.id;
        let url=this.websiteUrl+'/mooc/article/delete?id='+id;
        let that=this;
        this.axios.post(url).then(function (response) {
          that.$message({
            message:response.data.data,
            type:'success'
          })
          that.$router.go(0);
        }).catch(function (error) {
          that.$message({
            message: '删除文章失败！',
            type: 'error'
          })
        })
      },

      //初始化文章列表
      initArticle(){
        let url = this.websiteUrl + '/mooc/article/findAll?auth=' + this.user.username;
        let that = this;
        this.axios.get(url).then(function (response) {
          if (response.data.code == 200) {
            that.articleList = response.data.data;
          } else {
            that.$message({
              message: response.data.msg,
              type: 'error'
            });
          }
        }).catch(function (error) {
          that.$message({
            message: '查询文章失败！',
            type: 'error'
          });
        })
      },
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
