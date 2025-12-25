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
      const data = await Auth.login(
        this.loginData.username,
        this.loginData.password
      );

      if (data.username) {
        useSessionStore().setUser(data.username);
        this.$router.push("/");
      } else {
        alert("Login fallito");
      }
    },

    async registration() {
      //mi assicuro che l'utente si registri solo se i campi rispettano le lunghezze massime
      if (!this.confermaRegistration()) {
        alert("Devi rispettare la lunghezza dei campi!!");
        return;
      }

      if (!this.passwordMatch()) {
        alert("Le password non corrispondono!");
        return;
      }

      //controllo se l'utente esiste già
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
        this.sessionStore.setUser(data.username);
        this.$router.push("/");
        alert("Registrazione avvenuta!!");
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
        this.checkDataNascitaLength() &&
        this.checkBioLength() &&
        this.passwordMatch()
      );
    },

    //-----------------------------------FUNZIONI PER I CONTROLLI SULLA LUNGEZZA DEGLI INPUT-------------------------------------------

    checkUsernameLength() {
      if (this.registrationData.username.length > this.maxUsername) {
        this.registrationData.username =
          this.registrationData.username.substring(0, this.maxUsername);
      }
      return (
        this.registrationData.username.length > 0 &&
        this.registrationData.username.length <= this.maxUsername
      );
    },

    checkPasswordLength() {
      if (this.registrationData.password.length > this.maxPassword) {
        this.registrationData.password =
          this.registrationData.password.substring(0, this.maxPassword);
      }
      return (
        this.registrationData.password.length > 0 &&
        this.registrationData.password.length <= this.maxPassword
      );
    },

    checkNomeLength() {
      if (this.registrationData.nome.length > this.maxNome) {
        this.registrationData.nome = this.registrationData.nome.substring(
          0,
          this.maxNome
        );
      }
      return (
        this.registrationData.nome.length > 0 &&
        this.registrationData.nome.length <= this.maxNome
      );
    },

    checkCognomeLength() {
      if (this.registrationData.cognome.length > this.maxCognome) {
        this.registrationData.cognome = this.registrationData.cognome.substring(
          0,
          this.maxCognome
        );
      }
      return (
        this.registrationData.cognome.length > 0 &&
        this.registrationData.cognome.length <= this.maxCognome
      );
    },

    checkEmailLength() {
      if (this.registrationData.email.length > this.maxEmail) {
        this.registrationData.email = this.registrationData.email.substring(
          0,
          this.maxEmail
        );
      }
      return (
        this.registrationData.email.length > 0 &&
        this.registrationData.email.length <= this.maxEmail
      );
    },

    checkCittaLength() {
      if (this.registrationData.citta.length > this.maxCitta) {
        this.registrationData.citta = this.registrationData.citta.substring(
          0,
          this.maxCitta
        );
      }
      return (
        this.registrationData.citta.length > 0 &&
        this.registrationData.citta.length <= this.maxCitta
      );
    },

    checkDataNascitaLength() {
      if (this.registrationData.data_nascita.length > this.maxDataNascita) {
        this.registrationData.data_nascita =
          this.registrationData.data_nascita.substring(0, this.maxDataNascita);
      }
      return (
        this.registrationData.data_nascita.length > 0 &&
        this.registrationData.data_nascita.length <= this.maxDataNascita
      );
    },

    checkBioLength() {
      if (this.registrationData.bio.length > this.maxBio) {
        this.registrationData.bio = this.registrationData.bio.substring(
          0,
          this.maxBio
        );
      }
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
            <p class="lungezza_input">
              {{ registrationData.username.length }}/{{ maxUsername }} caratteri
              rimanenti
            </p>
            <label>Username:</label><br />
            <input type="text" v-model="registrationData.username" required />
          </div>

          <div class="form_section">
            <p class="lungezza_input">
              {{ registrationData.password.length }}/{{ maxPassword }} caratteri
              rimanenti
            </p>
            <label>Password:</label><br />
            <input
              type="password"
              v-model="registrationData.password"
              required
            />
          </div>

          <div class="form_section">
            <p class="lungezza_input">
              {{ registrationData.confermaPassword.length }}/{{ maxPassword }}
              caratteri rimanenti
            </p>
            <label>Conferma password:</label><br />
            <input
              type="password"
              v-model="registrationData.confermaPassword"
              required
            />
          </div>

          <div class="form_section">
            <p class="lungezza_input">
              {{ registrationData.email.length }}/{{ maxEmail }} caratteri
              rimanenti
            </p>
            <label>Email:</label><br />
            <input type="email" v-model="registrationData.email" required />
          </div>

          <div class="form_section">
            <p class="lungezza_input">
              {{ registrationData.nome.length }}/{{ maxNome }} caratteri
              rimanenti
            </p>
            <label>Nome:</label><br />
            <input type="text" v-model="registrationData.nome" required />
          </div>

          <div class="form_section">
            <p class="lungezza_input">
              {{ registrationData.cognome.length }}/{{ maxCognome }} caratteri
              rimanenti
            </p>
            <label>Cognome:</label><br />
            <input type="text" v-model="registrationData.cognome" required />
          </div>

          <div class="form_section">
            <p class="lungezza_input">
              {{ registrationData.citta.length }}/{{ maxCitta }} caratteri
              rimanenti
            </p>
            <label>Città:</label><br />
            <input type="text" v-model="registrationData.citta" required />
          </div>

          <div class="form_section">
            <p class="lungezza_input">
              {{ registrationData.data_nascita.length }}/{{ maxDataNascita }}
              caratteri rimanenti
            </p>
            <label for="data">Data di nascita:</label><br />
            <input
              type="date"
              id="data"
              name="data"
              v-model="registrationData.data_nascita"
              required
            />
          </div>

          <div class="form_section">
            <p class="lungezza_input">
              {{ registrationData.bio.length }}/{{ maxBio }} caratteri rimanenti
            </p>
            <label>Bio:</label><br />
            <textarea v-model="registrationData.bio"></textarea>
          </div>

          <div class="form_section">
            <input type="submit" value="Conferma Registrazione" />
          </div>

          <div class="form_section">
            <p>Hai già un account?</p>
            <button type="button" @click="isLogin = true">Torna al Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.lungezza_input {
  font-size: 11px;
  color: red;
}
</style>
