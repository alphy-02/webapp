<template>
    <div id="main">
      <!-- navbar-->
      <div>
        <Header></Header>
      </div>
      <!--回到顶部-->
      <!--<el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">-->
        <!--<div-->
          <!--style="{-->
        <!--height: 100%;-->
        <!--width: 100%;-->
        <!--background-color: #f2f5f6;-->
        <!--box-shadow: 0 0 6px rgba(0,0,0, .12);-->
        <!--text-align: center;-->
        <!--line-height: 40px;-->
        <!--color: #1989fa;-->
      <!--}"-->
        <!--&gt;-->
          <!--UP-->
        <!--</div>-->
      <!--</el-backtop>-->
      <!--弹窗登录界面-->
      <Login></Login>

      <Reg></Reg>


      <section id="welcome_info" class="py-5 bg-cover bg-center">
        <div class="hero-overlay"></div>
        <div class="container py-5 text-white text-center">
          <h1 class="text-shadow hero-heading">This is Rabbit</h1>
          <p class="text-shadow lead my-4">欢迎来到我们的世界</p><a href="/catlog" class="btn btn-outline-light btn-sm">了解更多</a>
        </div>
      </section>


      <section class="py-5">
        <div class="container py-5">
          <h2 class="mb-4">Mauris placerat eleifend leo.</h2>
          <p class="lead">不去感受世界的奇妙,怎么知道世界将被什么改变</p>
          <p class="text-small">只要半个平米的价格， 日韩新马泰都玩了一圈； 一两个平米的价格， 欧美列国也回来了； 下一步， 只好策划去埃及南非这些更为神奇的所在； 几年下来，全世界你都玩遍， 可能还没花完一个厨房的价钱； 但是那时候， 说不定你的世界观都已经变了。</p><a href="/catlog" class="btn btn-outline-primary btn-sm">Read More</a>
        </div>
      </section>

      <section class="bg-gray py-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-4 mb-4 mb-lg-0"><a href="/catlog" class="d-block"><img src="../../assets/img/blog1.jpg" alt="" class="img-fluid mb-4"></a>
              <h3 class="h5 mb-4"><a href="/catlog" class="text-dark">Rit eget tincidunt condimentum</a></h3>
              <p class="text-small">若不采取行动，就没有结果； 若不迈出第一步，就无法靠近； 若不起飞，世界就不会改变。 每个人心中都有一对翅膀。 你用或者不用，飞或者不飞， 世界都在等你。 越过海洋吧，跨越语言吧， 超越昨天吧，一起飞翔！</p><a href="/catlog" class="btn btn-outline-primary btn-sm">Just do it</a>
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0"><a href="/catlog" class="d-block"><img src="../../assets/img/blog2.jpg" alt="" class="img-fluid mb-4"></a>
              <h3 class="h5 mb-4"><a href="/catlog" class="text-dark">Tempor sit amet</a></h3>
              <p class="text-small">我们不是真正渴望旅行， 我们不是真正渴望看山、看水、看风景， 只是这灵魂，被城市束缚，捆绑，太久， 我们需要找回真正的自己， 这大概便是旅行的意义。</p><a href="/catlog" class="btn btn-outline-primary btn-sm">Just do it</a>
            </div>
            <div class="col-lg-4"><a href="/catlog" class="d-block"><img src="../../assets/img/blog3.jpg" alt="" class="img-fluid mb-4"></a>
              <h3 class="h5 mb-4"><a href="/catlog" class="text-dark">Vestibulum erat wisi</a></h3>
              <p class="text-small">赶第一班公车， 赶最后一班地铁， 赶稿， 赶工， 赶进度， 花一辈子时间赶时间， 不如花点时间让时间休息一下......</p><a href="/catlog" class="btn btn-outline-primary btn-sm">Just do it</a>
            </div>
          </div>
        </div>
      </section>


      <section class="py-5">
        <div class="container py-5">
          <h2 class="mb-5">Integrations</h2>
          <div class="row mb-2">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="icon mb-4"><i class="pe-7s-alarm"></i></div>
              <h5 class="lined mb-4">Webdesign</h5>
              <p class="text-muted text-small">Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="icon mb-4"><i class="pe-7s-cloud"></i></div>
              <h5 class="lined mb-4">Print</h5>
              <p class="text-muted text-small">Advantage old had otherwise sincerity dependent additions. It in adapted natural.</p>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="icon mb-4"><i class="pe-7s-coffee"></i></div>
              <h5 class="lined mb-4">SEO and SEM</h5>
              <p class="text-muted text-small">Am terminated it excellence invitation projection as. She graceful shy.</p>
            </div>
          </div>

          <h2 class="mb-5">Tools</h2>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="icon mb-4"><i class="pe-7s-monitor"></i></div>
              <h5 class="lined mb-4">Consulting</h5>
              <p class="text-muted text-small">Fifth abundantly made Give sixth hath. Cattle creature i be don't them.</p>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="icon mb-4"><i class="pe-7s-signal"></i></div>
              <h5 class="lined mb-4">Email Marketing</h5>
              <p class="text-muted text-small">Advantage old had otherwise sincerity dependent additions. It in adapted natural.</p>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div class="icon mb-4"><i class="pe-7s-id"></i></div>
              <h5 class="lined mb-4">UX &amp; UI</h5>
              <p class="text-muted text-small">Am terminated it excellence invitation projection as. She graceful shy.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>

    </div>
</template>
<script src="../../assets/vendor/jquery/jquery.min.js"></script>
<script src="../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="../../assets/js/front.js"></script>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://fonts.googleapis.com/css?family=Roboto:300,400,700"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<script>
  import Header from "../commons/Header2"
  import Login from "../commons/Login"
  import Reg from "../commons/Reg"
  import Footer from "../commons/Footer"
    export default {
      components:{
        Header,
        Login,
        Reg,
        Footer
      },
        name: "Index2"
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
  #welcome_info{
    background: url("../../assets/img/jumbotron1.jpg");
  }
</style>
