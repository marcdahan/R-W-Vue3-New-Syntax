import {createApp} from 'vue'
import {createPinia} from 'pinia'

//devtools connection
import devtools from '@vue/devtools'
if ( process.env.NODE_ENV !== 'production' ) {
  devtools.connect( 'localhost', '5173' )
}

//Vue app creation
import App from './App.vue'
import router from './router'
const app = createApp( App )
app.use( createPinia() )
app.use( router )
const mountedApp = app.mount( '#app' )

//litte export into index.html
const myVar = `John DOE`
export {myVar, mountedApp}
