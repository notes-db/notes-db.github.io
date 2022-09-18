import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import NewNote from "@/components/NewNote.vue";
import Note from "@/components/Note.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Notes Library",
      },
    },
    {
      path: "/newNote",
      name: "New note",
      component: NewNote,
      meta: {
        title: "New - Notes Library",
      },
    },
    {
      path: "/note/:id",
      name: "Note",
      component: Note,
      params: true,
    },
  ],
});

export default router;
