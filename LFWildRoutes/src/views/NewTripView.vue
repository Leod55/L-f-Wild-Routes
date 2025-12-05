<script>
import { useSessionStore } from "@/stores/session";
import { getActivePinia } from "pinia";

export default {
  data() {
    return {
      idv: 0,
      nome: "",
      data_partenza: "",
      data_arrivo: "",
      accompagnatore: "",
      prezzo: 0,
      descrizione: "",
      extra: "",
      foto_viaggio: "",
      viaggiList: [],
      data: new Date().toISOString().slice(0, 10),
      sessionStore: useSessionStore(),
    };
  },
  methods: {
    async addViaggio() {
      this.getViaggioId();
      const data = await Api.addViaggo(
        this.idv,
        this.nome,
        this.data_partenza,
        this.data_arrivo,
        this.accompagnatore,
        this.prezzo,
        this.descrizione,
        this.extra,
        this.foto_viaggio,
        this.sessionStore.getUser()
      );
      if (data) {
        alert("Viaggio aggiunto con successo!");
        this.$router.push("/");
      } else {
        console.log(data);
        alert("Errore durante l'aggiunta del viaggio");
      }
    },
  },
};
</script>

<template>
  <div class="col-6 main_div">
    <h1 id="newtrip_title">Inserisci un nuovo viaggio</h1>

    <form class="forms" action="newtrip" method="POST">
      <div class="form_section">
        <label for="nome"> Nome: </label> <br />
        <input type="text" id="nome" name="nome" v-model="nome" />
      </div>

      <div class="form_section">
        <label for="date"> Data di partenza: </label>
        <input type="date" id="date_p" name="date_p" v-model="data_partenza" />
        <br />
      </div>

      <div class="form_section">
        <label for="date"> Data di ritorno: </label>
        <input type="date" id="date_r" name="date_r" v-model="data_arrivo" />
      </div>

      <div class="form_section">
        <label for="accompagnatore"> Accompagnatore: </label>
        <input
          type="text"
          id="accompagnatore"
          name="accompagnatore"
          v-model="accompagnatore"
        />
      </div>

      <div class="form_section">
        <label for="prezzo"> Prezzo: </label>
        <input type="number" id="prezzo" name="prezzo" v-model="prezzo" />
      </div>

      <div class="form_section">
        <label for="description"> Descrizione: </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          cols="30"
          v-model="descrizione"
        ></textarea>
      </div>

      <div class="form_section">
        <label for="extra"> Extra: </label> <br />
        <textarea
          id="extra"
          name="extra"
          rows="4"
          cols="30"
          v-model="extra"
        ></textarea>
      </div>

      <div class="form_section">
        <input
          type="submit"
          value="Inserisci viaggio"
          @click.stop.prevent="addViaggio()"
        />
      </div>
    </form>
  </div>
</template>

<style></style>
