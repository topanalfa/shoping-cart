import Vue from 'vue';
import Router from 'vue-router';
import Products from '../components/Products.vue';
import Cart from '../components/Cart.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
});
