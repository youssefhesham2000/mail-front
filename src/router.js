import Vue from 'vue'
import Router from 'vue-router'
import email from './components/email'
import compose from './components/compose'

import table from './components/table'
import HelloWorld from './components/HelloWorld'
import Contacts from './components/Contacts'
import EmailModification from'./components/EmailModification'
import folderManipulation from './components/folderManipulation'
import file from './components/file'
import mainPage from './components/mainPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

   {
      path: '/:id/table/:id/:userfolder',
      name: 'table',
      component: table,
      props:true
    },
       {
      path: '/try',
      name: 'HelloWorld',
      component: HelloWorld
    },
        {
      path: '/:id/compose',
      name: 'compose',
      component: compose,
            props:true

    },
     {
      path: '/:id/email/:selectedEmail',
      name: 'email',
      component: email,
      props:true
    },
            {
      path: '/:id/contacts',
      name: 'Contacts',
      component: Contacts,
     props:true

    },
               {
      path: '/:id/EmailModification',
      name: 'EmailModification',
      component: EmailModification,
      props:true

    },
       {
      path: '/:x/folders/:id',
      name: 'folderManipulation',
      component: folderManipulation,
      props:true
    },
              {
      path: '/:id/file',
      name: 'file',
      component: file,
      props:true

    },
                {
      path: 'http://localhost:8081//home/:id',
      name: 'mainPage',
      component: mainPage,
      props:true
    },
  ]
})