<script>
import { useSessionStore } from "@/stores/session";
import * as Auth from "@/utils/auth.js";
import * as Api from "@/utils/apis.js";

export default {
  data() {
    return {
      user: {},
      username: "",

      sessionStore: useSessionStore(),
      formAtt: false,
      vecchiaPassword: "",
      nuovaPassword: "",
    };
  },
  methods: {
    async logout() {
      await Auth.logout();
      this.sessionStore.setUser(null);
      this.$router.push("/");
    },
    getUser() {
      this.username = this.sessionStore.getUser();
    },
    async getUserInfo() {
      if (this.username) {
        this.user = await Api.getUtenteByUsername(this.username);
      }
    },
    getUrlImg() {
      return new URL(
        `../assets/img/utenti/${this.user.foto_utente}`,
        import.meta.url
      );
    },

    attivaForm() {
      this.formAtt = !this.formAtt;
    },
    async aggiornaPassword() {
      this.passwordError = "";
      this.passwordSuccess = "";

      if (this.nuovaPassword === this.vecchiaPassword) {
        this.passwordError =
          "La nuova password deve essere diversa dalla vecchia.";
        return;
      }
      if (this.nuovaPassword.length < 5) {
        // Basic validation
        this.passwordError =
          "La nuova password è troppo corta (min 5 caratteri).";
        return;
      }

      const result = await Api.aggiornaPassword(
        this.username,
        this.vecchiaPassword,
        this.nuovaPassword
      );
      if (result.ok) {
        this.passwordSuccess = "Password aggiornata con successo!";
        this.vecchiaPassword = "";
        this.nuovaPassword = "";
        setTimeout(() => {
          this.formAtt = false;
        }, 2000);
      } else {
        this.passwordError = result.message;
      }
    },
  },

  mounted() {
    this.getUser();
    this.getUserInfo();
  },
};
</script>

<template>
  <div class="col-6 main_div">
    <h1 id="login_title">Profile</h1>

    <article class="section_article">
      <h3 class="section_title">Benvenuto: {{ username }}</h3>

      <hr />

      <div class="section_content" id="profile_content">
        <div class="img_section">
          <img :src="getUrlImg()" alt="img_utente" />
        </div>

        <div>
          <section>
            <h4>Nome:</h4>
            <p>{{ user.nome }}</p>
          </section>

          <section>
            <h4>Cognome:</h4>
            <p>{{ user.cognome }}</p>
          </section>

          <section>
            <h4>Email:</h4>
            <p>{{ user.email }}</p>
          </section>

          <section>
            <h4>Città:</h4>
            <p>{{ user.citta }}</p>
          </section>

          <section>
            <h4>Data nascita:</h4>
            <p>{{ user.data_nascita }}</p>
          </section>

          <section>
            <h4>Bio:</h4>
            <p>{{ user.bio }}</p>
          </section>

          <section>
            <button @click="attivaForm()">Cambia Password</button>
          </section>

          <div v-if="formAtt">
            <h3>Cambia Password</h3>

            <section>
              <label>Vecchia Password:</label>
              <input type="password" v-model="vecchiaPassword" />
            </section>

            <section>
              <label>Nuova Password:</label>
              <input type="password" v-model="nuovaPassword" />
            </section>

            <section>
              <button @click="aggiornaPassword()">Aggiorna</button>
            </section>
          </div>

          <button @click="logout()">Logout</button>
        </div>
      </div>
    </article>
  </div>
</template>

<style>
#profile_content {
  text-align: center;
}

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
