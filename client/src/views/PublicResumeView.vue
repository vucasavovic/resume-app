<template>
    <div class="view ">

   
        <div class="resume-preview">
            <div v-if="!resume"  class="feedback">
                <h3 class="title">404!</h3>
                <p class="subtitle">Not found</p>
                <p>Resume hasn't been createrd yet or the URL is broken.</p>
            </div>
            <p v-else>{{resume.firstname }}</p>
            
        </div>
 
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const resume = ref(null);


const getResume = async function(){
    const resId = route.params.id
    if(!resId) return;
    try {
        const resp = await axios.get(`/user/resume/${resId}`)
        resume.value = resp.data.payload;
        if(resp.data.status.error){
            console.log(resp.data.status.message)
        }
    } catch (error) {
        
    }
}

getResume();


</script>

<style lang="scss" scoped>
 .view{
    background-color: $offwhite;
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
 }

.feedback{
    text-align: center;
    margin-top: 10vh;

    >.title{
        font-size: 4rem;
    }
    >.subtitle{
        font-size: 2rem;
    }
}
</style>