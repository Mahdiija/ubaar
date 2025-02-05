<template>
    <div class="main-layout">
      <Navbar />
  
      <main>
        <router-view />
      </main>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue'
  
  export default {
    name: 'MainLayout',
    components: {
      Navbar
    }
  }
  </script>
  
  <style scoped lang="scss">
  .main-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
   background-color: rgb(240, 240, 240);
    
  position: relative;
  }
  </style>