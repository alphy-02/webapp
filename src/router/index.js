import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pc/Index'
import Catlog from '@/components/pc/Catlog'
import Article from '@/components/pc/Article'
import RaidersArticle from '@/components/pc/RaidersArticle'
import Editor from '@/components/pc/Editor'
import Raiders from '@/components/pc/Raiders'
import RE from '@/components/pc/RaidersEditor'
import Person from '@/components/examples/Person'
import Eindex from '@/components/examples/index'
import OArticle from '@/components/examples/OwnArticle'
import Compiler from '@/components/examples/Compiler'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [


    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/catlog',
      name: 'Catlog',
      component: Catlog
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/raidersArticle/:id',
      name: 'RaidersArticle',
      component: RaidersArticle
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/eindex',
      name: 'Eindex',
      component: Eindex
    },
    {
      path: '/oa',
      name: 'OArticle',
      component: OArticle
    },
    {
      path: '/compiler/:id',
      name: 'Compiler',
      component: Compiler
    },
    {
      path: '/raiders/:address',
      name: 'Raiders',
      component: Raiders
    },
    {
      path: '/re/:address',
      name: 'RE',
      component: RE
    },

  ]
})
