<template>
    <div class="nav-bar">
        <span>
            <img src="/images/logo.svg" alt="brand logo">
        </span>
        <span></span>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.nav-bar{
    background-color: black;
    max-width: 120px;
    width: 100%;
    padding: 2rem 1rem;
 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border-radius: 1rem;
    >*{
        flex: 1;
    }
}
</style>