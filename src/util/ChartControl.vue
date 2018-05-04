<template>
  <el-carousel :interval="4000" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <div v-bind:id = "'vchart' + item" class="vchart"></div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Vue from "vue"
import echarts from 'echarts'
export default Vue.extend({
  props: ["map"],
  name: "ChartControl",
  data: function() {
    return {
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
            title: { text: "AAA" },
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
  mounted(){
    let self = this
    setTimeout(() => {
      self.initCharts();
    }, 500);
  },
  methods: {
    initCharts: function() {
      for (let i = 1; i <= 6; i++) {
        debugger;
        let chart = echarts.init(document.getElementById("vchart" + i));
        chart.setOption(this.option1);
      }
    }
  }
});
</script>
<style>

.vchart {
  height: 200px;
}
.el-carousel__container {
  width: 600px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #fff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fff;
}
</style>


