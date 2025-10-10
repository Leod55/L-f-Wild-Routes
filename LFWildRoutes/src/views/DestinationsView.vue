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

<style>

</style>

<template>

    <Header>
    </Header>

    <Navbar>
    </Navbar>

    <Sidebar>
    </Sidebar>

    <article id="destinations_article" class="col-6">

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

    </article>

    <Sidebar>
    </Sidebar>

    <Footer>
    </Footer>

</template>
