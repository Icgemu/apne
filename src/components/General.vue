<template>
  <el-row>
    <el-col :span="16">
      <div id='map' />
    </el-col>
    <el-col :span="8">
      <div id='echart' >
        <div id='chart1'>1</div>
        <div id='chart2'>2</div>
        <div id='chart3'>3</div>
        <div id='chart4'>4</div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import L from "leaflet";
import echarts from "echarts";

import CustomControl from '../util/CustomControl'
import VueCityControl from '../util/VueCityControl'
import ChartControl from '../util/ChartControl'
export default {
  data: function() {
    return {
      map: null,
      option1: {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["AG", "GE3", "A5H", "A2A", "AE"]
        },
        toolbox: {
          show: false,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ["line", "bar", "stack", "tiled"]
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "AG",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "GE3",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "A5H",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "A2A",
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "AE",
            type: "line",
            title:{text:'AAA'},
            stack: "总量",
            itemStyle: {
              normal: {
                areaStyle: {
                  type: "default"
                }
              }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
    };
  },

  mounted() {
    debugger;
    let self = this;
    setTimeout(() => {
      self.initMap();
      self.initCharts();
    }, 500);
  },
  methods: {
    initMap: function() {
      debugger;
      this.map = L.map("map",{attributionControl:false,zoomControl:false}).setView([23.1268, 113.3047], 10);
      L.tileLayer('http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}').addTo(this.map)
      // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      //   this.map
      // );
      let component1 = new VueCityControl({propsData: {'map': this.map}})
      new CustomControl({'component':component1,position:'topleft'}).addTo(this.map)
      let component2 = new ChartControl({propsData: {'map': this.map}})
      new CustomControl({'component':component2,position:'bottomright'}).addTo(this.map)
    },
    initCharts: function() {
      for (let i = 1; i <= 4; i++) {
        debugger;
        let chart = echarts.init(document.getElementById("chart" + i));
        chart.setOption(this.option1);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.el-main .el-row {
  height: 100%;
  padding: 5px 0px;

  .el-col {
    height: 100%;

    div {
      height: 100%;
    }
  }
}

#echart {
  height: 100%;

  div {
    height: 25%;
    padding :0px 1px;
    border-bottom :1px dashed #7c7b7b;
  }
}
</style>


