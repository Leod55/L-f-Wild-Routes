<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    data_partenza: {
      type: Date,
      required: true,
    },
    data_arrivo: {
      type: Date,
      required: true,
    },
    accompagnatore: {
      type: String,
      required: true,
    },
    prezzo: {
      type: Number,
      required: true,
    },
    descrizione: {
      type: String,
      required: true,
    },
    extra: {
      type: String,
      required: false,
    },
    foto_viaggio: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <article class="section_article col-12">
    <h3 class="section_title">{{ nome }}</h3>
    <!--Grecia: 6 giorni da sogno-->>

    <hr />

    <div class="section_content row">
      <div class="col-6 img_section">
        <img src="../assets/img/viaggi/FotoGrecia2.jpg" alt="img_viaggio" />
        <!--da sostituire con :src="foto_viaggio" non so come però-->
      </div>

      <div class="col-6">
        <section>
          <h4>Date:</h4>

          <p>Dal {{ data_partenza }} al {{ data_arrivo }}</p>
          <!--da 29 giugno 2026 a 4 luglio 2026-->
        </section>

        <!--Aggiungere, oltre al link per la pagina who, anche direttamente il collegamento al punto con id giusto (GuideCard di Francesca)-->
        <section>
          <h4>Accompagnatore:</h4>

          <p>
            <RouterLink to="/who#"> {{ accompagnatore }} </RouterLink>
          </p>
          <!--Francesca-->
        </section>

        <section>
          <h4>Prezzo:</h4>

          <p>{{ prezzo }}€</p>
          <!--800€-->
        </section>

        <section>
          <h4>Descrizione:</h4>

          <p>
            {{ descrizione }}
          </p>

          <!--
          Scopri la Grecia come non l'hai mai vista: un viaggio di 6 giorni
            tra paesaggi mozzafiato, rovine antiche e acque cristalline. <br />
            Dimentica i resort: il nostro itinerario ti porta fuori rotta, tra
            trekking, snorkeling in baie nascoste e serate sotto le stelle in
            villaggi dove il tempo si è fermato.<br />
            Non è solo vivrai un viaggio indimenticabile, ma avrai anche
            l'occasione per uscire dalla tua zona di comfort e conoscere nuovi
            compagni di viaggio!
          -->
        </section>

        <section>
          <h4>Extra:</h4>

          {{ extra }}

          <!--
          <ul id="extra_ul">
            <li>Volo A/R;</li>
            <li>Alloggi caratteristici</li>
            <li>Bagaglio da stiva</li>
            <li>Assicurazione sanitaria</li>
            <li>Spostamenti interni</li>
          </ul>
          -->
        </section>
      </div>
    </div>
  </article>
</template>

<style>
#extra_ul {
  padding: 0 40px;
}
#extra_ul > li {
  list-style-type: none;
}
</style>
