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
  <div class="col-6 main_div">
    <h1>Destinazioni disponibili</h1>

    <div v-for="viaggio in viaggi" :key="viaggio.idv">
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
  </div>
</template>

<style></style>
