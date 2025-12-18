<template>
  <div>
    <h2>Registrazione Nuovo Utente</h2>
    <form @submit.prevent="submitForm">
      <input v-model="nome" type="text" placeholder="Nome" required /><br />
      <input v-model="cognome" type="text" placeholder="Cognome" required /><br />
      <input v-model="email" type="email" placeholder="Email" required /><br />
      <input v-model="password" type="password" placeholder="Password" required /><br />
      <button type="submit">Registrati</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const nome = ref('');
const cognome = ref('');
const email = ref('');
const password = ref('');
const message = ref('');

async function submitForm() {
  console.log('submitForm chiamata');
  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome.value,
        cognome: cognome.value,
        email: email.value,
        password: password.value
      })
    });
    console.log('Risposta ricevuta:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Errore server:', errorData);
      message.value = errorData.message || 'Errore server';
      return;
    }

    const data = await response.json();
    message.value = data.message;

    nome.value = '';
    cognome.value = '';
    email.value = '';
    password.value = '';
  } catch (error) {
    console.error('Errore fetch:', error);
    message.value = 'Errore durante la registrazione.';
  }
}
</script>
