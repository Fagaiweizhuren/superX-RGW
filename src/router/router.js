import Main from '@/views/Main.vue'

export const appError = {
  path: '/error',
  name: 'errorIndex',
  meta: {
    title: '服务端错误'
  }
}

export const appRouter = {
  path: '/home',
  name: 'mainPage',
  meta: {
    title: 'HI superX-RGW'
  },
  component: Main
}

export const grid = {
  path: '/grid',
  name: 'gridPage',
  meta: {
    title: 'Vue Grid'
  },
  component: resolve => { require(['@/views/grid/grid.vue'], resolve) }
}

export const routers = [
  appError,
  appRouter,
  grid
]
