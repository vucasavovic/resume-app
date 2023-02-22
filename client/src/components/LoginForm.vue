<template>
    <div  class="enter-form">

        <div>
            <h1>Login!</h1>
        </div>

        <form>
        <Input label="email" v-model="formData.email"/>
        <Input type="password" label="password" v-model="formData.password"/>
        <Button text="Submit"/>
        <p class="alternative">Don't have account? Go to <span @click="router.push('/enter/register')">Register</span>.</p>
        </form>
      
    </div>
  
</template>

<script setup>
import Button from '@/components/Button.vue' 
import Input from '@/components/Input.vue' 
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

 const formData = ref({
    email:'',
    password:''
 })

</script>

<style lang="scss" scoped> 
</style>