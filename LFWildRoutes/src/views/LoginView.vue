<script>
import { useSessionStore } from "@/stores/session";
import * as Auth from "@/utils/auth.js";
import * as Api from "@/utils/apis.js";

export default {
  data() {
    return {
      maxUsername: 50,
      maxPassword: 50,
      maxNome: 20,
      maxCognome: 20,
      maxEmail: 100,
      maxCitta: 50,
      maxDataNascita: 10,
      maxBio: 500,

      isLogin: true,

      loginData: {
        username: "",
        password: "",
      },

      registrationData: {
        username: "",
        password: "",
        confermaPassword: "",
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
      if (!this.confermaLogin()) {
        alert("Devi rispettare la lunghezza dei campi!!");
        return;
      }

      const data = await Auth.login(
        this.loginData.username,
        this.loginData.password
      );

      if (data.username) {
        useSessionStore().setUser(data.username);
        this.$router.push("/");
      } else {
        alert(data.message);
      }
    },

    async registration() {

      if (!this.confermaRegistration()) {
        alert("Devi rispettare la lunghezza dei campi!!");
        return;
      }


      if (!this.passwordMatch()) {
        alert("Le password non corrispondono!");
        return;
      }


      const utenteEsistente = await Auth.utenteEsistente(
        this.registrationData.username
      );
      if (utenteEsistente) {
        alert("L'utente esiste già, scegli un altro username!");
        return;
      }

      const data = await Api.addUtente(
        this.registrationData.username,
        this.registrationData.password,
        this.registrationData.confermaPassword,
        this.registrationData.nome,
        this.registrationData.cognome,
        this.registrationData.email,
        this.registrationData.citta,
        this.registrationData.data_nascita,
        this.registrationData.ruolo,
        this.registrationData.foto_utente,
        this.registrationData.bio
      );


      if (data.username) {
        this.isLogin = true;
        alert("Registrazione avvenuta, ora puoi effettuare il login!!");
      } else {
        alert("Registrazione fallita!!");
      }
    },

    passwordMatch() {
      return (
        this.registrationData.password ===
        this.registrationData.confermaPassword
      );
    },

    confermaRegistration() {
      return (
        this.checkUsernameLength() &&
        this.checkPasswordLength() &&
        this.checkNomeLength() &&
        this.checkCognomeLength() &&
        this.checkEmailLength() &&
        this.checkCittaLength() &&
        this.checkBioLength()
      );
    },

    confermaLogin() {
      return this.checkUsernameLengthL() && this.checkPasswordLengthL();
    },

    checkUsernameLengthL() {
      return (
        this.loginData.username.length > 0 &&
        this.loginData.username.length <= this.maxUsername
      );
    },

    checkPasswordLengthL() {
      return (
        this.loginData.password.length > 0 &&
        this.loginData.password.length <= this.maxPassword
      );
    },



    checkUsernameLength() {
      return (
        this.registrationData.username.length > 0 &&
        this.registrationData.username.length <= this.maxUsername
      );
    },

    checkPasswordLength() {
      return (
        this.registrationData.password.length > 0 &&
        this.registrationData.password.length <= this.maxPassword
      );
    },

    checkNomeLength() {
      return (
        this.registrationData.nome.length > 0 &&
        this.registrationData.nome.length <= this.maxNome
      );
    },

    checkCognomeLength() {
      return (
        this.registrationData.cognome.length > 0 &&
        this.registrationData.cognome.length <= this.maxCognome
      );
    },

    checkEmailLength() {
      return (
        this.registrationData.email.length > 0 &&
        this.registrationData.email.length <= this.maxEmail
      );
    },

    checkCittaLength() {
      return (
        this.registrationData.citta.length > 0 &&
        this.registrationData.citta.length <= this.maxCitta
      );
    },

    checkBioLength() {
      return this.registrationData.bio.length <= this.maxBio;
    },
  },
};
</script>

<template>
  <div class="col-6 main_div">
    <!-------------------------------------------------LOGIN------------------------------------------------->

    <div v-if="isLogin">
      <h1>Login</h1>

      <div>
        <form class="forms" action="login" method="POST">
          <div class="form_section">
            <p class="lunghezza_input">
              {{ loginData.username.length }}/{{ maxUsername }} caratteri
              rimanenti
            </p>
            <label for="username"> Username </label>
            <input
              type="text"
              id="username"
              name="username"
              v-model="loginData.username"
              :maxlength="maxUsername"
            />
          </div>

          <div class="form_section">
            <p class="lunghezza_input">
              {{ loginData.password.length }}/{{ maxPassword }} caratteri
              rimanenti
            </p>
            <label for="password"> Password </label>
            <input
              type="password"
              id="password"
              name="password"
              v-model="loginData.password"
              :maxlength="maxPassword"
            />
          </div>

          <div class="form_section">
            <input type="submit" value="Accedi" @click.stop.prevent="login()" />
          </div>

          <p>Non hai un account?</p>

          <button type="button" @click="isLogin = false">Registrati qui</button>
        </form>
      </div>
    </div>

    <!-------------------------------------------------REGISTRAZIONE------------------------------------------------->

    <div v-else>
      <h1>Registrazione</h1>

      <div>
        <form class="forms" @submit.prevent="registration">
          <div class="form_section">
            <p class="lunghezza_input">
              {{ registrationData.username.length }}/{{ maxUsername }} caratteri
              rimanenti
            </p>
            <label>Username:</label>
            <input type="text" v-model="registrationData.username" required :maxlength="maxUsername" />
          </div>

          <div class="form_section">
            <p class="lunghezza_input">
              {{ registrationData.password.length }}/{{ maxPassword }} caratteri
              rimanenti
            </p>
            <label>Password:</label>
            <input
              type="password"
              v-model="registrationData.password"
              required
              :maxlength="maxPassword"
            />
          </div>

          <div class="form_section">
            <p class="lunghezza_input">
              {{ registrationData.confermaPassword.length }}/{{ maxPassword }}
              caratteri rimanenti
            </p>
            <label>Conferma password:</label>
            <input
              type="password"
              v-model="registrationData.confermaPassword"
              required
              :maxlength="maxPassword"
            />
          </div>

          <div class="form_section">
            <p class="lunghezza_input">
              {{ registrationData.email.length }}/{{ maxEmail }} caratteri
              rimanenti
            </p>
            <label>Email:</label>
            <input type="email" v-model="registrationData.email" required :maxlength="maxEmail" />
          </div>

          <div class="form_section">
            <p class="lunghezza_input">
              {{ registrationData.nome.length }}/{{ maxNome }} caratteri
              rimanenti
            </p>
            <label>Nome:</label>
            <input type="text" v-model="registrationData.nome" required :maxlength="maxNome" />
          </div>

          <div class="form_section">
            <p class="lunghezza_input">
              {{ registrationData.cognome.length }}/{{ maxCognome }} caratteri
              rimanenti
            </p>
            <label>Cognome:</label>
            <input type="text" v-model="registrationData.cognome" required :maxlength="maxCognome" />
          </div>

          <div class="form_section">
            <p class="lunghezza_input">
              {{ registrationData.citta.length }}/{{ maxCitta }} caratteri
              rimanenti
            </p>
            <label>Città:</label>
            <input type="text" v-model="registrationData.citta" required :maxlength="maxCitta" />
          </div>

          <div class="form_section">
            <label for="data">Data di nascita:</label>
            <input
              type="date"
              id="data"
              name="data"
              v-model="registrationData.data_nascita"
              required
            />
          </div>

          <div class="form_section">
            <p class="lunghezza_input">
              {{ registrationData.bio.length }}/{{ maxBio }} caratteri rimanenti
            </p>
            <label>Bio:</label>
            <textarea v-model="registrationData.bio" :maxlength="maxBio"></textarea>
          </div>

          <div class="form_section">
            <input type="submit" value="Conferma Registrazione" />
          </div>

          <div class="form_section">
            <p>Hai già un account?</p>
            <button type="button" @click="isLogin = true">
              Torna al Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
</style>
