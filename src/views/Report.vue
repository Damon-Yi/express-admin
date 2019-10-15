<template>
  <div class="main">
    <el-card class="box-card">
      <el-button @click="exportData">导出</el-button>
      <el-table :data="tableData" border style="width: 100%;margin: 10px 0;">
        <el-table-column prop="proName" label="产品名" width="180"></el-table-column>
        <el-table-column prop="name" label="用户名" width="180"></el-table-column>
        <el-table-column prop="mobile" label="手机号" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="convenientTime" label="方便联系时间"></el-table-column>
        <el-table-column prop="createTime" label="提交时间"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      pageNum: 1,
      pageSize: 5,
      tableData: [
        {
          proName: "2016-05-02",
          name: "王小虎",
          mobile: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          convenientTime: "上海市普陀区金沙江路 1518 弄",
          createTime: "上海市普陀区金沙江路 1518 弄"
        },
        {
          proName: "2016-05-02",
          name: "王小虎",
          mobile: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          convenientTime: "上海市普陀区金沙江路 1518 弄",
          createTime: "上海市普陀区金沙江路 1518 弄"
        },
        {
          proName: "2016-05-02",
          name: "王小虎",
          mobile: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          convenientTime: "上海市普陀区金沙江路 1518 弄",
          createTime: "上海市普陀区金沙江路 1518 弄"
        },
        {
          proName: "2016-05-02",
          name: "王小虎",
          mobile: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          convenientTime: "上海市普陀区金沙江路 1518 弄",
          createTime: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle() {},
    exportData() {}
  }
};
</script>

<style lang="stylus">

</style>
