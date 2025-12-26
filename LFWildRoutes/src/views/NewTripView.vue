<script>
import { useSessionStore } from "@/stores/session";
import * as Api from "@/utils/apis.js";

export default {
  data() {
    return {
      idv: 0,
      nome: "",
      data_partenza: "",
      data_ritorno: "",
      accompagnatore: "",
      prezzo: 0,
      descrizione: "",
      extra: "",
      foto_viaggio: "",
      viaggiList: [],
      sessionStore: useSessionStore(),

      maxNome: 50,
      maxDescrizione: 500,
      maxExtra: 500,
    };
  },

  methods: {
    async addViaggio() {
      if (!this.confermaAggiunta()) {
        alert("Devi rispettare la lunghezza dei campi!!");
        return;
      }

      const data = await Api.addViaggio(
        this.nome,
        this.data_partenza,
        this.data_ritorno,
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

    confermaAggiunta() {
      return (
        this.checkNomeLength() &&
        this.checkDescrizioneLength() &&
        this.checkExtraLength()
      );
    },

    checkNomeLength() {
      if (this.nome.length > this.maxNome) {
        this.nome = this.nome.substring(0, this.maxNome);
      }
      return this.nome.length > 0 && this.nome.length <= this.maxNome;
    },
    checkDescrizioneLength() {
      if (this.descrizione.length > this.maxDescrizione) {
        this.descrizione = this.descrizione.substring(0, this.maxDescrizione);
      }
      return (
        this.descrizione.length > 0 &&
        this.descrizione.length <= this.maxDescrizione
      );
    },
    checkExtraLength() {
      if (this.extra.length > this.maxExtra) {
        this.extra = this.extra.substring(0, this.maxExtra);
      }
      return this.extra.length > 0 && this.extra.length <= this.maxExtra;
    },
  },
};
</script>

<template>
  <div class="col-6 main_div">
    <h1 id="newtrip_title">Inserisci un nuovo viaggio</h1>

    <form class="forms" action="newtrip" method="POST">
      <div class="form_section">
        <p class="lungezza_input">
          {{ nome.length }}/{{ maxNome }} caratteri rimanenti
        </p>
        <label for="nome"> Nome: </label> <br />
        <input type="text" id="nome" name="nome" v-model="nome" />
      </div>

      <div class="form_section">
        <label for="data_p"> Data di partenza: </label>
        <input type="date" id="data_p" name="data_p" v-model="data_partenza" />
        <br />
      </div>

      <div class="form_section">
        <label for="data_r"> Data di ritorno: </label>
        <input type="date" id="data_r" name="data_r" v-model="data_ritorno" />
      </div>

      <div class="form_section">
        <label for="accompagnatore"> Accompagnatore: </label>
        <select
          id="accompagnatore"
          name="accompagnatore"
          v-model="accompagnatore"
        >
          <option value="Leo">Leo</option>
          <option value="Kate">Kate</option>
          <option value="Marco">Marco</option>
          <option value="Nick">Nick</option>
          <option value="Guerri">Guerri</option>
        </select>
      </div>

      <div class="form_section">
        <label for="prezzo"> Prezzo: </label>
        <input type="number" id="prezzo" name="prezzo" v-model="prezzo" />
      </div>

      <div class="form_section">
        <p class="lungezza_input">
          {{ descrizione.length }}/{{ maxDescrizione }} caratteri rimanenti
        </p>
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
        <p class="lungezza_input">
          {{ extra.length }}/{{ maxExtra }} caratteri rimanenti
        </p>
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
