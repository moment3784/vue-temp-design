/**
 * 组件总出口
 */
// import * as base from './base/'
import * as common from './common/'
// import * as plugins from './plugins/'
import * as layout from './layout/'

let install = (Vue, options) => {
  Vue.component(layout.Base.name, layout.Base)
  Vue.component(common.Navbar.name, common.Navbar)
  Vue.component(common.LeftSide.name, common.LeftSide)
}

export {
  install
}
