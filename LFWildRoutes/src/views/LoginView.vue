<script>
import { useSessionStore } from "@/stores/session";
import * as Auth from "@/utils/auth.js";
import * as Api from "@/utils/apis.js";

export default {
  data() {
    return {
      isLogin: true,

      loginData: {
        username: "",
        password: "",
      },

      registrationData: {
        username: "",
        password: "",
        confirmPassword: "",
        nome: "",
        cognome: "",
        email: "",
        citta: "",
        data_nascita: "",
        ruolo: "",
        foto_utente: "",
        bio: "",
      },

      sessionStore: useSessionStore(),
    };
  },
  methods: {
    async login() {
      console.log("Sono dentro login()");
      const data = await Auth.login(
        this.loginData.username,
        this.loginData.password
      );

      if (data.userId) {
        useSessionStore().setUser(data.userId);
        this.$router.push("/");
      } else {
        alert("Login failed");
      }
    },

    async registration() {
      // Implement registration logic here
      const data = await Api.addUtente(
        this.registrationData.username,
        this.registrationData.password,
        this.registrationData.nome,
        this.registrationData.cognome,
        this.registrationData.email,
        this.registrationData.citta,
        this.registrationData.data_nascita,
        this.registrationData.ruolo,
        this.registrationData.foto_utente,
        this.registrationData.bio
      );

      if (data.userId) {
        this.sessionStore.setUser(data.userId);
        this.$router.push("/");
      } else {
        alert("Registration failed");
      }
    },
  },
};
</script>

<template>
  <div class="col-6 main_div">
    <div v-if="isLogin">
      <h1 id="login_title">Login</h1>

      <div>
        <form class="forms" action="login" method="POST">
          <div class="form_section">
            <label for="username"> Username </label>
            <input
              type="text"
              id="username"
              name="username"
              v-model="loginData.username"
            />
          </div>

          <div class="form_section">
            <label for="password"> Password </label> <br />
            <input
              type="password"
              id="password"
              name="password"
              v-model="loginData.password"
            />
          </div>

          <div class="form_section">
            <input type="submit" value="Accedi" @click.stop.prevent="login()" />
          </div>

          <p>Non hai un account?</p>
          <!-- Al click cambio la variabile a false -->
          <button @click="isLogin = false">Registrati qui</button>
        </form>

        <!--<form id="login_form" action="signup" method="POST"></form>-->
      </div>
    </div>

    <div v-else>
      <h1 id="registration_title">Registrazione</h1>

      <div>
        <form class="forms" @submit.prevent="registration">
          <div class="form_section">
            <label>Username:</label><br />
            <input type="text" v-model="registrationData.username" required />
          </div>

          <div class="form_section">
            <label>Password:</label><br />
            <input
              type="password"
              v-model="registrationData.password"
              required
            />
          </div>

          <div class="form_section">
            <label>Email:</label><br />
            <input type="email" v-model="registrationData.email" required />
          </div>

          <div class="form_section">
            <label>Nome:</label><br />
            <input type="text" v-model="registrationData.nome" />
          </div>

          <div class="form_section">
            <label>Cognome:</label><br />
            <input type="text" v-model="registrationData.cognome" />
          </div>

          <div class="form_section">
            <label>Città:</label><br />
            <input type="text" v-model="registrationData.citta" />
          </div>

          <div class="form_section">
            <label for="data">Data di nascita:</label><br />
            <input
              type="date"
              id="data"
              name="data"
              v-model="registrationData.data_nascita"
            />
          </div>

          <div class="form_section">
            <label>Bio:</label><br />
            <textarea v-model="registrationData.bio"></textarea>
          </div>

          <div class="form_section">
            <input type="submit" value="Conferma Registrazione" />
          </div>

          <div class="form_section">
            <p>Hai già un account?</p>
            <button @click="isLogin = true">Torna al Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


