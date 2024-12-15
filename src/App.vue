<!-- src/App.vue -->
<template>
  <div id="app">
    <HeaderPage />
    <router-view /> <!-- This will display the component for the current route -->
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  components: {
    HeaderPage,
    FooterPage,
  },
};
</script>
