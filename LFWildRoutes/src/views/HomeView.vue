<script>
import DestinationCard from "@/components/DestinationCard.vue";
import * as Api from "@/utils/apis.js";

export default {
  components: {
    DestinationCard,
  },
  data() {
    return {
      viaggi: [],
    };
  },
  methods: {
    async getViaggi() {
      const data = await Api.getViaggi();
      this.viaggi = data;
    },
  },
  mounted() {
    this.getViaggi();
  },
};
</script>

<template>
  <article v-for="viaggio in viaggi" :key="viaggi.idv" class="col-6 main_div">
    <div class="home_titles">
      <h1>L&F WildRoutes HOME</h1>

      <h3>Vivi la tua avventura insieme a noi</h3>
    </div>

    <p>
      Il sito è destinato per gli amanti dei viaggi selvaggi, troverete proposte
      di ogni tipo: <br />
      dai ghiaggi dell'Islanda al caldo del deserto Marocchino.
    </p>
    <div>
      <DestinationCard
        :nome="viaggio.nome"
        :data_partenza="viaggio.data_partenza"
        :data_arrivo="viaggio.data_arrivo"
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
</style>
