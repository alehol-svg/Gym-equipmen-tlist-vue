import { createRouter, createWebHistory } from 'vue-router';
import About from './src/components/About.vue';
import Products from './components/Products.vue';
import NonRouterComponent from './components/NonRouterComponent.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/about', component: About },
    { path: '/products', component: Products },
    { path: '/non-router', component: NonRouterComponent, props: { message: 'This is a non-router component' }}
  ]
});

export default router;
