<template>
  <div id="main">
    <div id="regModal" tabindex="-1" role="dialog" aria-lebelledby="regModal" aria-hidden="true" class="modal fade">
      <div role="document" class="modal-dialog modal-sm">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h5 id="loginModalLabel" class="text-uppercase modal-title m-0" style="text-align:justify ">用户注册</h5>
            <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true" class="small text-muted">&times;</span></button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="form-group">
                <input type="username" placeholder="用户名" v-model="regUser.username" class="form-control">
              </div>
              <div class="form-group">
                <input type="password" placeholder="password" v-model="regUser.password" class="form-control">
              </div>
              <div class="form-group">
                <input type="phone" placeholder="手机号" v-model="regUser.phone" class="form-control">
              </div>
              <div >
                <el-button :plain="true" type="primary" size="mini" @click="sendRandomCode">发送验证码</el-button>
              </div>
              <div class="form-group">
                <input type="randomCode" placeholder="验证码" v-model="regUser.validateCode" class="form-control">
              </div>
              <div class="form-group">
                <input type="email" placeholder="e-mail" v-model="regUser.email" class="form-control">
              </div>
              <div class="form-group text-center">
                <button type="button" class="btn btn-outline-primary nav-btn btn-sm" @click="doReg">
                  <i class="fas fa-sign-out-alt mr-2">
                  </i>注册 </button>
              </div>
            </form>
            <!--<div class="text-center">-->
              <!--<p class="text-muted small">还没有账号?</p>-->
              <!--<a href="/preg" class="font-weight-bold">点此注册!</a>  <p class="small text-muted">来跟我们一起发现更大的世界!</p>-->
            <!--</div>-->
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
        name: "reg",
      data() {
        return {
          token: '', //获取验证码时，发给服务器的token值。
          randomCodeUrl: '',
          regUser: {
            username:'',
            phone: '',
            password: '',
            email: '',
            validateCode: ''
          },
        }
      },
      methods: {
        //给手机发送验证码
        sendRandomCode() {
          let url = this.websiteUrl+'/mooc/commons/mrcode?mobile=' + this.regUser.phone;
          let that = this;
          this.axios.get(url)
            .then(function (response) {
              if (response.data.code == 200) {
                that.token = response.data.data;
                that.$message({
                  message: response.data.msg,
                  type: 'success'
                });
              } else {
                that.$message({
                  message: response.data.msg,
                  type: 'error'
                });
              }
            }).catch(function (error) {
            that.$message({
              message: '验证码发送失败！',
              type: 'error'
            });
          })
        },
        doReg() {
          let url = this.websiteUrl+'/mooc/users/reg?token=' + this.token;
          let that = this;
          this.axios.post(url, this.regUser).then(function (response) {
            //console.log(response.data);
            if (response.data.code == 200) {

              that.$message({
                message: response.data.msg,
                type: 'success'
              });
              window.location.href = "/"
            } else {
              that.$message({
                message: response.data.msg,
                type: 'error'
              });
            }
          }).catch(function (error) {
            that.$message({
              message: '验证码验证失败！',
              type: 'error'
            });
          })
        }
      },
    }
</script>

<style scoped>
  @import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
  @import "../../assets/css/pe-icon-7-stroke.css";
  @import "../../assets/css/style.default.css";
  @import "../../assets/css/custom.css";
  @import "https://use.fontawesome.com/releases/v5.7.1/css/all.css";
</style>
