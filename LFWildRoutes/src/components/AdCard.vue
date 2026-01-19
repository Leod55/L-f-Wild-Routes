<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    descrizione: {
      type: String,
      required: true,
    },
  },
  methods: {
    getUrlImg() {
      return new URL(
        `../assets/img/Pubblicita/${this.img}`,
        import.meta.url
      ).href;
    },
  },
};
</script>

<template>
  <article class="section_article col-12">
    <div class="section_content row">
      <div class="col-6 img_section">
        <img :src="getUrlImg()" alt="ad_img" />
      </div>

      <div class="col-6 section_info">
        <section>
          <h4>Descrizione:</h4>
          <p>{{ descrizione }}</p>
        </section>
      </div>
    </div>
  </article>
</template>

<style>

</style>