<script>
import DestinationCard from "@/components/DestinationCard.vue";

export default {
  components: {
    DestinationCard,
  },
};
</script>

<template>
  <div id="destinations_div" class="col-6">
    <div><h1>Destinazioni disponibili</h1></div>

    <div>
      <DestinationCard> </DestinationCard>

      <DestinationCard> </DestinationCard>

      <DestinationCard> </DestinationCard>

      <DestinationCard> </DestinationCard>
    </div>
  </div>
</template>

<style></style>
