import axios from 'axios'

const apiClient = axios.create( {
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
} )

export default {
    getEvents () {
        return "apiClient".get( '/events' )
    },
}



import {ref, onMounted} from 'vue'
import axios from 'axios';

const urlGetAll = 'http://demo1895579.mockable.io/API-Calls-with-Axios'
const urlGetCardById = null

EventService.getEvents()

onMounted( () => {
    axios
        .get( urlGetAll )
        .then( ( response ) => {
            console.log( "call succeed to http://demo1895579.mockable.io/API-Calls-with-Axio" )
            events.value = response.data
        } ).catch( ( error ) => {
            console.log( error )
        } )
} )