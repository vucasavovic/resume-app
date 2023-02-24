

<template>
 <main class="template">
  <SideBar/>
  <section class="body">
    <RouterView />
  </section>
 </main>
</template>

<script setup>
  import SideBar from '@/components/SideBar.vue' 
</script>

<style lang="scss" scoped>
 .template{
  display: flex;
  min-height: 100%;
  width: 100%;
  align-items: stretch;
  overflow: hidden;
 
  >.body{
      flex: 1;
      overflow: auto;
      min-height: 100vh;

  }
 }
</style>
