<template>
    <div class="nav-bar">
        <span>
            <img src="/images/logo.svg" alt="brand logo">
        </span>
        <span class="navigation">
            <IconButton @click="router.push('/dashboard')"   img="home.svg"/>
            <IconButton @click="router.push('/account')"   img="avatar.svg"/>
        </span>
        <span>
            <IconButton v-if="store.userLogged" @click ='logout' img="exit.svg"/>
        </span>
    </div>
</template>

<script setup>
 import IconButton from '@/components/IconButton.vue' 
import { useRouter } from 'vue-router';
import { useMainStore } from '../stores/main';


const router = useRouter();
const store = useMainStore();
const logout = function(){
    store.userLogged=false;
    sessionStorage.removeItem('token')
    router.push('/enter/login')
}
</script>

<style lang="scss" scoped>
.nav-bar{
    position: sticky;
    top: 0px;
    background-color: $mainColor;
    max-width: 90px;
    width: 100%;
    max-height: 100vh;
    padding: 2rem 1rem;
 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    >*{
        flex: 1;
    }
    >:last-child{
        display: flex;
        align-items: flex-end;
    }

    & .navigation{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }
}
</style>