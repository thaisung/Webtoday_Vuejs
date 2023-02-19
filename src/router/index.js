import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../layouts/HomeLayout.vue";
import ProductLayout from "../layouts/ProductLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/",
      component: HomeLayout,
      children: [
        {
          path: "/",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/Introduce",
          component: () => import("../views/IntroduceView.vue"),
        },
        {
          path: "/Contact",
          component: () => import("../views/ContactView.vue"),
        },
      ]
    },
    {
      path: "/Product",
      name: "product",
      redirect: "/Product/SellAccounts",
      component: ProductLayout,
      children: [
        {
          path: "/Product/SellAccounts",
          component: () => import("../views/ProductView/SellAccountsView.vue"),
        },
        {
          path: "/Product/ConstructionIndustry",
          component: () => import("../views/ProductView/ConstructionIndustryView.vue"),
        },
        {
          path: "/Product/CosmeticsIndustry",
          component: () => import("../views/ProductView/CosmeticsIndustryView.vue"),
        },
      ]
    },
    // {
    //   path: "/personal",
    //   name: "personal",
    //   redirect: "/personal/information",
    //   component: SidebarLayout,
    //   children: [
    //     {
    //       path: "/personal/information",
    //       component: () => import("../views/SidebarView/PersonalView.vue"),
    //     },
    //     {
    //       path: "/personal/accuracy",
    //       component: () => import("../views/SidebarView/AccuracyView.vue"),
    //     },
    //     {
    //       path: "/personal/changepassword",
    //       component: () => import("../views/SidebarView/ChangePassword.vue"),
    //     },
    //     {
    //       path: "/personal/recharge",
    //       component: () => import("../views/SidebarView/RechargeView.vue"),
    //     },
    //   ]
    // },
    // {
    //   path: "/history",
    //   name: "history",
    //   redirect: "/history",
    //   component: HomeLayout,
    //   children: [
    //     {
    //       path: "/history",
    //       component: () => import("../views/HistoryView.vue"),
    //     },
    //   ]
    // },
    // {
    //   path: "/APIdocumentation",
    //   name: "documentation",
    //   redirect: "/APIdocumentation",
    //   component: HomeLayout,
    //   children: [
    //     {
    //       path: "/APIdocumentation",
    //       component: () => import("../views/APIdocumentationView.vue"),
    //     },
    //   ]
    // },
    // {
    //   path: "/settingAdmin",
    //   name: "settingadmin",
    //   // redirect: "/settingAdmin",
    //   component: SettingAdminLayout,
    //   // children: [
    //   //   {
    //   //     path: "/APIdocumentation",
    //   //     component: () => import("../views/APIdocumentationView.vue"),
    //   //   },
    //   // ]
    // },
  ],
});

export default router;
