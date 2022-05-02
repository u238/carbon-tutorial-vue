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
    }
  ]
});
