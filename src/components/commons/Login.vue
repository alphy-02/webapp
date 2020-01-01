<!--这是弹窗登录界面-->

<template>
    <div id="main">
      <div id="loginModal" tabindex="-1" role="dialog" aria-lebelledby="loginModalLabel" aria-hidden="true" class="modal fade">
        <div role="document" class="modal-dialog modal-sm">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h5 id="loginModalLabel" class="text-uppercase modal-title m-0" style="text-align:justify ">欢迎回来</h5>
              <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true" class="small text-muted">&times;</span></button>
            </div>
            <div class="modal-body">
              <form action="">
                <div class="form-group">
                  <input type="username" placeholder="用户名" v-model="username" class="form-control">
                </div>
                <div class="form-group">
                  <input type="password" placeholder="password" v-model="password" class="form-control">
                </div>
                <div>
                  <img style="cursor:pointer" title="看不清换一张" :src="randomCodeUrl" @click="changeRandomCode">
                </div>
                <div class="form-group">
                  <input type="randomCode" placeholder="验证码" v-model="validateCode" class="form-control">
                </div>
                <div class="form-group text-center">
                  <button type="button" class="btn btn-outline-primary nav-btn btn-sm" @click="doLogin">
                    <i class="fas fa-sign-out-alt mr-2">
                    </i>登录 </button>
                </div>
              </form>
              <div class="text-center">
                <p class="text-muted small">还没有账号?</p>

                <!--class="btn btn-outline-primary nav-btn btn-sm"-->
                <a href="" data-toggle="modal" data-target="#regModal"
                   class="font-weight-bold">点此注册!</a>  <p class="small text-muted">来跟我们一起发现更大的世界!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script src="../../assets/vendor/jquery/jquery.min.js"></script>
<script src="../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../../assets/vendor/lightbox2/js/lightbox.min.js"></script>
<script src="../../assets/vendor/leaflet/leaflet.js"></script>
<script src="../../assets/js/front.js"></script>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://fonts.googleapis.com/css?family=Roboto:300,400,700"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<script>
    export default {
        name: "Login",
      data() {
        return {
          token: '',

          username: '',
          password: '',
          validateCode: '',

          loginSuccessUser:'',
          randomCodeUrl: '',
        }
      },
      mounted() {
        //去发送一个axios请求，获取一个验证码。同时保存token值。下次登录还要用呢。
        //前端如何生成一个全宇宙不重复的一个token值呢。
        this.changeRandomCode();
      },
      methods: {

        // 生成token
        changeRandomCode: function () {
          const jwt = require('jsonwebtoken');
          let payload = new Date().getTime() + ""; //当前时间的毫秒数
          let secret = 'www.Alpha02.com'; //网站的域名
          this.token = jwt.sign(payload, secret);//那你的公钥+私钥，生成唯一token
          this.randomCodeUrl = this.websiteUrl+'/mooc/commons/hutoolRandomCodeImage?token=' + this.token
        },
        doLogin() {

          let url = this.websiteUrl+'/mooc/users/login?token=' + this.token;
          let that = this;
          this.axios.get(url, {
            params: {
              username: that.username,
              password: that.password,
              validateCode: that.validateCode
            }
          })
            .then(function (response) {
              // console.log(response.data);
              if (response.data.code == 200) {
                that.loginSuccessUser = response.data.data;
                that.$message({
                  message: response.data.msg,
                  type: 'success'
                });
                //1.登录成功后，登录成功用户资料，保存到localStorage;
                localStorage.setItem("www.Alpha02.com", JSON.stringify(that.loginSuccessUser));
                //2.页面跳转了。
                window.location.href = '/';

              } else {
                that.$message({
                  message: response.data.msg,
                  type: 'error',
                });
              }
            }).catch(function (error) {
            that.$message({
              message: '登录失败！',
              type: 'error'
            });
          })
        },
        goReg() {
          window.location.href = '/'
        }
      }
    }
</script>

<style scoped>
  @import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
  @import "../../assets/css/pe-icon-7-stroke.css";
  @import "../../assets/css/style.default.css";
  @import "../../assets/css/custom.css";
  @import "https://use.fontawesome.com/releases/v5.7.1/css/all.css";
  /*#main {*/
    /*text-align:left;*/
  /*}*/
</style>
