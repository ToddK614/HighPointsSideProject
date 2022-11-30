import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Register from "../views/Register.vue";
import store from "../store/index";
import HighPointList from "../views/HighPointList.vue";
import AddHighPoint from "../views/AddHighPoint.vue";
import TopFive from "../views/TopFive.vue";
import HighPointDetails from "../views/HighPointDetails.vue";


Vue.use(Router);

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",  //  This is the path which defines where the app opens
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/",
      name: "login",
      component: Login,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/highpointlist",
      name: "highPointList",
      component: HighPointList,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: "/addhighpoint",
      name: "addhighpoint",
      component: AddHighPoint,
      meta: {
        requiresAuth: false,
      }

    },
    {
      path: "/topfive",
      name: "topfive",
      component: TopFive,
      meta: {
        requiresAuth: false,
      }

    },
    {
      path: "/topfive/:highpointname",
      name: "highPointDetails",
      component: HighPointDetails,
      meta: {
        requiresAuth: false,
      }
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && store.state.token === "") {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router;
