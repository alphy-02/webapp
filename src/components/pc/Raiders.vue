<template>
  <div>
    <Header></Header>
    <div>
      <el-button @click="toWrite" type="text">去写攻略</el-button>
      <div id="address" class="container py-5">
        <h3>{{address.address}}</h3>
        <el-main style="text-align: left">{{address.summary}}</el-main>

        <div v-if="!isundefined" style="height: 600px">
          <el-card id="article_card" v-for="(r,index) in raidersPager" :key="index" class="py-5 bg-cover bg-center"
                   style="width: 70%;text-align: left">
            <div slot="header" class="clearfix">
              <span><h4>{{r.title}}</h4></span>
            </div>
            <div style="text-align: left">
              {{r.auth}}
            </div>
            <el-button style="float: right; padding: 10px 0 10px" type="text" @click="go_Article(r.id)">查看全文
            </el-button>
          </el-card>
        </div>

      </div>

      <!--分页效果-->
      <div id="raiders_pager" STYLE="text-align: center">
        <el-pagination

          layout="prev, pager, next"
          :page-size="pageSize"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :total="raidersList.length">
        </el-pagination>
      </div>

      <div v-if="isundefined" style="height: 500px">
        <h2>暂无该地区的攻略</h2>
      </div>
    </div>

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
      Footer,
    },
    name: "raiders",
    data() {
      return {
        addressName: '',
        address: {
          address: '',
          summary: ''
        },
        raidersList: {},
        isundefined: true,

        pageSize: 3,
        currentPage: 1,
      }
    },
    mounted() {
      this.isundefined=true,
      this.addressName = this.$route.params.address;
      this.initAddress();
      this.initRaiders();
    },

    // 计算属性计算分页
    computed: {
      raidersPager: function () {
        return this.raidersList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
      }
    },
    methods: {
      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        this.pageSize = size;
        // console.log(this.pageSize)  //每页下拉显示数据
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage;
        // console.log(this.currentPage)  //点击第几页
      },

      //路由传参实现写攻略功能
      toWrite() {
        let address = this.addressName;
        this.$router.push({
          path: `/re/${address}`,
        })
      },
      //初始化攻略界面
      initAddress() {
        let url = this.websiteUrl + "/mooc/address/query?address=" + this.addressName;
        let that = this;
        this.axios.get(url).then(function (response) {
          if (response.data.code == 200) {
            that.address = response.data.data;
            that.isundefined = false;
          } else {
            that.$message({
              message: "暂无该地区攻略",
              type: 'error'
            });
          }
        }).catch(function (error) {
          that.$message({
            message: '地区查询失败',
            type: 'error'
          })
        })
      },
      //初始化攻略
      initRaiders() {
        let url = this.websiteUrl + '/mooc/raiders/findAll?address=' + this.addressName;
        let that = this;
        this.axios.get(url).then(function (response) {
          if (response.data.code == 200) {
            that.raidersList = response.data.data;
          } else {
            that.$message({
              message: response.data.msg,
              type: 'error'
            });
          }
        }).catch(function (error) {
          that.$message({
            message: '查询攻略失败！',
            type: 'error'
          });
        })
      },
      go_Article(id) {
        this.$router.push({
          path: `/raidersArticle/${id}`,
        })
      },
    }
  }
</script>

<style scoped>
  #address {
    width: 80%;
    margin: auto;
  }
</style>
