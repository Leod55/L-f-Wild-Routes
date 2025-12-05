<script>
import { useSessionStore } from "@/stores/session";
import * as Auth from "@/utils/auth.js";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      console.log("Sono dentro login()");
      const data = await Auth.login(this.username, this.password);

      if (data.userId) {
        useSessionStore().setUser(data.userId);
        this.$router.push("/");
      } else {
        alert("Login failed");
      }
    },
  },
};
</script>

<template>
  <div class="col-6 main_div">
    <h1 id="login_title">Login</h1>

    <div>
      <form class="forms" action="login" method="POST">
        <div class="form_section">
          <label for="username"> Username </label>
          <input type="text" id="username" name="username" v-model="username" />
        </div>

        <div class="form_section">
          <label for="password"> Password </label> <br />
          <input
            type="password"
            id="password"
            name="password"
            v-model="password"
          />
        </div>

        <div class="form_section">
          <input type="submit" value="Accedi" @click.stop.prevent="login()" />
        </div>
      </form>

      <!--<form id="login_form" action="signup" method="POST"></form>-->
    </div>
  </div>
</template>

<style>
.forms {
  text-align: center;
  background: rgba(var(--primary-rgb), 0.6);
  box-shadow: 0 2px 10px 0;
  border-radius: 20px;

  color: var(--black);

  padding: 10px 5px;
  margin: 60px auto;

  font-size: 20px;

  /*
  position: absolute;

  top: 85%;
  left: 50%;

  transform: translate(-50%, -50%);
  */

  width: 50%;
}

.form_section {
  margin: 40px 0;
}

.forms input {
  display: block;
  width: 66%;
  margin-left: 16%;
  margin-top: 3%;
}

.forms input[type="submit"] {
  background: var(--secondary);
  font-weight: bold;
  cursor: pointer;

  padding: 15px;
}

.forms input[type="submit"]:hover {
  /*background: var(--black);
  color: var(--secondary);
  box-shadow: 10px 10px 40px var(--black);*/
  background-color: var(--black); /* verde di prima */
  box-shadow: 10px 10px 40px var(--black);

  color: var(--secondary);

  padding: 15px 40px;
  border-radius: 5px;
  cursor: pointer;
  position: relative; /* serve per sovraimpressione */
}
</style>
