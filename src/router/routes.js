const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },
  {
    path: "/cms",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("pages/cms/DashboardPage.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainWebsiteLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("src/pages/HomeOnePage.vue"),
      },
      {
        path: "/home-two",
        name: "HomeTwo",
        component: () => import("src/pages/HomeTwoPage.vue"),
      },
      {
        path: "/home-three",
        name: "HomeThree",
        component: () => import("src/pages/HomeThreePage.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("src/pages/AboutPage.vue"),
      },
      {
        path: "/service",
        name: "Service",
        component: () => import("src/pages/ServicePage.vue"),
      },
      {
        path: "/service-details",
        name: "ServiceDetails",
        component: () => import("src/pages/ServiceDetailsPage.vue"),
      },
      {
        path: "/service-details-right",
        name: "ServiceDetailsRight",
        component: () => import("src/pages/ServiceDetailsRightPage.vue"),
      },
      {
        path: "/project",
        name: "Project",
        component: () => import("src/pages/ProjectPage.vue"),
      },
      {
        path: "/project-details",
        name: "ProjectDetails",
        component: () => import("src/pages/ProjectDetailsPage.vue"),
      },
      {
        path: "/blog-left-sidebar",
        name: "BlogLeftSidebar",
        component: () => import("src/pages/BlogLeftSidebarPage.vue"),
      },
      {
        path: "/blog-right-sidebar",
        name: "BlogRightSidebar",
        component: () => import("src/pages/BlogRightSidebarPage.vue"),
      },
      {
        path: "/blog-details",
        name: "BlogDetails",
        component: () => import("src/pages/BlogDetailsPage.vue"),
      },
      {
        path: "/blog-details-right-sidebar",
        name: "BlogDetailsRightSidebar",
        component: () => import("src/pages/BlogDetailsRightSidebarPage.vue"),
      },
      {
        path: "/contact",
        name: "Contact",
        component: () => import("src/pages/ContactPage.vue"),
      },
    ],
  },

  //bikin route login
  {
    path: "/login",
    name: "Login",
    component: () => import("src/layouts/LoginLayout.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
