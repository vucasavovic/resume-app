<template>
    <div class="view ">

      <h1 class="view-title">Dashboard</h1>

      <div v-if="store.resume" class="resume-thumbnail">
        <h3>Your resume</h3>
        <div class="options">
         <IconButton  @click.prevent="router.push('/resume/edit')" text="Edit" img="edit.svg"/>
         <IconButton v-if="resumeId" @click.prevent="router.push(`/resume/public/${resumeId}`)" text="Public view" img="globe.svg"/>
         <IconButton text="Copy public url" />
        </div>
      </div>
 
      
      
    </div>
</template>

<script setup>
import axios from 'axios';
import ResumePaperIcon from '@/components/ResumePaperIcon.vue' 
import IconButton from '@/components/IconButton.vue' 
import Button from '@/components/Button.vue' 
import { useMainStore } from '../stores/main';
import { useRouter } from 'vue-router';
import { onMounted, ref, computed } from 'vue';

const store = useMainStore();
const router = useRouter();
 
const resumeId = computed(()=>{
    return store.resume.id
})

const getResumeData = async ()=>{
    try {
        const resp  = await  axios.get('/user/resume')
        if(resp.data.payload){
            console.log('writing new resume')
            store.resume = resp.data.payload
        }
    } catch (error) {
        console.log(error)
    }
} 

getResumeData();

 

</script>



<style lang="scss" scoped>
.view{
    background-color: $offwhite;
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
     
}
 

.resume-thumbnail{
 
    padding: 3rem;
    background-color: white;
    width: 240px;
    height: 320px;

    >.options{
        margin-top: 2rem;
    }
}
 
</style>