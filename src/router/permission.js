import router from "./router";

// 处理访问权限
router.beforeEach((to, from, next) => {
  next();
});

router.afterEach(() => {});
