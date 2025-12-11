<!-- src/components/LoginForm.vue -->
<template>
  <form class="login" @submit.prevent="handleSubmit">
    <input
      type="text"
      placeholder="Username"
      v-model="username"
    />

    <input
      type="password"
      placeholder="Password"
      v-model="password"
    />

    <button type="submit">Accedi</button>

    <!-- Mostra un messaggio quando l'utente clicca su "Accedi" -->
    <p v-if="submitted">
      Hai inserito: <strong>{{ username }}</strong> / <strong>{{ password }}</strong>
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
    }
  },

  methods: {
    handleSubmit() {
      this.submitted = true
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px;
  font-size: 1rem;
}

button {
  padding: 8px;
  background-color: #42b883;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

p {
  margin-top: 10px;
  color: #333;
}
</style>
