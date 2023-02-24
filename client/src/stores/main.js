import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {Job,Education} from '../utils/definitions.js'


export const useMainStore = defineStore('main', () => {
  const userLogged = ref(false);
  const user = ref(null);

  const resume = ref({ 
    firstname:'Vuk',
    lastname:'Savovic',
    email:'',
    linkedin:'',
    profession:'',
    about:'',
    jobHistory:[new Job()],
    education:[new Education()],
    interests:'',
    summary:''
})
 

  return { userLogged,user,resume }
})

 
