<template>
  <div class="container">
    <h1>Benvenuto in Vue</h1>
    <p>Qui sotto c’è un componente figlio:</p>

    <LoginForm />

    <RouterLink to="/register">
      <button>Registrati</button>
    </RouterLink>
  </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue'
</script>
