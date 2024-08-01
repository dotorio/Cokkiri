import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import StudyBoardView from "@/views/StudyBoardView.vue";
import MeetingView from "@/views/MeetingView.vue";
import WatingRoomView from "@/views/WatingRoomView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/study_board",
      name: "studyBoard",
      component: StudyBoardView,
    },
    {
      path: "/meeting/:roomId",
      name: "meeting",
      component: MeetingView,
    },
    {
      path: "/wating_room/:roomId",
      name: "watingRoom",
      component: WatingRoomView,
    },
    {
      path: "/game/:gameId",
      name: "gameProgress",
      component: () => import("@/views/GameProgressView.vue"),
    },
  ],
});

export default router;
