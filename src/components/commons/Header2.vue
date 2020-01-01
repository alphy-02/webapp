<template>
  <div id="main">
    <header class="header">
      <nav class="navbar navbar-expand-lg py-lg-0">
        <div class="container"><a href="/" class="navbar-brand text-uppercase font-weight-bold">Rabbit.</a>
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                  class="navbar-toggler navbar-toggler-right small"><span class="text-uppercase mr-2">菜单</span><i
            class="fas fa-bars"></i></button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto d-lg-flex align-items-lg-center">
              <li class="nav-item"><a href="/" class="nav-link font-weight-bold text-uppercase px-lg-3 py-lg-4 active">首页 </a>
              </li>
              <li class="nav-item"><a href="/catlog" class="nav-link font-weight-bold text-uppercase px-lg-3 py-lg-4">推文</a>
              </li>
              <!--<li class="nav-item dropdown"><a id="navbarDropdownMenuLink" href="#" data-toggle="dropdown"-->
                                               <!--aria-haspopup="true" aria-expanded="false"-->
                                               <!--class="nav-link font-weight-bold text-uppercase px-lg-3 py-lg-4 dropdown-toggle">Dropdown</a>-->
                <!--<div aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu mt-0"><a href="#"-->
                                                                                            <!--class="dropdown-item small text-uppercase">Dropdown-->
                  <!--item 1</a><a href="#" class="dropdown-item small text-uppercase">Dropdown item 2</a><a href="#"-->
                                                                                                         <!--class="dropdown-item small text-uppercase">Dropdown-->
                  <!--item 3</a><a href="#" class="dropdown-item small text-uppercase">Dropdown item 4</a></div>-->
              <!--</li>-->
              <li class="nav-item"><a href="/editor"
                                      class="nav-link font-weight-bold text-uppercase px-lg-3 py-lg-4">写推文 </a>
              </li>
              <li v-if="!isLogin" class="nav-item mt-4 mt-lg-0">
                <button type="button" data-toggle="modal" data-target="#loginModal"
                        class="btn btn-outline-primary nav-btn btn-sm"><i class="fas fa-sign-out-alt mr-2"></i>登录
                </button>
              </li>
              <li v-if="isLogin">你好：<a href="/eindex">{{this.loginSuccessUser.username}}</a>&nbsp;&nbsp; |&nbsp;&nbsp;
                <a href="" @click="doLogout">注销</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script src="../../assets/vendor/jquery/jquery.min.js"></script>
<script src="../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../../assets/js/front.js"></script>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://fonts.googleapis.com/css?family=Roboto:300,400,700"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<script>
  var graceChecker=require('../../assets/js/commons/graceChecker')
  export default {
    name: "Header2",
    data() {
      return {
        isLogin: true,
        loginSuccessUser: {},
      }
    },
    mounted(){
      this.isLogin = graceChecker.isLogin();
      if(this.isLogin){
        if(sessionStorage.getItem("www.Alpha02.com")!=null){

          //JSON.parse
          //JSON.stringify   是jQuery的方法，在vue 默认是不能用。

          this.loginSuccessUser = JSON.parse( sessionStorage.getItem("www.Alpha02.com"));
          // console.log(this.loginSuccessUser);

        }
        if(localStorage.getItem("www.Alpha02.com")!=null){

          this.loginSuccessUser = JSON.parse( localStorage.getItem("www.Alpha02.com"));
          // console.log(this.loginSuccessUser);

        }
      }
    },
    methods:{


      doLogout(){
        if(this.isLogin){
          if(sessionStorage.getItem("www.Alpha02.com")!=null){
            sessionStorage.removeItem("www.Alpha02.com");
          }
          if(localStorage.getItem("www.Alpha02.com")!=null){
            localStorage.removeItem("www.Alpha02.com");
          }
        }

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
  #main {
    text-align:left;
  }
</style>
