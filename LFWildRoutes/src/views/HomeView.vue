<script>
import DestinationCard from "@/components/DestinationCard.vue";

export default {
  components: {
    DestinationCard,
  },
};
</script>

<template>
  <div class="col-6 main_div">
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
      <DestinationCard></DestinationCard>
    </div>
  </div>
</template>

<style>
.home_titles {
  text-align: center;
  margin: 20px;
}
</style>
