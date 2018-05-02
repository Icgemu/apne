<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span='6'>
          <img src="./assets/logo.png" height="58px" />
        </el-col>
        <el-col :span="12" class="hidden-sm-and-down">
          <el-menu :default-active="activeIndex" mode="horizontal" router>
            <el-menu-item index="/general">总体概况</el-menu-item>
            <el-menu-item index="/run">整车运行</el-menu-item>
            <el-menu-item index="/charge">充电行为</el-menu-item>
            <el-menu-item index="/drive">驾驶行为</el-menu-item>
            <el-menu-item index="/diagnosis">故障分析</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="6" class="hidden-sm-and-down">
          <el-input v-model="vin" placeholder="VIN 码">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </el-header>
    <el-main v-bind:style="heightCls">
      <router-view/>
    </el-main>
    <el-footer style="height:24px">
      Copyright &copy; 2018 广汽研究院 信息与数字化部
    </el-footer>
  </el-container>
</template>

<script>
  import $ from 'jquery'
  
  export default {
    name: 'App',
    data() {
      return {
        vin: '',
        height: 0,
      };
    },
  
    mounted: function() {
      debugger
      this.resize()
      $(window).resize(this.resize.bind(this))
    },
  
    methods: {
      windowInfo: function() {
        let ww = $(window).width()
        let hh = $(window).height()
  
        let th = $('.el-header').height()
        let fh = $('.el-footer').height()
        return {
          ww,
          hh,
          th,
          fh
        }
      },
      resize: function() {
        let {
          ww,
          hh,
          th,
          fh
        } = this.windowInfo()
        let height = hh - th - fh
        //console.log('resize')
        this.height = height
      }
    },
    computed: {
      heightCls: function() {
        //this.height = this.resize()
        return {
          height: this.height + 'px'
        }
      },
      activeIndex: function(){
        return this.$route.path
      }
    }
  }
</script>

<style>
  body,
  html {
    margin: 1px 5px;
  }
  
  .el-header,
  .el-main,
  .el-footer {
    padding: 0;
  }
  
  .el-header .el-row {
    border-bottom: 1px dashed #e6e6e6;
    /*background: #3b7292;*/
  }
  
  .el-menu--horizontal {
    border-bottom: none;
  }
  
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 1px solid #7c7b7b;
    color: #a6aab1;
  }
  
  .el-input {
    padding: 10px 0px;
  }
  
  .el-input-group__prepend {
    /*background-color: #3b7292;*/
  }
  
  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 24px;
    text-align: center;
    border-top: 1px dashed rgba(0, 0, 0, 0.1);
    z-index: 2;
  }
</style>
