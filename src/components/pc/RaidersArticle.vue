<template>
  <div id="main">
    <Header ref="header"></Header>


    <!--全文-->
    <section class="py-5 bg-cover bg-gray">
      <div class="container py-5">
        <h1 class="lined">{{raiders.title}}</h1>
        <div style="text-align: right"><i class="el-icon-edit"></i>{{raiders.auth}}&emsp;{{raiders.createTime}}</div>
        <!--<p class="lead my-4">{{article.content}}</p>-->
        <div class="markdown-body" v-html="raiders.content"></div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="js/front.js"></script>

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
    name: "RaidersArticle",
    data() {
      return {
        id: '',//攻略ID
        raiders: {},//查询到的攻略
        createTime: '',//查询到的攻略的创建时间

      }
    },
    mounted() {
      this.id = this.$route.params.id;
      this.initArticle();
      this.initCreateTime();

    },
    methods: {
      //初始化编写时间
      initCreateTime() {
        this.createTime = this.raiders.create_time;
      },

      //初始化文章内容
      initArticle() {
        let url = this.websiteUrl + '/mooc/raiders/findAllById?id=' + this.id;
        let that = this;
        this.axios.get(url).then(function (response) {
          if (response.data.code == 200) {
            that.raiders = response.data.data;
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
  @import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
  @import "../../assets/css/pe-icon-7-stroke.css";
  @import "../../assets/css/style.default.css";
  @import "../../assets/css/custom.css";
  @import "https://use.fontawesome.com/releases/v5.7.1/css/all.css";
  @import "https://cdn.bootcss.com/github-markdown-css/3.0.1/github-markdown.min.css";

  #main {
    text-align: left;
  }
</style>
