<template>
  <div id="main">
    <Header ref="header"></Header>


    <!--全文-->
    <section class="py-5 bg-cover bg-gray">
      <div class="container py-5">
        <h1 class="lined">{{article.title}}</h1>
        <div style="text-align: right"><i class="el-icon-edit"></i>{{article.auth}}&emsp;{{article.createTime}}</div>
        <!--<p class="lead my-4">{{article.content}}</p>-->
        <div class="markdown-body" v-html="article.content"></div>
      </div>
    </section>

    <!--留言列表-->
    <section class="py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-8">
            <div class="border-bottom my-4"></div>
            <h5 class="mb-4">留言区</h5>
            <div class="media mb-5" v-for="(c,index) in commentsList" :key="index">
              <!--<img src="img/blog-avatar.jpg" alt="" width="100" class="rounded-circle">-->
              <div class="media-body ml-4">
                <h6 class="my-2">{{c.username}}</h6>
                <p class="small text-muted"><i class="far fa-clock mr-1"></i>{{c.createTime}}</p>
                <p class="text-small mb-4">{{c.content}}</p>
              </div>
            </div>


            <!--留言功能-->
            <div class="border-bottom my-4"></div>
            <h5 class="mb-4">给作者留言：</h5>
            <form id="contact-form" method="post" action="contact.php" class="contact-form form">

              <div class="row">
                <div class="form-group col-lg-12">
                  <!--<label for="message" class="font-weight-normal">Comment <span class="text-primary">*</span></label>-->
                  <textarea id="message" rows="3" name="message" class="form-control"
                            v-model="publishComments.content"></textarea>
                </div>
                <div class="form-group col-lg-12 text-right">
                  <button type="button" class="btn btn-outline-primary" @click="publish"><i
                    class="far fa-comment mr-2"> </i>发布
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
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
    name: "Article",
    data() {
      return {
        id: '',//文章ID
        article: {},//查询到的文章
        createTime: '',//查询到的文章的创建时间
        commentTime:'',//查询到的评论时间
        publishComments: {
          username: '',
          aid: '',
          content: '',
          createTime: '',
        },
        commentsList: {}
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      this.initArticle();
      this.initCreateTime();
      this.publishComments.username = this.$refs.header.loginSuccessUser.username;
      this.initComments();
    },
    methods: {
      //更新评论列表
      initComments() {
        let url = this.websiteUrl + '/mooc/comments/find?aid=' + this.id;
        let that = this;
        this.axios.get(url).then(function (response) {
          if (response.data.code == 200) {
            that.commentsList = response.data.data;
          } else {
            that.$message({
              message: response.data.message,
              type: 'error'
            })
          }
        }).catch(function (error) {
          that.$message({
            message: '更新失败！',
            type: 'error'
          });
        })
      },

      //保存评论
      publish() {
        this.publishComments.aid = this.id;
        this.getTime();
        let url = this.websiteUrl + '/mooc/comments/save';
        let that = this;
        this.axios.post(url, this.publishComments).then(function (response) {
          if (response.data.code == 200) {
            that.$message({
              message: response.data.msg,
              type: 'success'
            });
            // window.location.href = "/catlog"
            that.$router.go(0);
          } else {
            that.$message({
              message: response.data.msg,
              type: 'error'
            });
          }
        }).catch(function (error) {
          that.$message({
            message: '评论发表失败！',
            type: 'error'
          });
        })
      },

      // 获取当前时间
      getTime() {
        setInterval(() => {
          //new Date() new一个data对象，当前日期和时间
          //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
          this.publishComments.createTime = new Date().toLocaleString();
        }, 1000)
      },

      //初始化编写时间
      initCreateTime() {
        this.createTime = this.article.create_time;
      },

      //初始化文章内容
      initArticle() {
        let url = this.websiteUrl + '/mooc/article/queryById?id=' + this.id;
        let that = this;
        this.axios.get(url).then(function (response) {
          if (response.data.code == 200) {
            that.article = response.data.data;
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
