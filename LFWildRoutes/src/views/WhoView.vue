<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import GuideCard from '@/components/GuideCard.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Header,
    Navbar,
    Footer,
    GuideCard,
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

      <article id="who_article" class="col-6">

            <div> <h1> Noi di L&F WildRoutes </h1> </div>

            <div>
                  <GuideCard>
                  </GuideCard>
            </div>


            <div>
                  <GuideCard>
                  </GuideCard>
            </div>
            
      </article>

      <Sidebar>
      </Sidebar>

      <Footer>
      </Footer>
   
</template>
