
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/icon', component: () => import('../icon-preview')},
    {path: '/read-me', component: () => import('../readme-preview')},
    {path: '/**', redirect:"/icon" },
    {path: '/', redirect:"/icon" }
  ]
});

export default router;