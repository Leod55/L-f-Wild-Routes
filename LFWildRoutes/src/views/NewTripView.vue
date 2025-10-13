<script>
import Header from '@/components/Header.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Header,
    Navbar,
    Footer,
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

    <div id="newtrip_div" class="col-6">

        <div> <h1  id="newtrip_title"> Inserisci un nuovo viaggio </h1> </div>

        <form action="newtrip" method="POST">

            <div>
                <label for="destination"> Destinazione: </label> <br>
                <input type="text" id="destination" name="destination"> <br>
            </div>

            <hr>

            <div>
                <label for="description"> Descrizione: </label> <br>
                <textarea id="description" name="description" rows="4" cols="50"></textarea> <br>
            </div>
            

            <hr>

            <div>
                <label for="date"> Data di partenza: </label> <br>
                <input type="date" id="date_p" name="date_p"> <br>
            </div>

            <hr>

            <div>
                <label for="date"> Data di ritorno: </label> <br>
                <input type="date" id="date_r" name="date_r"> <br>
            </div>

            <hr>

            <div>
                <input type="submit" value="Inserisci viaggio">
            </div>

        </form>
    </div>

    <Sidebar>
    </Sidebar>

</article>

    <Footer>
    </Footer>
    
</template>


<style>
#newtrip_div{
    text-align: center;
}
</style>