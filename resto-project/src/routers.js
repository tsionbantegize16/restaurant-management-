import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import AddPage from './components/AddPage.vue';
import UpdatePage from './components/UpdatePage.vue';

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LoginPage",
    component: LoginPage,
    path: "/LoginPage",
  },
  { 
     name: 'AddPage',
     component: AddPage,
     path: '/AddPage'
    },
    { 
      name: 'UpdatePage',
      component: UpdatePage,
      path: "/UpdatePage/:id",
       },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
