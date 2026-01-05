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
  <article class="section_article col-12 guide-card">
    <h3 class="section_title">{{ nome }} {{ cognome }}</h3>

    <hr class="divider" />

    <div class="div_content section_content row">
      <div class="col-6 img_section">
        <img :src="getUrlImg()" alt="img_utente" class="profile-img" />
      </div>

      <div class="col-6 info-section">
        <section class="info-item">
          <h4>Email:</h4>
          <p>{{ email }}</p>
        </section>

        <section class="info-item">
          <h4>Città:</h4>
          <p>{{ citta }}</p>
        </section>

        <section class="info-item">
          <h4>Data nascita:</h4>
          <p>{{ formatDate(data_nascita) }}</p>
        </section>

        <section class="info-item">
          <h4>Bio:</h4>
          <p>{{ bio }}</p>
        </section>
      </div>
    </div>
  </article>
</template>

<style scoped>
.guide-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 25px;
  margin-bottom: 30px !important; /* Force margin */
  transition: transform 0.3s ease;
}

.guide-card:hover {
  transform: translateY(-5px);
}

.section_title {
  color: var(--primary);
  font-family: var(--font-heading);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  font-size: 1.8rem;
}

.divider {
  border: 0;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--secondary), transparent);
  margin-bottom: 25px;
}

.img_section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-img {
  width: 200px;
  height: 280px; /* Rettangolare verticale */
  object-fit: cover;
  border-radius: 12px; /* Angoli leggermente smussati */
  border: 5px solid var(--secondary);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.info-section {
  padding-left: 20px;
}

.info-item {
  margin-bottom: 15px;
  border-bottom: 1px dashed #eee;
  padding-bottom: 10px;
}

.info-item:last-child {
  border-bottom: none;
}

.info-item h4 {
  color: var(--primary);
  margin: 0 0 5px 0;
  font-size: 1.1rem;
}

.info-item p {
  margin: 0;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

@media only screen and (max-width: 768px) {
  .info-section {
    padding-left: 0;
    margin-top: 20px;
    text-align: center;
  }
}
</style>
