<template>
  <div>
    <Header ref="header"></Header>

    <el-row style="border: 3px">
      <el-col :offset="2" :span="20">
        <el-input v-model="Raiders.title" placeholder="标题"></el-input>
      </el-col>
    </el-row>


    <el-row>
      <el-col :offset="2" :span="20">
        <div id="main" style="width: 100%">
          <mavon-editor v-model="mdContent" @change="change"/>
        </div>
        <div style="margin-top: 20px">
          <el-button type="primary" @click="publish">发表</el-button>
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
    name: "RaidersEditor",
    data() {
      return {
        mdContent: '',
        htmlContent: '',
        Raiders: {
          title: '',
          address: '',
          createTime: '',
          auth: '',
          content: '',
          mdContent: '',
        }
      }
    },
    mounted() {
      this.Raiders.auth = this.$refs.header.loginSuccessUser.username;
      this.Raiders.address = this.$route.params.address;

    },
    methods: {
      change(value, render) {
        // render 为 markdown 解析后的结果
        this.htmlContent = render;
        //this.article.mdcontent = this.plainContent
      },
      // 发表文章
      publish() {
        this.getTime();
        this.Raiders.content = this.htmlContent;
        this.Raiders.mdContent = this.mdContent;

        let url = this.websiteUrl + '/mooc/raiders/save';
        let that = this;
        this.axios.post(url, this.Raiders).then(function (response) {
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
            message: '攻略发表失败！',
            type: 'error'
          });
        })
      },

      // 获取当前时间
      getTime() {
        setInterval(() => {
          //new Date() new一个data对象，当前日期和时间
          //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
          this.Raiders.createTime = new Date().toLocaleString();
        }, 1000)
      }
    }
  }
</script>

<style scoped>

  @import "https://cdn.bootcss.com/github-markdown-css/3.0.1/github-markdown.min.css";

</style>
