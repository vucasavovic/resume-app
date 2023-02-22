<template>
    <div class="dashboard">
           <div class="popup">
               <h3>Set your profile information!</h3>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum reiciendis modi nam autem placeat incidunt aliquam?</p>
                <Button text="Let's go"/>
            </div>
    </div>
</template>

<script setup>
 import Button from '@/components/Button.vue' 
</script>

<style lang="scss" scoped>
.dashboard{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup{
    max-width: 500px;
    background-color: rgb(231, 231, 231);
    padding: 3rem;
     
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>