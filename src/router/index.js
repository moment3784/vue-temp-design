import Vue from 'vue'
import Router from 'vue-router'
import UserList from '@/pages/user_list/user_list'
import UserListIn from '@/pages/user_list/childs/user_list.in.vue'
import UserListOut from '@/pages/user_list/childs/user_list.out.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserList',
      component: UserList,
      children: [
        {path: 'in', component: UserListIn},
        {path: 'out', component: UserListOut}
      ]
    },
    {
      path: '/UserList/',
      name: 'UserList',
      component: UserList,
      children: [
        {path: 'in', component: UserListIn},
        {path: 'out', component: UserListOut}
      ]
    }
  ]
})
