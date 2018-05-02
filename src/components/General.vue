<template>
    <el-row>
      <el-col :span="18">
        <div id='map'/>
      </el-col>
      <el-col :span="6">
        <div id='echart'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </el-col>
    </el-row>
</template>

<script>
import L from 'leaflet'
export default {

  data() {
    return {
      map : null
    }
  },
  mounted() {
    debugger
    let self = this
    setTimeout( () => {
      debugger
      self.map = L.map('map').setView([23.1268,113.3047], 10);
      //L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}').addTo(self.map)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(self.map);
    },500)
  }
  
}
</script>

<style lang="stylus" scoped>
.el-main .el-row {
  height:100%;
  padding:5px 0px;
  .el-col {
    height:100%;
    div {
      height :100%;
    }
  }
}
#echart {
  height :100%;
  div {
    height :25%;
    padding :1px 1px;
  }
}
</style>


