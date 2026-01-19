<script>
import AdCard from "./AdCard.vue";

export default {
  components: {
    AdCard,
  },
};
</script>

<template>
  <aside class="col-3">
    <AdCard 
      img="Pubblicita1.png" 
      descrizione="Scopri le meraviglie nascoste della natura con le nostre guide esperte." 
    />
    <AdCard 
      img="Pubblicita2.png" 
      descrizione="Attrezzatura tecnica per ogni tipo di escursione, ora in offerta." 
    />
    <AdCard 
      img="Pubblicita3.png" 
      descrizione="Unisciti alla nostra community per condividere le tue avventure." 
    />
  </aside>
</template>

<style>
</style>
