<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name:</label>
      <input id="name" type="text" v-model.trim="name" required />
    </div>

    <div>
      <label for="email">Email:</label>
      <input id="email" type="email" v-model.trim="email" required />
    </div>

    <div>
      <label for="subject">Subject:</label>
      <input id="subject" type="text" v-model.trim="subject" required />
    </div>

    <div>
      <label for="body">Message:</label>
      <textarea id="body" v-model.trim="body" required rows="5"></textarea>
    </div>

    <button type="submit" :disabled="loading">
      {{ loading ? 'Sending...' : 'Send' }}
    </button>

    <ul v-if="errors.length" class="error">
      <li v-for="(e, i) in errors" :key="i">{{ e }}</li>
    </ul>

    <div v-if="successMessage" class="success">{{ successMessage }}</div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      body: '',         
      loading: false,
      errors: [],
      successMessage: '',
    };
  },
  methods: {
    async submitForm() {
      this.errors = [];
      this.successMessage = '';
      this.loading = true;

      try {
        const payload = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          body: this.body, // match backend
        };

        const res = await axios.post('/api/send-email', {
            name: this.name,
            email: this.email,
            subject: this.subject,
            body: this.body,
        });

        this.successMessage = res.data.success || 'Message sent!';
        // Reset fields
        this.name = '';
        this.email = '';
        this.subject = '';
        this.body = '';
      } catch (err) {
        // Handle Laravel validation errors (422)
        if (err.response && err.response.status === 422 && err.response.data.errors) {
          this.errors = Object.values(err.response.data.errors).flat();
        } else {
          const fallback = err.response?.data?.message || 'An error occurred while sending the email.';
          this.errors = [fallback];
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.error { color: red; margin-top: .5rem; }
.success { color: green; margin-top: .5rem; }
label { display:block; margin-top: .75rem; font-weight: 600; }
input, textarea { width: 100%; padding: .5rem; margin-top: .25rem; }
button { margin-top: 1rem; padding: .5rem 1rem; }
</style>
