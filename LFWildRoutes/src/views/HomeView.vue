<script>
import DestinationCard from "@/components/DestinationCard.vue";
import * as Api from "@/utils/apis.js";

export default {
  components: {
    DestinationCard,
  },
  data() {
    return {
      viaggio: null,
    };
  },
  methods: {
    async getViaggioById() {
      const data = await Api.getViaggioById(1);
      this.viaggio = data[0];
    },
  },
  mounted() {
    this.getViaggioById();
  },
};
</script>

<template>
  <article class="col-6 main_div">
    <div class="home_frame">
      <div class="home_titles">
        <h1>L&F WildRoutes HOME</h1>
        <h3>Vivi la tua avventura insieme a noi</h3>
      </div>

      <p>
        Il sito è destinato per gli amanti dei viaggi selvaggi, troverete proposte
        di ogni tipo: <br />
        dai ghiaggi dell'Islanda al caldo del deserto Marocchino.
      </p>
    </div>
    <div v-if="viaggio">
      <DestinationCard
        :nome="viaggio.nome"
        :data_partenza="viaggio.data_partenza"
        :data_ritorno="viaggio.data_ritorno"
        :accompagnatore="viaggio.accompagnatore"
        :prezzo="viaggio.prezzo"
        :descrizione="viaggio.descrizione"
        :extra="viaggio.extra"
        :foto_viaggio="viaggio.foto_viaggio"
      >
      </DestinationCard>
    </div>
  </article>
</template>

<style>

.home_titles {
  text-align: center;
  margin: 20px;
}

.home_frame {
  border: 4px solid var(--secondary);
  border-radius: 15px;
  padding: 30px;
  margin: -20px 0 20px 0; /* Margine negativo per compensare main_div */
  background-color: var(--white);
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  text-align: center;
}

.home_frame p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--black);
  margin: 0;
}
</style>
