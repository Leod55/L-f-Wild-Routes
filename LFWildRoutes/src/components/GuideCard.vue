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
      type: [Date, String],
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    foto_utente: {
      type: String,
      default: "defaultimgutenti.jpg",
    },
  },
  methods: {
    getUrlImg() {
      return new URL(
        `../assets/img/guide/${this.foto_utente}`,
        import.meta.url
      );
    },
    formatDate(date) {
      if (!date) return "";
      const d = new Date(date);
      return d.toLocaleDateString('it-IT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },
  },
};
</script>

<template>
  <article class="section_article col-12">
    <h3 class="section_title">{{ nome }} {{ cognome }}</h3>

    <hr class="divider" />

    <div class="section_content row">
      <div class="col-6 img_section">
        <img :src="getUrlImg()" alt="img_utente" class="profile-img" />
      </div>

      <div class="col-6 section_info">
        <section>
          <h4>Email:</h4>
          <p>{{ email }}</p>
        </section>

        <section>
          <h4>Città:</h4>
          <p>{{ citta }}</p>
        </section>

        <section >
          <h4>Data nascita:</h4>
          <p>{{ formatDate(data_nascita) }}</p>
        </section>

        <section >
          <h4>Bio:</h4>
          <p>{{ bio }}</p>
        </section>
      </div>
    </div>
  </article>
</template>

<style >

</style>
