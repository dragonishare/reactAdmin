const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/goods',
    component: Goods,
    children: [
      {
        path: '/goods/list',
        component: List
      },
      {
        path: '/goods/brand',
        component: Brand
      }
    ]
  }
];
