<template>
    <div  class="icon-button">
        <img v-if="props.img" :src="`/images/${props.img}`" alt="Icon">
        <p v-if="text">{{props.text}}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

 const props = defineProps({ 
    img:String,
    text:String
})
 
</script>

<style lang="scss" scoped>
.icon-button{
    position: relative;
    cursor: pointer;
    width: fit-content;
    height: 26px;
    white-space: nowrap;
    >img{
        width: 100%;
        max-width: 26px;
    }

    display: flex;
    align-items: center;
    gap: 0.4rem;
   
}
</style>