<template>
    <div :class="['resume-icon',props.theme,{clickable:props.clickable}]"  >
        <p v-if="props.text">{{props.text}}</p>
        <img v-else :src="`/images/${props.img}`" alt="Icon">
    </div>
</template>

<script setup>
 const props = defineProps({ 
    text:String,
    img:String,
    theme:{default:'default',validator(val){
        return ['transparent','default'].includes(val)
    }},
    clickable:Boolean
})
</script>

<style lang="scss" scoped>
.resume-icon{
    height: 80px;
    width: 60px;
    background-color: black;
    color: white;
    padding: 0.3rem;

    &.transparent{
        background-color: transparent;
        border: 1px solid black;
    }
    &.clickable{
        cursor: pointer;
    }
}
</style>