const routes: Array<RouteRecordRaw> = [
  {
    path: "/signin",
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SigninPage.vue') },
      { path: 'settings', component: () => import('pages/SigninSettingsPage.vue') },
      { path: 'signin-with-code', component: () => import('pages/SigninWithCodePage.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '/home', component: () => import('pages/HomePage.vue') },
    ]
  },

  // {
  //   path: "/",
  //   name: "home",
  //   component: Layout,
  //   meta: { requiresAuth: true },
  //   children: [
  //     {
  //       path: "/",
  //       component: Home,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: '/document/:idObj',
  //       name: 'Document',
  //       component: Document,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: '/service/:idObj/:idOrg',
  //       name: 'Service',
  //       props: true,
  //       component: Service,
  //       meta: { requiresAuth: true },
  //     },
  //   ],
  // },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: { requiresAuth: true }
  }
]

export default routes
