<script></script>

<template>
  <div class="col-6 main_div">
    <div><h1 id="login_title">Login</h1></div>

    <div id="div_form">
      <form id="login_form" action="login" method="POST">
        <label for="username"> Username: </label> <br />
        <input type="text" id="username" name="username" />

        <br />

        <label for="password"> Password: </label> <br />
        <input type="password" id="password" name="password" />

        <br />
        <br />

        <input type="submit" value="Accedi" />
      </form>
    </div>
  </div>
</template>

<style>
#login_form {
  text-align: center;
  background: rgba(var(--primary-rgb), 0.6);

  color: var(--secondary);

  position: absolute;

  top: 85%;
  left: 50%;

  padding: 20px 5px;
  margin: 0;

  transform: translate(-50%, -50%);
  border-radius: 20px;

  font-size: 25px;

  width: 15%;
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

  padding: 5%;
  width: 70%;
}

#login_form input[type="submit"]:hover {
  background: var(--primary);
  color: var(--secondary);
}
</style>
