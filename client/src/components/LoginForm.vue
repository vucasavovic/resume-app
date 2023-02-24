<template>
    <div  class="enter-form">

        <div>
            <h1>Login!</h1>
        </div>

        <form>
        <Input label="email" v-model="formData.email"/>
        <Input type="password" label="password" v-model="formData.password"/>

        <FormFeedback  ref="feedback" />

        <Button @click="submit" text="Submit"/>
        <p class="alternative">Don't have account? Go to <span @click="router.push('/enter/register')">Register</span>.</p>
        </form>
      
    </div>
  
</template>

<script setup>
import axios from 'axios';
 import FormFeedback from '@/components/FormFeedback.vue' 
import Button from '@/components/Button.vue' 
import Input from '@/components/Input.vue' 
import { ref,reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from '@/stores/main'

const store = useMainStore();
const router = useRouter();

 const formData = reactive({
    email:'hugoboss@gmail.com',
    password:'12345'
 })

  
const feedback = ref(null);

 const submit = function(){
    axios.post('/auth/login',formData).then((res)=>{
        if(res.data.status.error){
           
            feedback.value.warning(res.data.status.message);
        }else{
            const payload= res.data.payload;
            sessionStorage.setItem('token',payload.token)
            axios.defaults.headers.common['Authorization'] = payload.token;
            store.userLogged = true;
            store.user = payload.user;
            router.push('/dashboard')
        }
    }).catch((err)=>{
        console.log(err)
    })
}
</script>

<style lang="scss" scoped> 
</style>