<script>
import GuideCard from "@/components/GuideCard.vue";
import * as Api from "@/utils/apis.js";

export default {
  components: {
    GuideCard,
  },

  data() {
    return {
      utenti: [],
    };
  },

  methods: {
    async getUtenti() {
      const data = await Api.getUtenti();
      this.utenti = data;
    },
  },
  mounted() {
    this.getUtenti();
  },
};
</script>

<style></style>

<template>
  <div class="col-6 main_div">
    <h1>Noi di L&F WildRoutes</h1>

    <div v-for="utente in utenti" :key="utente.username">
      <GuideCard
        v-if="utente.ruolo === 'admin'"
        :username="utente.username"
        :nome="utente.nome"
        :cognome="utente.cognome"
        :email="utente.email"
        :citta="utente.citta"
        :data_nascita="utente.data_nascita"
        :foto_utente="utente.foto_utente"
        :bio="utente.bio"
      >
      </GuideCard>
    </div>
  </div>
</template>
 
<style>
</style>
