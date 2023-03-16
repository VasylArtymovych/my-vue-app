import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import PostsPage from '@/pages/PostsPage.vue';
import PostDescription from '@/pages/PostDescription.vue';
import PostPageWithStore from '@/pages/PostPageWithStore.vue';
import PostPageCompositionApi from '@/pages/PostPageCompositionApi';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/posts/:id',
    component: PostDescription,
  },
  {
    path: '/store',
    component: PostPageWithStore,
  },
  {
    path: '/compositionApi',
    component: PostPageCompositionApi,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
