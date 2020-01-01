<template>
  <div id="main">
    <Header></Header>

    <!--省市级联实现选择地区查看攻略功能-->
    <div class="py-5 bg-cover bg-center" style="text-align: center">
      <el-row>
      <el-col :offset="6" :span="12"
              style="background-color: #FFF; border:1px solid #ddd;border-radius: 0px;padding:20px 20px;display: inline-block;">
        <el-form :inline="true">
          <el-form-item label="地区">
            <el-cascader
              size="large"
              :options="options"
              v-model="selectedOptions"
            >
            </el-cascader>
            <el-form style="margin-top: 20px">
              <el-button type="primary" @click="getAddress">查看攻略</el-button>
            </el-form>
          </el-form-item>
        </el-form>
      </el-col>
      </el-row>
    </div>

    <div style="height: 700px">
      <!--以下是tab页面-->
      <el-row id="tab" class="py-5 bg-cover bg-center">
        <!--:offset="2" :span="20"-->
        <el-col>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane v-for="(c,index1) in catlogList" :key="index1" :label="c.type" :name="c.type">

              <!--以下是card界面，循环输出文章列表-->
              <el-card id="article_card" v-for="(a,index) in articlesPager" :key="index" class="py-5 bg-cover bg-center"
                       style="width: 70%">
                <div slot="header" class="clearfix">
                  <span><h4>{{a.title}}</h4></span>
                </div>
                <!--<div class="text item">-->
                <!--{{a.content.substring(0,20)+"......"}}-->
                <!--</div>-->

                <div style="text-align: left">
                  {{a.auth}}
                </div>
                <el-button style="float: right; padding: 10px 0 10px" type="text" @click="go_Article(a.id)">查看全文
                </el-button>
              </el-card>
              <br>

              <!--分页效果-->
              <div id="articles_pager" STYLE="text-align: center">
                <el-pagination

                  layout="prev, pager, next"
                  :page-size="pageSize"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :total="articleList.length">
                </el-pagination>
              </div>


            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>

    </div>

    <!--弹窗登录界面-->
    <Login></Login>
    <!--注册界面-->
    <Reg></Reg>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../commons/Header2"
  import Login from "../commons/Login"
  import Reg from "../commons/Reg"
  import Footer from "../commons/Footer"
  import {
    provinceAndCityData,
    CodeToText,
    TextToCode
  } from 'element-china-area-data'


  export default {
    components: {
      Header,
      Login,
      Reg,
      Footer,
    },
    name: "Catlog",
    data() {
      return {
        activeName: '日记',
        catlogList: [],
        articleList: [],

        pageSize: 3,
        currentPage: 1,

        address: '',

        options: provinceAndCityData,
        selectedOptions: []
      };
    },
    mounted() {
      this.initCatlogList();
      this.initArticleList();
    },
    // 计算属性计算分页
    computed: {
      articlesPager: function () {
        return this.articleList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
      }
    },
    methods: {
      //查看攻略功能
      getAddress: function () {
        this.address = CodeToText[this.selectedOptions[0]] + " " + CodeToText[this.selectedOptions[1]];
        this.$router.push({
          path: `/raiders/${this.address}`,
        })
      },

      // 更新文章卡片列表
      initArticleList() {
        let url = this.websiteUrl + '/mooc/article/queryAll?type=' + this.activeName;
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

      // 更新tab列表
      initCatlogList() {
        let url = this.websiteUrl + '/mooc/catlog/';
        let that = this;
        this.axios.get(url).then(function (response) {
          //console.log(response.data);
          if (response.data.code == 200) {
            that.catlogList = response.data.data;

          } else {
            that.$message({
              message: response.data.msg,
              type: 'error'
            });
          }
        }).catch(function (error) {
          that.$message({
            message: '查询版块资料失败！',
            type: 'error'
          });
        })
      },

      // 点击tab栏更新文章卡片
      handleClick(tab, event) {
        this.initArticleList();
        // this.articlesPager();
      },
      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        this.pageSize = size;
        // console.log(this.pageSize)  //每页下拉显示数据
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage;
        // console.log(this.currentPage)  //点击第几页
      },
      // 路由传参实现页面跳转
      go_Article(id) {
        this.$router.push({
          path: `/article/${id}`,
        })
      }
    }
  };
</script>

<style scoped>
  #main {
    text-align: left;
  }

  #tab {
    margin: auto;
    width: 80%;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
