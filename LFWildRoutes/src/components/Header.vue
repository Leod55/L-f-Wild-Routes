<script></script>

<template>
  <header class="col-12 row">
    <div class="col-3">
      <img src="../assets/img/logo3_acqua.png" alt="logo" height="150" />
    </div>
    <div class="col-6"><h1 id="header_title">L&F Wild Routes</h1></div>
    <div class="col-3"></div>
  </header>
</template>

<style>
#header_title {
  color: var(--secondary);
  padding: 20px 0;
}

header img {
  display: block;
}

@media only screen and (max-width: 768px) {
  #header_title {
    text-align: center;
  }
  header img {
    float: none;
    display: block;
    margin: 0 auto;
  }
}
</style>
