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
    <h1 class="page-title">Noi di L&F WildRoutes</h1>

    <div v-for="utente in utenti" :key="utente.username" class="guide-container">
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

<style scoped>
.page-title {
  color: var(--primary);
  margin-bottom: 40px;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.guide-container {
  display: flex;
  justify-content: center;
}
</style>
