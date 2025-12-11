//Importa una funzione chiamata createApp dal pacchetto vue
//ue è la libreria Vue installata nel tuo progetto (nelle node_modules)
//createApp è una funzione fornita da Vue
//La userai per creare l’app Vue
import { createApp } from 'vue'

//Importa il componente principale della tua applicazione, cioè App.vue
//App.vue è il root component, la base da cui parte tutta l'app.
//Vue deve sapere qual è il primo componente da visualizzare.
//import App lo rende disponibile nello script main.js, così puoi usarlo dentro createApp(App)
import App from './App.vue'
//Importa il router configurato in src/router/index.js
//Il router gestisce la navigazione tra le pagine della tua applicazione
//import router lo rende disponibile nello script main.js, così puoi usarlo dentro createApp(App)
//permette di definire le rotte e i componenti associati a ciascuna rotta
//In questo modo, quando l'utente naviga a una certa rotta, il componente corretto viene visualizzato
//Senza questa importazione, l'app non saprebbe come gestire la navigazione tra le pagine
//e non funzionerebbero i link definiti nel router
import router from './router'

//createApp() inizializza una nuova applicazione Vue
//La monta inserisce l'HTML del template di App.vue dentro <div id="app"></div> in index.html.
createApp(App)
  .use(router)
  .mount('#app')
