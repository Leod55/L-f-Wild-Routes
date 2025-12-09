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
