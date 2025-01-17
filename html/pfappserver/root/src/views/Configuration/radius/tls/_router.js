import store from '@/store'
import RadiusTlsStoreModule from './_store'

const TheTabs = () => import(/* webpackChunkName: "Configuration" */ '../../_components/RadiusTabs')
const TheView = () => import(/* webpackChunkName: "Configuration" */ './_components/TheView')

export const useRouter = $router => {
  return {
    goToCollection: () => $router.push({ name: 'radiusTlss' }),
    goToItem: params => $router
      .push({ name: 'radiusTls', params })
      .catch(e => { if (e.name !== "NavigationDuplicated") throw e }),
    goToClone: params => $router.push({ name: 'cloneRadiusTls', params }),
    goToNew: params => $router.push({ name: 'newRadiusTls', params })
  }
}

export const beforeEnter = (to, from, next = () => {}) => {
  if (!store.state.$_radius_tls)
    store.registerModule('$_radius_tls', RadiusTlsStoreModule)
  next()
}

export default [
  {
    path: 'radius/tls',
    name: 'radiusTlss',
    component: TheTabs,
    props: () => ({ tab: 'radiusTlss' }),
    beforeEnter
  },
  {
    path: 'radius/tls_new',
    name: 'newRadiusTls',
    component: TheView,
    props: () => ({ isNew: true }),
    beforeEnter
  },
  {
    path: 'radius/tls/:id',
    name: 'radiusTls',
    component: TheView,
    props: (route) => ({ id: route.params.id }),
    beforeEnter: (to, from, next) => {
      beforeEnter()
      store.dispatch('$_radius_tls/getRadiusTls', to.params.id).then(() => {
        next()
      })
    }
  },
  {
    path: 'radius/tls/:id/clone',
    name: 'cloneRadiusTls',
    component: TheView,
    props: (route) => ({ id: route.params.id, isClone: true }),
    beforeEnter: (to, from, next) => {
      beforeEnter()
      store.dispatch('$_radius_tls/getRadiusTls', to.params.id).then(() => {
        next()
      })
    }
  }
]
