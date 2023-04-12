
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('pages/IndexPage.vue') },
      { path: 'export', name: 'export', component: () => import('pages/ExportPage.vue') },
      { path: 'import', name: 'import', component: () => import('pages/ImportPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
