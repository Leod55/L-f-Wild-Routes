<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import DestinationCard from '@/components/DestinationCard.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Header,
    Navbar,
    Footer,
    DestinationCard,
    Sidebar
  }
}
</script>

<template>

    <Header>
    </Header>

    <Navbar>
    </Navbar>

<article class="row">

  <Sidebar>
  </Sidebar>

  <div id="destinations_div" class="col-6">

    <div> <h1> Destinazioni disponibili </h1> </div>

      <div>
        <DestinationCard>
        </DestinationCard>

        <DestinationCard>
        </DestinationCard>

        <DestinationCard>
        </DestinationCard>

        <DestinationCard>
        </DestinationCard>
      </div>
      
      </div>

    <Sidebar>
    </Sidebar>

</article>

    <Footer>
    </Footer>

</template>

<style>

</style>