import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from './views/LoginPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '/page2',
      name: 'page2',
      component: () =>
        import(/* webpackChunkName: "page2" */ './views/Page2')
    },
    {
      path: '/page1',
      name: 'page1',
      component: () =>
        import(/* webpackChunkName: "page1" */ './views/Page1')
    },
    {
      path: '/page3',
      name: 'page3',
      component: () =>
        import(/* webpackChunkName: "page3" */ './views/Page3.vue')
    },
    {
      path: '/page4',
      name: 'page4',
      component: () =>
        import(/* webpackChunkName: "page4" */ './views/Page4.vue')
    },
    {
      path: '/page5',
      name: 'page5',
      component: () =>
        import(/* webpackChunkName: "page5" */ './views/Page5.vue')
    }
  ]
});
