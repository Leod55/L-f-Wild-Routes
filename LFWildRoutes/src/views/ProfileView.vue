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
      confermaPassword: "",
      maxPassword: 50,
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
        if (!this.confermaAggiornamento()) {
        alert("Devi rispettare la lunghezza dei campi!!");
        return;
      }

      if (this.nuovaPassword === this.vecchiaPassword) {
        alert("La nuova password deve essere diversa dalla vecchia!");
        return;
      }

      if (this.nuovaPassword !== this.confermaPassword) {
        alert("Le password non corrispondono!");
        return;
      }

      const result = await Api.aggiornaPassword(
        this.username,
        this.vecchiaPassword,
        this.nuovaPassword,
        this.confermaPassword
      );

      if (result.success) {
        alert("Password aggiornata con successo!");
        this.vecchiaPassword = "";
        this.nuovaPassword = "";
        this.confermaPassword = "";
        this.attivaForm(); 
      } else {
        alert(result.message || "Errore durante l'aggiornamento della password");
      }
    },
    
    confermaAggiornamento() {
      return (
        this.checkVecchiaPasswordLength() &&
        this.checkNuovaPasswordLength() &&
        this.checkConfermaPasswordLength()
      );
    },

    checkVecchiaPasswordLength() {
      return (
        this.vecchiaPassword.length > 0 &&
        this.vecchiaPassword.length <= this.maxPassword
      );
    },

    checkNuovaPasswordLength() {
      return (
        this.nuovaPassword.length > 0 &&
        this.nuovaPassword.length <= this.maxPassword
      );
    },

    checkConfermaPasswordLength() {
      return (
        this.confermaPassword.length > 0 &&
        this.confermaPassword.length <= this.maxPassword
      );
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
              <p class="lungezza_input">
                {{ vecchiaPassword.length }}/{{ maxPassword }} caratteri rimanenti
              </p>
              <label>Vecchia Password:</label>
              <input type="password" v-model="vecchiaPassword" />
            </section>

            <section>
              <p class="lungezza_input">
                {{ nuovaPassword.length }}/{{ maxPassword }} caratteri rimanenti
              </p>
              <label>Nuova Password:</label>
              <input type="password" v-model="nuovaPassword" />
            </section>

            <section>
              <p class="lungezza_input">
                {{ confermaPassword.length }}/{{ maxPassword }} caratteri rimanenti
              </p>
              <label>Conferma Nuova Password:</label>
              <input type="password" v-model="confermaPassword" />
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

.lungezza_input {
  font-size: 11px;
  color: red;
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
