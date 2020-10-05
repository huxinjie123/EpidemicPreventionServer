/*
 * @Author: LL
 * @Last Modified time: 2019-12-16 16:37:32
 * @description: 数据中心 考试分析
 */
<template>
  <div>
    <div class="topWrap">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="学期">
          <el-select v-model="formInline.region" placeholder="请输入学期">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程">
          <el-select v-model="formInline.region" placeholder="请输入课程">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="考试">
          <el-select v-model="formInline.region" placeholder="请输入考试">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="班级">
          <el-select v-model="formInline.region" placeholder="请输入班级">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button type="primary">导出</el-button>
        </el-form-item>
      </el-form>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="查看考试记录" name="first"></el-tab-pane>
        <el-tab-pane label="查看试卷试题" name="second"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="main">
      <div class="main_orange">
        <div class="orange_title">
          <p>试卷质量综合分析</p>
          <div class="orange_table">
            <table cellspacing="0" cellpadding="0">
              <thead>
                <tr>
                  <td rowspan="2">分析内容</td>
                  <td colspan="2">难度</td>
                  <td colspan="2">区分度</td>
                  <td rowspan="2">信度</td>
                  <td rowspan="2">效度</td>
                </tr>
                <tr>
                  <td>预期</td>
                  <td>实际</td>
                  <td>预期</td>
                  <td>实际</td>
                </tr>
              </thead>
              <tr>
                <td v-for="(item,index) in studentData" :key="index">{{item.name}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="main_violet">
        <div class="violet_title">
          <p>试卷质量综合分析</p>
          <div class="violet_table">
            <el-table :data="tableData" border style="width:90%;margin:0 auto;">
              <el-table-column fixed prop="date" label="题型" align="center"></el-table-column>
              <el-table-column prop="name" label="题目数" align="center"></el-table-column>
              <el-table-column prop="province" label="平均得分" align="center"></el-table-column>
              <el-table-column prop="city" label="难度系数" align="center"></el-table-column>
              <el-table-column prop="address" label="区分度" align="center"></el-table-column>
              <el-table-column prop="zip" label="得分率" align="center"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div class="main_firebrick">
        <div class="firebrick_title">
          <p>试卷答题情况分析</p>
          <div class="firebrick_table">
            <div>
              <el-table :data="tableData1" border style="width:90%;margin:0 auto;">
                <el-table-column fixed prop="date" label="考试人数" align="center"></el-table-column>
                <el-table-column prop="name" label="最高分" align="center"></el-table-column>
                <el-table-column prop="province" label="最低分" align="center"></el-table-column>
                <el-table-column prop="city" label="全距" align="center"></el-table-column>
                <el-table-column prop="address" label="平均分" align="center"></el-table-column>
                <el-table-column prop="zip" label="中位数M" align="center"></el-table-column>
                <el-table-column prop="math" label="众数" align="center"></el-table-column>
              </el-table>
            </div>
            <div class="firebrick_bot">
              <el-table :data="tableData" border style="width:90%;margin:0 auto;">
                <el-table-column fixed prop="date" label="题型" align="center"></el-table-column>
                <el-table-column prop="name" label="题目数" align="center"></el-table-column>
                <el-table-column prop="province" label="平均得分" align="center"></el-table-column>
                <el-table-column prop="city" label="难度系数" align="center"></el-table-column>
                <el-table-column prop="address" label="区分度" align="center"></el-table-column>
                <el-table-column prop="zip" label="得分率" align="center"></el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <div class="main_blue">
        <div class="blue_title">
          <p>试卷成绩分布分析</p>
          <div class="blue_table">
            <div class="blue_bot">
              <table cellspacing="0" cellpadding="0">
                <thead>
                  <tr>
                    <td colspan="2">分数范围</td>
                    <td>预期</td>
                    <td>实际</td>
                    <td>预期</td>
                    <td>实际</td>
                  </tr>
                </thead>
                <tr v-for="(item,index) in blueData" :key="index">
                  <td rowspan="1">{{item.date}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.province}}</td>
                  <td>{{item.city}}</td>
                  <td>{{item.address}}</td>
                  <td>{{item.zip}}</td>
                </tr>
              </table>
            </div>
            <div class="blue_tab">
              <span>折线图</span>
              <span>柱状图</span>
              <span>饼图</span>
            </div>
            <div>
              <div id="chartEle1" style="height: 400px;margin: 0 auto;width: 95%"></div>
            </div>
            <div>
              <div id="chartEle2" style="height: 400px;margin: 0 auto;width: 100%"></div>
            </div>
            <div>
              <div id="chartEle3" style="height: 400px;margin: 0 auto;width: 100%"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="main_aquamarine">
        <div class="aquamarine_title">
          <p>对比大纲考试分析</p>
          <div class="aquamarine_table">
            <el-table :data="tableData" border style="width:90%;margin:0 auto;">
              <el-table-column fixed prop="date" label="题型" align="center"></el-table-column>
              <el-table-column prop="name" label="题目数" align="center"></el-table-column>
              <el-table-column prop="province" label="平均得分" align="center"></el-table-column>
              <el-table-column prop="city" label="难度系数" align="center"></el-table-column>
              <el-table-column prop="address" label="区分度" align="center"></el-table-column>
              <el-table-column prop="zip" label="得分率" align="center"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <div class="main_green">
        <div class="green_title">
          <p>老师自我分析与评价</p>
          <div class="green_ue">
            <UE :id="ue3" :defaultMsg="defaultMsg" :config="config" ref="ue3"></UE>
          </div>
          <div class="green_tab">
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
              <el-radio-button label="top">考试人数</el-radio-button>
              <el-radio-button label="right">平均分</el-radio-button>
              <el-radio-button label="bottom">考试难度</el-radio-button>
              <el-radio-button label="left">大纲覆盖率</el-radio-button>
              <el-radio-button label="bottom">共知识点</el-radio-button>
              <el-radio-button label="bottom">知识覆盖率</el-radio-button>
              <el-radio-button label="bottom">学时</el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UE from "../../../components/ue/ue";
