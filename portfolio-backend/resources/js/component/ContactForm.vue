<template>
    <form @submit.prevent="submitForm">
        <div>
            <label for="name">Name:</label>
            <input type="text" v-model="name" required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" v-model="email" required />
        </div>
        <div>
            <label for="subject">Subject:</label>
            <input type="text" v-model="subject" required />
        </div>
        <div>
            <label for="message">Message:</label>
            <textarea v-model="message" required></textarea>
        </div>
        <button type="submit">Send</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            subject: "",
            message: "",
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            console.log(
                "Form submitted:",
                this.name,
                this.email,
                this.subject,
                this.message
            );
        },
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>
