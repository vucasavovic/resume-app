<template>
  <div class="enter-view">
    <RegisterForm v-if="mode=='register'"/>
    <LoginForm v-else />
 
  </div>
</template>

<script setup>
import RegisterForm from '@/components/RegisterForm.vue' 
import LoginForm from '@/components/LoginForm.vue' 
import { ref,computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'


const route = useRoute();
 
const mode = computed(()=>{
  return route.params.mode
})


 
</script>

<style lang="scss" scoped>
.enter-view{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
}
</style>
