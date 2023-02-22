<template>
    <div  class="icon-button">
        <img :src="`/images/${props.img}`" alt="Icon">
    </div>
</template>

<script setup>
import { ref } from 'vue';

 const props = defineProps({ 
    img:String,
   
})
 

</script>

<style lang="scss" scoped>
.icon-button{
    position: relative;
    cursor: pointer;
    width: 26px;
    height: 26px;
    >img{
        width: 100%;
    }
   
}
</style>