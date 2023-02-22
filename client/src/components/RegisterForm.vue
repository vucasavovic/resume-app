<template>
    <div  class="enter-form">

        <div>
            <h1>Register!</h1>
        </div>

        <form>
        <Input label="email" v-model="formData.email"/>
        <Input type="password" label="password" v-model="formData.password"/>
        <Input type="password" label="confirm" v-model="formData.confirm"/>
        
        <FormFeedback  ref="feedback" />

        <Button @click="submit" text="Submit"/>
            
        <p class="alternative">Already have an account? Go to <span @click="router.push('/enter/login')">Login</span>.</p>
        </form>

         
    </div>
  
</template>

<script setup>
import axios from 'axios'
import FormFeedback from '@/components/FormFeedback.vue' 
import Button from '@/components/Button.vue' 
import Input from '@/components/Input.vue' 
import { ref,reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

 const formData = reactive({
    email:'hugoboss@gmail.com',
    password:'12345',
    confirm:'12345'
 })

 
const feedback = ref(null);

const submit = function(){
    axios.post('/auth/register',formData).then((res)=>{
       
        if(res.data.status.error){
            feedback.value.warning(res.data.status.message);
        }else{
            feedback.value.dflt(res.data.status.message);
        }
        
    }).catch((err)=>{
        console.log(err)
    })
}
</script>

<style lang="scss" scoped>

</style>