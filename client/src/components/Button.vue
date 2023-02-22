<template>
     <button type="button" class="button">{{props.text}}</button>
</template>

<script setup>
const props = defineProps({
    text:String
})
</script>

<style lang="scss" scoped>
.button{
    cursor: pointer;
    padding: 1.1rem 2.8rem;
    color: white;
    background-color: black;  
    border-radius: 12px;
    width: fit-content;
    
}
</style>