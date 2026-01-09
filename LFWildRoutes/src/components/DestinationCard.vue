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
    data_ritorno: {
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
      default: "defaultimgviaggi.jpg",
    },
  },
  methods: {
    getUrlImg() {
      return new URL(
        `../assets/img/viaggi/${this.foto_viaggio}`,
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
    <h3 class="section_title">{{ nome }}</h3>

    <hr />

    <div class="section_content row">
      <div class="col-6 img_section">
        <img :src="getUrlImg()" alt="img_viaggio" />
      </div>

      <div class="col-6 section_info">
        <section>
          <h4>Date:</h4>

          <p>Dal {{ formatDate(data_partenza) }} al {{ formatDate(data_ritorno) }}</p>
        </section>

        <section>
          <h4>Accompagnatore:</h4>

          <p>
            <RouterLink to="/who#"> {{ accompagnatore }} </RouterLink>
          </p>
        </section>

        <section>
          <h4>Prezzo:</h4>

          <p>{{ prezzo }}€</p>
        </section>

        <section>
          <h4>Descrizione:</h4>

          <p>
            {{ descrizione }}
          </p>
        </section>

        <section>
          <h4>Extra:</h4>

          {{ extra }}
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
