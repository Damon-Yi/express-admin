<template>
  <div class="main">
    <el-card class="box-card">
      <el-button size="mini" :loading="downloadLoading" @click="exportAll">全部导出</el-button>
      <el-button size="mini" :loading="downloadLoading" @click="exportDate">日期导出</el-button>
      <el-date-picker
        v-model="exportDateVal"
        size="mini"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions">
      </el-date-picker>
      <el-table class="b-table" v-loading="listLoading" :data="tableData" element-loading-text="拼命加载中" border fit highlight-current-row>
        <el-table-column prop="proName" label="产品名"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="mobile" label="手机号"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="convenientTime" label="方便联系时间"></el-table-column>
        <el-table-column label="提交时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | parseTime }}</span>
        </template>
      </el-table-column>
      </el-table>
      <Pagination v-show="total>0" :total="total" :page.sync="pageNum" :limit.sync="pageSize" @pagination="getList" />
    </el-card>
  </div>
</template>

<script>
import { getReports, getReportsByDate } from "@/api/report";
import Pagination from "@/components/Pagination";
import { parseTime } from "@/utils/index";
import { export_json_to_excel } from "@/utils/excel";

export default {
  name: "home",
  components: { Pagination },
  data() {
    return {
      downloadLoading: false,
      listLoading: false,
      pageNum: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      tableHeaders: [
        "产品名",
        "用户名",
        "手机号",
        "地址",
        "方便联系时间",
        "提交时间"
      ],
      tableKeys: [
        "proName",
        "name",
        "mobile",
        "address",
        "convenientTime",
        "createTime"
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      exportDateVal: ""
    };
  },
  filters: {
    parseTime
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      let params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      getReports(params).then(({ data }) => {
        if (data.code === 0) {
          this.total = data.total;
          this.tableData = data.data;
          this.listLoading = false;
        }
      });
    },
    exportAll() {
      getReports().then(({ data }) => {
        if (data.code === 0) {
          const arr = this.formatJson(this.tableKeys, data.data);
          this.exportData(arr, "全部");
        }
      });
    },
    exportDate() {
      if (!this.exportDateVal) return this.$message.warning("选择导出日期");
      let startTime = parseTime(this.exportDateVal[0], "{y}-{m}-{d}");
      let endTime = parseTime(this.exportDateVal[1], "{y}-{m}-{d}");
      getReportsByDate({ startTime, endTime }).then(({ data }) => {
        if (data.code === 0) {
          if (data.data.length > 0) {
            const arr = this.formatJson(this.tableKeys, data.data);
            this.exportData(arr, `${startTime}~${endTime}`);
          } else {
            this.$message.warning("无数据");
          }
        }
      });
    },
    exportData(data, fileName) {
      this.downloadLoading = true;
      export_json_to_excel({
        header: this.tableHeaders, //表头 必填
        data, //具体数据 必填
        filename: fileName, //非必填
        autoWidth: true, //非必填
        bookType: "xlsx" //非必填
      });
      this.downloadLoading = false;
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          if (j === "createTime") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    }
  }
};
</script>

<style lang="stylus">
  .b-table{
    margin: 10px 0;
  }
  .el-table td, .el-table th{
    padding: 4px 0 !important;
  }
</style>
