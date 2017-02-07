/**
 * Created by Administrator on 2017-1-10.
 */

// 导入模板
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Lydt from './pages/cksq/Lydt.vue'
import LydtD from './pages/cksq/LydtD.vue'
import Dksj from './pages/rzfw/Dksj.vue'
import Cksq from './pages/cksq/index.vue'
import Ckzj from './pages/cksq/Ckzj.vue'
import NewsDetail from './pages/news/Detail.vue'
import PubLy from './pages/cksq/PubLy.vue'
// 编写路由集合
const routes = [
  {
    name: 'Home', // 路由名，这个字段是可选的
    path: '/', // 路由路径，这里是根路径所以是'/'
    component: Home, // 模板
    meta : { auth : false}
  },
  {
    name: 'Login', // 路由名，这个字段是可选的
    path: '/login', // 路由路径，这里是根路径所以是'/'
    component: Login, // 模板
  },
  {
    name : 'Lydt',
    path : '/cksq/lydt',
    component : Lydt,
    meta : { auth : false }
  },
  {
    name : 'Dksj',
    path : '/rzfw/dksj',
    component : Dksj
  },
  {
    name : 'Cksq',
    path : '/cksq',
    component : Cksq
  },
  {
    name : 'Ckzj',
    path : '/cksq/ckzj',
    component : Ckzj
  },
  {
    name : 'NewsDetail',
    path : '/news/detail/:id',
    component : NewsDetail
  },
  {
    name : 'PubLy',
    path : '/lydt/pub',
    component : PubLy,
    meta : { auth : true}
  },
  {
    name : 'LydtD',
    path : '/lydt/detail/:id',
    component : LydtD
  }
  // {
  //   path:'/lydt',
  //   component: Home,
  //   children:[
  //     {
  //       path:'xx',
  //       component: Home,
  //       alias:'/cksq/lydt'
  //     }
  //   ]
  // }
]
// 导出路由集合
export default routes
