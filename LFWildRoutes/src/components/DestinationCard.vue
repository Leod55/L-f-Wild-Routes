<script></script>

<template>
  <article class="section_article col-12">
    <h3 class="section_title">Grecia: 6 giorni di sogno</h3>

    <hr />

    <div class="section_content row">
      <div class="col-6 img_section">
        <img src="../assets/img/FotoGrecia2.jpg" alt="fotogrecia" />
      </div>

      <div class="col-6">
        <section>
          <h4>Date:</h4>

          <p>Dal 29 giugno 2026 al 4 luglio 2026</p>
        </section>

        <!--Aggiungere, oltre al link per la pagina who, anche direttamente il collegamento al punto con id giusto (GuideCard di Francesca)-->
        <section>
          <h4>Accompagnatore:</h4>

          <p><RouterLink to="/who#"> Francesca </RouterLink></p>
        </section>

        <section>
          <h4>Prezzo:</h4>

          <p>800€</p>
        </section>

        <section>
          <h4>Descrizione:</h4>

          <p>
            Scopri la Grecia come non l'hai mai vista: un viaggio di 6 giorni
            tra paesaggi mozzafiato, rovine antiche e acque cristalline. <br />
            Dimentica i resort: il nostro itinerario ti porta fuori rotta, tra
            trekking, snorkeling in baie nascoste e serate sotto le stelle in
            villaggi dove il tempo si è fermato.<br />
            Non è solo vivrai un viaggio indimenticabile, ma avrai anche
            l'occasione per uscire dalla tua zona di comfort e conoscere nuovi
            compagni di viaggio!
          </p>
        </section>

        <section>
          <h4>Extra:</h4>

          <ul id="extra_ul">
            <li>Volo A/R;</li>
            <li>Alloggi caratteristici</li>
            <li>Bagaglio da stiva</li>
            <li>Assicurazione sanitaria</li>
            <li>Spostamenti interni</li>
          </ul>
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
