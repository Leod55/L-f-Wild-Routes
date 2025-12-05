<script>
import { RouterLink } from "vue-router";
import { useSessionStore } from "@/stores/session.js";

export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      sessionStore: useSessionStore(),
    };
  },
  methods: {
    checkUser() {
      if (this.sessionStore.getUser() == null) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<template>
  <nav class="col-12 row">
    <ul>
      <li><RouterLink to="/">HOME</RouterLink></li>
      <li><RouterLink to="/destinations">DESTINATIONS</RouterLink></li>
      <li><RouterLink to="/who">WHO</RouterLink></li>
      <li v-show="!checkUser()"><RouterLink to="/login">LOGIN</RouterLink></li>
      <li v-show="checkUser()">
        <RouterLink to="/newtrip">NEWTRIP</RouterLink>
      </li>
      <li v-show="checkUser()">
        <RouterLink to="/profile">PROFILE</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style>
nav li {
  list-style-type: none;
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 2px solid var(--black);
}

nav li:first-child {
  border-left: none;
}

nav li > a {
  color: var(--black);
}

nav a:link {
  text-decoration: none;
  font-size: 15px;
}

nav a:hover {
  font-weight: bold;
  font-size: 16px;
  color: var(--secondary);
}

.router-link-exact-active {
  color: var(--white);
  font-weight: bold;
}

@media only screen and (max-width: 768px) {
  nav.col-12 {
    position: static;
    text-align: left;
  }
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  nav > ul > li {
    display: block;
    width: 100%;
    border-left: none;

    padding: 15px 0;
    text-align: center;
  }
}
</style>
