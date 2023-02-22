<template>
    <div class="input">
        <label for="">{{props.label}}</label>
        <input  :type="props.type" :placeholder="props.placeholder" :value="props.modelValue" @input="handleInput($event.target.value)">
        
    </div>
</template>

<script setup>
   
  const props = defineProps({ 
    label:String,
    type:{
      default:'text',
      validator(val){
        return ['text','number','password','date'].includes(val)
      }
    },
    placeholder:String,
    modelValue:[String,Number]
 })
const emit = defineEmits(['update:modelValue'])

 const handleInput = (val)=>{
    emit('update:modelValue',val)
 }
</script>

<style lang="scss" scoped>


</style>