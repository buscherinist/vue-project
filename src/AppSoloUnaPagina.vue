<!-- È un Single File Component (SFC)-->
<!-- ovvero un file .vue composto da tre sezioni: -->

<!-- <template> → l’interfaccia (HTML reattivo) -->
<template>
  <div class="container">
  <h1>Benvenuto in Vue</h1>
  <p>Qui sotto c’è un componente figlio:</p>

<!-- Uso del componente LoginForm -->
    <LoginForm />
  </div>
</template>

<!-- <script> → la logica del componente (dati, funzioni, stato -->
 <!-- se si usa setup Import diretto del componente, nessun export default (non serve!) -->
<script setup>
import LoginForm from './components/LoginForm.vue'
</script>

<!-- <style> → lo stile CSS del componente (scopi isolati se usi scoped
ovvero vale solo per questo componente, non per tutta l’app)
  -->
<style scoped>
.container {
  max-width: 500px;
  margin: 40px auto;
  font-family: sans-serif;
}
</style>