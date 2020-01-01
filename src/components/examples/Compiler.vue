<template>
  <div>
    <Header ref="header"></Header>

    <el-row style="border: 3px">
      <el-col :offset="2" :span="20">
        <el-input v-model="Article.title" placeholder="标题"></el-input>
        <el-input v-model="Article.type" placeholder="类型"></el-input>

        <!--解析markdown-->
        <!--<div class="markdown-body" v-html="htmlContent" v-highlightjs >-->
        <!--</div>-->

      </el-col>
    </el-row>


    <el-row>
      <el-col :offset="2" :span="20">
        <div id="main" style="width: 100%">
          <mavon-editor v-model="Article.mdContent" @change="change"/>
        </div>
        <div style="margin-top: 20px">
          <el-button type="primary" @click="publish">保存</el-button>
        </div>
      </el-col>
    </el-row>


    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../commons/Header2"
  import Login from "../commons/Login"
  import Reg from "../commons/Reg"
  import Footer from "../commons/Footer"

  export default {
    components: {
      Header,
      Login,
      Reg,
      Footer
    },
    name: "Compiler",
    data() {
      return {
        mdContent: '',
        htmlContent: '',
        id:'',
        Article: {
          title: '',
          type: '',
          createTime: '',
          auth: '',
          content: '',
          mdContent: ''
        }
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      this.initArticle();
      console.log(this.Article.mdContent);
    },

    methods: {
      //获得要编辑的文章
      initArticle(){
        let url = this.websiteUrl + '/mooc/article/queryById?id=' + this.id;
        let that = this;
        this.axios.get(url).then(function (response) {
          if (response.data.code == 200) {
            that.Article = response.data.data;
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

      //当富文本编辑器内容发生改变时同步显示页面效果
      change(value, render) {
        // render 为 markdown 解析后的结果
        this.htmlContent = render;
        //this.article.mdcontent = this.plainContent
      },
      // 发表文章
      publish() {
        this.getTime();
        this.Article.content = this.htmlContent;
        this.Article.mdContent = this.mdContent;
        // console.log(this.Article);
        let url = this.websiteUrl + '/mooc/article/publish';
        let that = this;
        this.axios.post(url, this.Article).then(function (response) {
          if (response.data.code == 200) {
            that.$message({
              message: response.data.msg,
              type: 'success'
            });
            window.location.href = "/catlog"
          } else {
            that.$message({
              message: response.data.msg,
              type: 'error'
            });
          }
        }).catch(function (error) {
          that.$message({
            message: '推文发表失败！',
            type: 'error'
          });
        })
      },

      // 获取当前时间
      getTime() {
        setInterval(() => {
          //new Date() new一个data对象，当前日期和时间
          //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
          this.Article.createTime = new Date().toLocaleString();
        }, 1000)
      },
    }
  }
</script>

<style scoped>

  @import "https://cdn.bootcss.com/github-markdown-css/3.0.1/github-markdown.min.css";

</style>
