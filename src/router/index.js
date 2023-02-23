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
        {
          path: "/Product/FashionIndustry",
          component: () => import("../views/ProductView/FashionIndustryView.vue"),
        },
        {
          path: "/Product/ElectronicIndustry",
          component: () => import("../views/ProductView/ElectronicIndustryView.vue"),
        },
        {
          path: "/Product/FoodIndustry",
          component: () => import("../views/ProductView/FoodIndustryView.vue"),
        },
      ]
    },
  ],
  scrollBehavior() {
    window.scrollTo(0,0);
  },
});

export default router;
