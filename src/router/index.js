import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LeadershipView from "../views/our-services/LeadershipView.vue";
import AuthorshipView from "../views/our-services/AuthorshipView.vue";
import RelationshipView from "../views/our-services/RelationshipView.vue";
import FitnessshipView from "../views/our-services/FitnessshipView.vue";
import ServicesView from "../views/our-services/ServicesView.vue";
import MediaView from "../views/MediaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/our-services/leadership",
      name: "leadership",
      component: LeadershipView,
    },
    {
      path: "/our-services/authorship",
      name: "authorship",
      component: AuthorshipView,
    },
    {
      path: "/our-services/relationship",
      name: "relationship",
      component: RelationshipView,
    },
    {
      path: "/our-services/fitness-ship",
      name: "fitnessship",
      component: FitnessshipView,
    },
    {
      path: "/our-services/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/media/blog",
      name: "blog",
      component: MediaView,
    },
  ],
});

router.beforeEach((to, from) => {
  window.scrollTo(0, 0);
});
export default router;
