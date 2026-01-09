<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import AdCard from "@/components/AdCard.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    Sidebar,
    AdCard,
  },
};
</script>

<template>
  <Header></Header>
  <Navbar></Navbar>

  <div class="row">
    <Sidebar></Sidebar>
    <RouterView></RouterView>
    <AdCard></AdCard>
  </div>

  <Footer></Footer>
</template>

<style></style>
