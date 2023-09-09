import { createRouter, createWebHistory } from "vue-router";
import SelfiesMe from "@/components/SelfiesMe.vue";
import ProgrammingStory from "@/components/ProgrammingStory.vue";
import RepositoryLink from "@/components/RepositoryLink.vue";
import CSSFeatureVideo from "@/components/CSSFeatureVideo.vue";
import TeenActivity from "@/components/TeenActivity.vue";

const routes = [
  { path: "/", component: SelfiesMe },
  { path: "/programming-story", component: ProgrammingStory },
  { path: "/repository-link", component: RepositoryLink },
  { path: "/css-feature-video", component: CSSFeatureVideo },
  { path: "/teen-activity", component: TeenActivity },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
