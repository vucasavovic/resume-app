<template>
    <div v-if="text!=''" :class="['feedback',appearance]">
        <img v-if="appearance=='warning'" src="/images/attention.svg" alt="feedback warning icon">
        <img v-else-if="appearance=='success'" src="/images/success.svg" alt="feedback success icon">
        <img v-else src="/images/default.svg" alt="feedback default icon">
        <p>{{text}}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
 
const text = ref('');
const appearance = ref('default')

const warning = (text)=>{
    display('warning',text)
}
const dflt= (text)=>{
    display('default',text)
}
const success = (text)=>{
    display('success',text)
}

const display = (a ,t)=>{
appearance.value = a ;
text.value=t;
}


 defineExpose({
    warning,
    success,
    dflt
 })
</script>

<style lang="scss" scoped>
.feedback{
    display: flex;
    gap: 0.6rem;
   
    &.warning{
        color: red;
    }
    &.success{
        color: green;
    }
    &.default{
        color: rgb(52, 52, 172);
    }
}
</style>