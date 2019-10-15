<template>
  <div class="main">
    123
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
      articleList: []
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle(){

    }
  }
};
</script>

<style lang="stylus">

</style>
