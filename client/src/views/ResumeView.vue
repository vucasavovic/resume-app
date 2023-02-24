<template>
     <div class="view ">

        <h1 class="view-title">Edit</h1>

        <section class="resume-preview">
        
        <div class="group grid-2">
            <h3 class="title full-span">Personal info</h3>
        
            <Input label="firstname" v-model="store.resume.firstname"/>
            <Input label="lastname" v-model="store.resume.lastname"/>
            <Input label="email" v-model="store.resume.email"/>
            <Input label="linkedin" v-model="store.resume.linkedin"/>
            <Input  label="profession" v-model="store.resume.profession"/>
 
        </div>

        <div class="group">
            <h3 class="title">Intro</h3>
             <TextareaInput label="About you"  placeholder="Text here.." v-model="store.resume.about"/>
        </div>

        <div class="group">
            <div class="title full-span">
                <h3>Work history</h3>
                <span>Start from very first</span>
            </div>
            
            <IconButton v-if="store.resume.jobHistory.length<10"  @click="addJob" img="plus.svg" text="Add job" />
            <div v-for="(job,index) in  store.resume.jobHistory" :key="index" class="addable grid-2">
                <div  class="full-span title">
                    <p>Job {{store.resume.jobHistory.length - index }}</p>
                    <IconButton  img="exit.svg"/>
                </div>
                
                <Input :label="`job  role`" v-model="job.jobRole"/>
                <Input label="company name" v-model="job.companyName"/>
                <Input type="date" label="from" v-model="job.fromDate"/>
                <Input type="date" label="to" v-model="job.toDate"/>
                <TextareaInput class="full-span" label="job description"  placeholder="Text here.." v-model="job.description"/>
            </div>
        </div>

        <div class="group">
            <div class="title full-span">
                <h3>Education history</h3>
                <span>Start from very first</span>
            </div>
            
            <IconButton v-if="store.resume.education?.length<6 "  @click="addEducation" img="plus.svg" text="Add education" />
            <div v-for="(education,index) in  store.resume.education" :key="index" class="addable grid-2">
                <div  class="full-span title">
                    <p>Edu. {{store.resume.education.length - index }}</p>
                    <IconButton text="Remove" />
                </div>
               
                <Input label="institution" v-model="education.institution"/>
                <Input label="degree" v-model="education.degree"/>
                <Input type="date" label="from" v-model="education.fromDate"/>
                <Input type="date" label="to" v-model="education.toDate"/>
             </div>
        </div>

        <div class="group grid-2">
            <h3 class="title full-span">Interests and hobbies</h3>
            <Input label="interests" v-model="store.resume.interests"/>
            <TextareaInput class="full-span" label="summary"  placeholder="Text here.." v-model="store.resume.summary"/>
        </div>

        <Button @click="saveResume(store.resume.value)" text="Save resume"/>

        </section>

    </div>
</template>

<script setup>
import {Job,Education} from '@/utils/definitions.js'
import axios from 'axios';
import IconButton from '@/components/IconButton.vue' 
import Input from '@/components/Input.vue' 
import TextareaInput from '@/components/TextareaInput.vue' 
import Button from '@/components/Button.vue' 
import { ref,computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMainStore } from '../stores/main';
import router from '../router';
import { storeToRefs } from 'pinia';

const route =useRoute();
const store = useMainStore();
const{resume} = storeToRefs(store);
 
const editMode =ref(false)
editMode.value = route.params.mode === 'edit' ? true : false

 
const addJob = function(){
    if(resume.value.jobHistory.length<10){
        resume.value.jobHistory.unshift(new Job);
    }
}
const addEducation = function(){
    if(resume.value.education.length<6){
        resume.value.education.unshift(new Education);
    }
}

///SAVE CHANGES
const saveResume = async function( ){
  
    try {
        const resp = await axios.post('/user/resume/save',resume.value);
        if(resp.data.status.error){
            console.log(resp.data.status.message)
        }else{
            router.push('/dashboard');
        }
    } catch (error) {
        console.log(error)
    }
}
 
</script>

<style lang="scss" scoped>
 .view{
    background-color: $offwhite;
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
 }
 .resume-preview{
    
    margin: 0 auto;
    background-color: white;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    flex: 1;

    padding: 4rem;
    padding-bottom: 12vh;

    >:nth-child(n+2){
        margin-top: 4rem;
    }
    
} 

 

.group{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    >.title{
        font-size: 1.6rem;
        margin-bottom: 1.4rem;
         >span{
            font-size: 1rem;
         }
    }

    >.flex{
        display: flex;
        gap: 1rem;
        >*{flex: 1;}
    }
}

.grid-2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    >.full-span{
        grid-column: 1/-1;
    }
}

.addable{
    & .title{
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid $offwhite;
        margin-bottom: 1rem;
    }
    
    padding-bottom: 1rem;
}
 
</style>