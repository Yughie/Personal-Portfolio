<template>
  <main class="container">
    <ContactForm />
  </main>
</template>

<script>
import ContactForm from './components/ContactForm.vue';

export default {
  name: 'App',
  components: { ContactForm },
};
</script>

<style scoped>
.container { max-width: 640px; margin: 2rem auto; padding: 1rem; }
</style>
