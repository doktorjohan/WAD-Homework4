import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue';
import LoginView from "@/views/LoginView";
import EditPostView from "@/views/EditPostView";
import auth from "@/auth";
import AddPostView from "@/views/AddPostView";
import ContactView from "@/views/ContactView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async (to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        console.log("redirect")
        next('/login')
      } else {
        console.log("no redirect")
        next()
      }
    }
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AddPostView.vue')
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path:'/editPost',
    name: 'editPost',
    component: EditPostView
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: AddPostView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