export default {
  name: "ProfessionalData",
  components: {
    UE
  },
  data() {
    return {
      input: "",
      activeName: "",
      formInline: {
        semester: "", //学期
        curriculum: "", //课程
        examination: "", //考试
        class: "" //班级
      },
      tabPosition: "left",
      blueData: [
        {
          date: "单选题",
          name: "人数",
          province: "",
          city: "",
          address: "",
          zip: "",
        },
        {
          date: "单选题",
          name: "比列",
          province: "",
          city: "",
          address: "",
          zip: "",
        },
        
      ],
      
      studentData: [
        {
          name: "分析结果"
        },
        {
          name: ""
        },
        {
          name: ""
        },
        {
          name: ""
        },
        {
          name: ""
        },
        {
          name: ""
        },
        {
          name: ""
        }
      ],
      tableData: [
        {
          date: "单选题",
          name: "",
          province: "",
          city: "",
          address: "",
          zip: ""
        },
        {
          date: "问答题",
          name: "",
          province: "",
          city: "",
          address: "",
          zip: ""
        }
      ],
      tableData1: [
        {
          date: "单选题",
          name: "",
          province: "",
          city: "",
          address: "",
          zip: "",
          math: ""
        }
      ],
      tableData2: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ],
      defaultMsg: "123",
      ue3: "ue3",
      config: {
        toolbars: [
          [
            "source",
            "|",
            "undo",
            "redo",
            "fontfamily",
            "link",
            "spechars",
            "bold",
            "italic",
            "underline",
            "|",
            "fontsize",
            "|",
            "kityformula",
            "uploadimage",
            "inserttable"
          ]
        ],
        initialFrameWidth: 1400, //宽度
        initialFrameHeight: 150, //高度
        // scaleEnabled: true,  底部富文本
        elementPathEnabled: false, //删除元素路径
        wordCount: false, //删除字数统计
        modelName: "resourceCenter",
        currentPage1: 5
      }
    };
  },
  mounted() {
    this.setRise();
    this.Chart1 = this.$echarts.init(document.getElementById("chartEle1")); //重点
    this.setChartOption();
    this.Chart2 = this.$echarts.init(document.getElementById("chartEle2")); //重点
    this.setChartOption1();
    this.Chart3 = this.$echarts.init(document.getElementById("chartEle3")); //重点
    this.setChartOption2();
  },

  methods: {
    setRise() {
      window.addEventListener("resize", () => {
        this.Chart1.setOption.resize();
        this.Chart2.setOption.resize();
        this.Chart3.setOption.resize();
      });
    },
    detailsPage(index, rows) {
      this.$router.push({ name: "detailsPage" });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    setChartOption() {
      let option = {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          bottom: 0,
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "8%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      };

      this.Chart1.setOption(option, true);
    },
    setChartOption1() {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        legend: {
          bottom: 0,
          data: ["蒸发量", "降水量", "平均温度"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "水量",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "降水量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          }
        ]
      };

      this.Chart2.setOption(option, true);
    },
    setChartOption2() {
      var Chart3 = this.$echarts.init(document.getElementById("chartEle3")); //重点
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          bottom: 0,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };

      this.Chart3.setOption(option, true);
    }
  }
};
</script>
<style lang='scss' scoped>
.topSearch {
  display: flex;
  height: 40px;
  line-height: 40px;
  margin: 15px;
  .ipt {
    width: 280px !important;
    margin-right: 15px;
  }
}
.main {
  width: 100%;
  // margin: 15px;
  .main_orange {
    width: 90%;
    height: 230px;
    border: 1px solid orange;
    margin: 0 auto;
    p {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      color: #fff;
      background: orange;
    }
    .orange_table {
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
  }
  .main_violet {
    width: 90%;
    height: 250px;
    border: 1px solid violet;
    margin: 0 auto;
    margin-top: 30px;
    p {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      color: #fff;
      background: violet;
    }
    .violet_table {
      margin-top: 30px;
    }
  }

  .main_firebrick {
    width: 90%;
    height: 380px;
    border: 1px solid firebrick;
    margin: 0 auto;
    margin-top: 30px;
    p {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      color: #fff;
      background: firebrick;
    }
    .firebrick_table {
      margin-top: 30px;
    }
    .firebrick_bot {
      margin-top: 30px;
    }
  }
  .main_blue {
    width: 90%;
    border: 1px solid skyblue;
    margin: 0 auto;
    margin-top: 30px;
    p {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      color: #fff;
      background: skyblue;
    }
    .blue_bot {
      margin-top: 30px;
      display: flex;
      justify-content: center;
    }
    .blue_tab {
      width: 100%;
      margin-top: 30px;
      margin-left: 70px;
      span {
        width: 120px;
        height: 40px;
        line-height: 40px;
        background: skyblue;
        color: #fff;
        text-align: center;
        display: inline-block;
        border-radius: 3px;
      }
    }
  }
  // aquamarine
  .main_aquamarine {
    width: 90%;
    height: 250px;
    border: 1px solid aquamarine;
    margin: 0 auto;
    margin-top: 30px;
    p {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      color: #fff;
      background: aquamarine;
    }
    .aquamarine_table {
      margin-top: 30px;
    }
  }
  .main_green {
    width: 90%;
    height: 300px;
    border: 1px solid green;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    p {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 15px;
      color: #fff;
      background: green;
    }
    .green_ue {
      display: flex;
      justify-content: center;
      // text-align: center;
      margin-top: 15px;
    }
    .green_tab {
      margin-top: 15px;
      margin-left: 70px;
    }
  }
}
.topWrap {
  margin: 15px;
}
tr td {
  width: 190px;
  height: 40px;
  text-align: center;
  border: 1px solid #eee;
}
</style>