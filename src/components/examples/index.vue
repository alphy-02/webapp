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
            <div>
              <h1>欢迎回家</h1>
            </div>
            <br/>
            <br/>
            <div style="width: 50%;margin: auto;">
              <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
              <el-divider></el-divider>
              <span>旅行，就应该只是单纯地出去走走。去哪里，并不重要</span>
            </div>
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
    name: "index",
    data() {
      return {
        user: {},
      }
    },
    mounted() {
      this.user = this.$refs.header.loginSuccessUser;
    },
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
