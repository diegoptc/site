const routerBase = process.env.DEPLOY_ENV == 'GH_PAGES' ? {
  router: {
    base: 'https://diegodias.dev/'
  }
} : {}

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  routerBase,

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  head: {
    title: 'Diego Dias',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './assets/semantic/semantic.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/firebase.js',
    './assets/jquery-3.4.1.min.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
