<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import DestinationCard from "@/components/DestinationCard.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import AdCard from "@/components/AdCard.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    DestinationCard,
    Sidebar,
    AdCard,
  },
};
</script>

<template>
  <Header> </Header>

  <Navbar> </Navbar>

  <article class="row">
    <Sidebar> </Sidebar>

    <div id="home_div" class="col-6">
      <div class="home_titles">
        <h1>L&F WildRoutes HOME</h1>

        <h2>Vivi la tua avventura insieme a noi</h2>
      </div>

      <div>
        Il sito è destinato per gli amanti dei viaggi selvaggi, troverete
        proposte di ogni tipo: <br />
        dai ghiaggi dell'Islanda al caldo del deserto Marocchino.
      </div>

      <div>
        <DestinationCard></DestinationCard>
      </div>
    </div>

    <AdCard> </AdCard>

    <AdCard> </AdCard>
  </article>

  <Footer> </Footer>
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
