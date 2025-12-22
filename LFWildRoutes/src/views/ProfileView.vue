<script>
import { useSessionStore } from "@/stores/session";
import * as Auth from "@/utils/auth.js";
import * as Api from "@/utils/apis.js";
import { routeLocationKey } from "vue-router";

export default {
  data() {
    return {
      user: {},
      username: "",

      sessionStore: useSessionStore(),
      passwordFormVisible: false,
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
        `../assets/img/utenti/${this.foto_utente}`,
        import.meta.url
      );
    },

    togglePasswordForm() {
      this.passwordFormVisible = !this.passwordFormVisible;
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
          this.passwordFormVisible = false;
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
            <button @click="togglePasswordForm()">Cambia Password</button>
          </section>

          <div v-if="passwordFormVisible">
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
.section_article {
  margin: 15px auto;
  margin-bottom: 80px;
  padding: 25px;
  box-shadow: 0 2px 10px 0;
  border-radius: 20px;
}

.section_article a {
  color: var(--primary);
}

.section_article a:hover {
  font-weight: bold;
  font-size: 16px;
  color: var(--primary);
}

.section_title {
  font-size: 25px;
  color: var(--quartiary);
  text-align: center;
}

.section_content {
  font-size: 15px;
  color: var(--black);
}

.img_section {
  margin: 60px 0;
  padding: 15px;
}

.img_section img {
  width: 100%;
  height: auto;
}

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

.section_content button {
  background: var(--secondary);
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 15px;

  width: 35%;
}

.section_content button:hover {
  background-color: var(--black); /* verde di prima */
  box-shadow: 10px 10px 40px var(--black);

  color: var(--secondary);

  padding: 15px 40px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  width: 35%;
}
</style>
