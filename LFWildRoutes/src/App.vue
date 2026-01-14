<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import AdsContainer from "@/components/AdsContainer.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    Sidebar,
    AdsContainer,
  },
};
</script>

<template>
  <Header></Header>
  <Navbar></Navbar>

  <div class="row">
    <Sidebar></Sidebar>
    <RouterView></RouterView>
    <AdsContainer></AdsContainer>
  </div>

  <Footer></Footer>
</template>

<style></style>
