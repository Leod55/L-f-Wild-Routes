<script>
import DestinationCard from "@/components/DestinationCard.vue";

export default {
  components: {
    DestinationCard,
  },
};
</script>

<template>
  <div id="home_div" class="col-6">
    <div class="home_titles">
      <h1>L&F WildRoutes HOME</h1>

      <h2>Vivi la tua avventura insieme a noi</h2>
    </div>

    <div>
      Il sito è destinato per gli amanti dei viaggi selvaggi, troverete proposte
      di ogni tipo: <br />
      dai ghiaggi dell'Islanda al caldo del deserto Marocchino.
    </div>

    <div>
      <DestinationCard></DestinationCard>
    </div>
  </div>
</template>

<style>
#home_div {
  text-align: center;
}

.home_titles {
  text-align: center;
  margin: 20px;
}
</style>
