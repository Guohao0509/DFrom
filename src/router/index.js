import Vue from 'vue';
import Router from 'vue-router';
let _import = require('./import.' + process.env.NODE_ENV);

Vue.use(Router);

var router =  new Router({
  
  routes: [
    {
      path: '/login',
      name: 'login',
      component: _import('login/login')
    },
    {
      path: '/dashboard',
      name: 'layout',
      meta: {
        name: '首页'
      },
      component: _import('layout/layout'),
      children: [
        {
          path: '/dashboard/display_board',
          name: 'display_board',
          meta: {
            name: '平台账户总览'
          },
          component: _import('display_board/display_board')
        },
        {
          path: '/dashboard/income_expenses',
          name: 'income_expenses',
          meta: {
            name: '平台收支明细'
          },
          component: _import('income_expenses/income_expenses')
        },
        {
          path: '/dashboard/expenses_examine',
          name: 'expenses_examine',
          meta: {
            name: '平台支出审核'
          },
          component: _import('expenses_examine/expenses_examine')
        },
        {
          path: '/dashboard/operator_account_board',
          name: 'operator_account_board',
          meta: {
            name: '运营商账户总览'
          },
          component: _import('operator_account_board/operator_account_board')
        },
        {
          path: '/dashboard/operator_income_expenses',
          name: 'operator_income_expenses',
          meta: {
            name: '运营商收支明细'
          },
          component: _import('operator_income_expenses/operator_income_expenses')
        },
        {
          path: 'operator_account_manage',
          name: 'operator_account_manage',
          meta: {
            name: '运营商账户管理'
          },
          component: _import('operator_account_manage/operator_account_manage')
        },
        {
          path: 'api_manage',
          name: 'api_manage',
          meta: {
            name: 'API管理'
          },
          component: _import('api_manage/api_manage')
        },
        {
          path: 'test',
          name: 'test',
          meta: {
            name: 'test'
          },
          component: _import('test/test')
        },
        {
          path: 'testDrag',
          name: 'testDrag',
          meta: {
            name: 'testDrag'
          },
          component: _import('test/testDrag')
        },
        {
          path: 'system_user_manage',
          name: 'system_user_manage',
          meta: {
            name: '系统用户管理'
          },
          component: _import('system_user_manage/system_user_manage')
        },
        {
          path: 'test_store',
          name: 'test_store',
          meta: {
            name: 'test_store'
          },
          component: _import('template/store')
        },
        {
          path: 'users',
          name: 'users',
          meta: {
            name: 'users'
          },
          component: _import('users/users'),
          children: [
            {
              path: 'user',
              name: 'user',
              meta: {
                name: 'user'
              },
              component: _import('users/components/user')
            },
            {
              path: 'user_group',
              name: 'user_group',
              meta: {
                name: 'user_group'
              },
              component: _import('users/components/user_group')
            },
          ]
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  // ...
  next();
  // router.push({path: '/login'});
});

export default router;
