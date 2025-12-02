<script>
import { useSessionStore } from "@/stores/session";
import * as Auth from "@/utils/auth.js";

export default {
  data() {
    return {
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
  },
  mounted() {
    this.getUser();
  },
};
</script>

<template>
  <div class="col-6 main_div">
    <h1>Profilo</h1>
    <p>Benvenuto {{ username }}</p>
    <button @click="logout()">Logout</button>
  </div>
</template>
