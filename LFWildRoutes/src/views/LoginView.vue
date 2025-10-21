<script></script>

<template>
  <div class="col-6 main_div">
    <h1 id="login_title">Login</h1>

    <div>
      <form id="login_form" action="login" method="POST">
        <div class="form_section">
          <label for="username"> Username: </label>
          <input type="text" id="username" name="username" />
        </div>

        <div class="form_section">
          <label for="password"> Password: </label> <br />
          <input type="password" id="password" name="password" />
        </div>

        <div class="form_section">
          <input type="submit" value="Accedi" />
        </div>
      </form>

      <!--<form id="login_form" action="signup" method="POST"></form>-->
    </div>
  </div>
</template>

<style>
#login_form {
  text-align: center;
  background: var(--primary);
  box-shadow: 10px 10px 40px var(--black);
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

#login_form input {
  display: block;
  width: 66%;
  margin-left: 16%;
  margin-top: 3%;
}

#login_form input[type="submit"] {
  background: var(--secondary);
  font-weight: bold;
  cursor: pointer;

  padding: 15px;
}

#login_form input[type="submit"]:hover {
  background: var(--black);
  color: var(--secondary);
}
</style>
