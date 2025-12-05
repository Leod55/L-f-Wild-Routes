<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    cognome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    citta: {
      type: String,
      required: true,
    },
    data_nascita: {
      type: Date,
      required: true,
    },
    foto_utente: {
      type: String,
      default: "defaultimg.jpg",
    },
  },
  methods: {
    getUrlImg() {
      return new URL(
        `../assets/img/utenti/${this.foto_utente}`,
        import.meta.url
      );
    },
  },
};
</script>

<template>
  <article class="section_article col-12">
    <h3 class="section_title">{{ username }}</h3>

    <hr />

    <div class="section_content row">
      <div class="col-6 img_section">
        <img :src="getUrlImg()" alt="img_utente" />
      </div>

      <div class="col-6">
        <section>
          <h4>Nome:</h4>
          <p>{{ nome }}</p>
        </section>

        <section>
          <h4>Cognome:</h4>
          <p>{{ cognome }}</p>
        </section>

        <section>
          <h4>Email:</h4>
          <p>{{ email }}</p>
        </section>

        <section>
          <h4>Città:</h4>
          <p>{{ citta }}</p>
        </section>

        <section>
          <h4>Data nascita:</h4>
          <p>{{ data_nascita }}</p>
        </section>
      </div>
    </div>
  </article>
</template>

<style>
a:link {
  text-decoration: none;
  font-size: 15px;
}

a:hover {
  font-weight: bold;
  font-size: 16px;
  color: var(--tertiary);
}
</style>
