<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";
import AdBar from "@/components/AdBar.vue";

export default {
  components: {
    Header,
    Navbar,
    Footer,
    Sidebar,
    AdBar,
  },
};
</script>

<template>
  <Header></Header>
  <Navbar></Navbar>

  <div class="row">
    <Sidebar></Sidebar>
    <RouterView></RouterView>
    <AdBar></AdBar>
  </div>

  <Footer></Footer>
</template>

<style></style>
