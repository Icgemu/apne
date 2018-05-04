<template>
  <el-button-group>
    <el-button type="button" @click="zoom(23.1268, 113.3047)">广州</el-button>
    <el-button type="button" @click="zoom(30.3171726,118.8758127)">北京</el-button>
    <el-button type="button" @click="zoom(1,2)">上海</el-button>
    <el-button type="button" @click="zoom(1,2)">天津</el-button>
  </el-button-group>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    props : ['map'],
    name:'VueCityControl',
    methods: {
      zoom: function(lat,lon){
        this.map.setView([lat, lon], 12);
      }
    }
})
</script>

<style lang="stylus" scoped>

</style>


