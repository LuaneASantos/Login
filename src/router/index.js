import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from 'layouts/MainLayout.vue'
import Cadastrar from 'layouts/views/Cadastrar.vue'
import ConfirmarCadastro from 'layouts/views/ConfirmarCadastro.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainLayout',
      component: MainLayout
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: Cadastrar
    },
    {
      path: '/confirmarCadastro',
      name: 'confirmarCadastro',
      component: ConfirmarCadastro
    }
  ]
})
