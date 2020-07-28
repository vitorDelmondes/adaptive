<template>
  <div>
    <vs-row class="Header">
      <span
        style="color: #fff; font-size: .875rem; padding-left: padding-right: 1rem;"
      >OPERADOR: PAULO CÉSAR - 02/04/2018 - 19:37</span>
      <vs-button radius color="#fff" type="flat" size="large" icon="help_outline"></vs-button>
    </vs-row>
    <vs-row class="row">
      <vs-col class="col" vs-w="4">
        <vs-row class="userBar" vs-w="12">
          <vs-col vs-w="1.5">
            <img style="width: 40px;" src="./assets/person-black-48dp.svg" />
          </vs-col>
          <vs-col vs-w="10.5" style="align-self: center;">
            <span>Cliente Padrão</span>
            <br />
            <span>999.999.999-99</span>
          </vs-col>
        </vs-row>
        <vs-row class="volumesBar" vs-w="12">
          <vs-col vs-w="6">
            <span>Volumes</span>
            <br />
            <span style="font-size: 30px">01</span>
          </vs-col>
          <vs-col
            vs-w="2.5"
            style="align-self: center; flex-direction: column; justify-content: flex-end"
          >
            <div style="display:flex; align-items: center; justify-content: flex-end;">
              <span>Total</span>
            </div>
            <div style="display:flex; align-items: center;">
              <span style="color: #fa7035; font-size: 30px;">25,00</span>
              <img style="width: 30px;" src="./assets/all_inbox-black-48dp.svg" />
            </div>
          </vs-col>
        </vs-row>
        <vs-row class="pinBar" vs-w="12">
          <div>
            <img style="width: 35px;" src="./assets/pageview-white-48dp.svg" />
            <img style="width: 35px;" src="./assets/where_to_vote-white-48dp.svg" />
          </div>
          <div>
            <img style="width: 35px;" src="./assets/widgets-white-48dp.svg" />
          </div>
        </vs-row>
        <vs-row vs-w="12">
          <vs-row vs-w="12">
            <vs-col vs-w="9">
              <vs-col class="numericButton" vs-w="4">1</vs-col>
              <vs-col class="numericButton" vs-w="4">2</vs-col>
              <vs-col class="numericButton" vs-w="4">3</vs-col>
            </vs-col>
            <vs-col vs-w="3">
              <vs-col class="numericButton" style="background-color: #82a2bd; height: 100%;">
                <span style="margin-top:15%">QTD</span>
              </vs-col>
            </vs-col>
          </vs-row>
          <vs-row vs-w="12">
            <vs-col vs-w="9">
              <vs-col class="numericButton" vs-w="4">4</vs-col>
              <vs-col class="numericButton" vs-w="4">5</vs-col>
              <vs-col class="numericButton" vs-w="4">6</vs-col>
            </vs-col>
            <vs-col vs-w="3">
              <vs-col class="numericButton" style="background-color: #82a2bd; height: 100%;">
                <img style="width: 25px;" src="./assets/backspace-white-48dp.svg" />
              </vs-col>
            </vs-col>
          </vs-row>
          <vs-row vs-w="12">
            <vs-col vs-w="9">
              <vs-col class="numericButton" vs-w="4">7</vs-col>
              <vs-col class="numericButton" vs-w="4">8</vs-col>
              <vs-col class="numericButton" vs-w="4">9</vs-col>
            </vs-col>
            <vs-col vs-w="3">
              <vs-col class="numericButton" style="background-color: #82a2bd; height: 141.5%;">
                <img style="width: 25px;" src="./assets/check-white-48dp.svg" />
              </vs-col>
            </vs-col>
          </vs-row>
          <vs-row vs-w="12">
            <vs-col vs-w="9">
              <vs-col class="numericButton" vs-w="4" style="background-color: #82a2bd;">.</vs-col>
              <vs-col class="numericButton" vs-w="8">0</vs-col>
            </vs-col>
          </vs-row>
        </vs-row>
      </vs-col>
      <vs-col class="col" style="background-color: #ebebeb; padding: 1rem" vs-w="8">
        <vs-row class="row" style="margin-top: 10%">
          <vs-col v-for="item in values" :key="item.id" class="button" vs-w="2.2">
            <vs-row style="flex-direction: row-reverse;">
              <div v-if="item.type == 'banknotes'">
                <img style="width: 40px;" src="./assets/local_atm-black-24dp.svg" />
              </div>
              <div v-else-if="item.type == 'cents'">
                <img style="width: 40px;" src="./assets/monetization_on-black-48dp.svg" />
              </div>
            </vs-row>
            <vs-row
              class="row"
              style="font-size: 50px; justify-content: left; align=content:base-line; font-weight: 520; color: #2f608a; padding-left:4%"
            >
              <span>{{ item.value }}</span>
            </vs-row>
            <vs-row class="row" style="background-color: #2f608a; border-radius: 5px;">
              <span class="label">Selecione</span>
            </vs-row>
          </vs-col>

          <vs-col class="button" vs-w="2.2">
            <vs-row></vs-row>
            <vs-row class="row">
              <img style="width: 65px;" src="./assets/local_atm-black-48dp (1).svg" />
            </vs-row>
            <vs-row class="last-row" style="background-color: #fa7035; border-radius: 5px;">
              <span class="label">Dinheiro</span>
            </vs-row>
          </vs-col>
          <vs-col class="button" vs-w="2.2">
            <vs-row></vs-row>
            <vs-row class="row">
              <img style="width: 65px;" src="./assets/payment-black-48dp.svg" />
            </vs-row>
            <vs-row class="last-row" style="background-color: #fa7035;">
              <span class="label">Cartão de Crédito</span>
            </vs-row>
          </vs-col>
          <vs-col class="button" vs-w="2.2">
            <vs-row></vs-row>
            <vs-row class="row">
              <img style="width: 65px;" src="./assets/payment-black-48dp.svg" />
            </vs-row>
            <vs-row class="last-row" style="background-color: #fa7035;">
              <span class="label">Cartão de Débito</span>
            </vs-row>
          </vs-col>
          <vs-col class="button" vs-w="2.2">
            <vs-row></vs-row>
            <vs-row class="row">
              <img style="width: 65px;" src="./assets/receipt_long-black-48dp.svg" />
            </vs-row>
            <vs-row class="last-row" style="background-color: #fa7035;">
              <span class="label">Cheque</span>
            </vs-row>
          </vs-col>
          <vs-col class="button" vs-w="2.2">
            <vs-row></vs-row>
            <vs-row class="row">
              <img style="width: 65px;" src="./assets/arrow_right_alt-black-48dp.svg" />
            </vs-row>
            <vs-row class="last-row">
              <span class="label">Próxima Página</span>
            </vs-row>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {},
  data() {
    return {
      values: [
        {
          id: 1,
          value: "5,00",
          type: "banknotes",
        },
        {
          id: 2,
          value: "10,00",
          type: "banknotes",
        },
        {
          id: 3,
          value: "20,00",
          type: "banknotes",
        },
        {
          id: 4,
          value: "50,00",
          type: "banknotes",
        },
        {
          id: 5,
          value: "100,00",
          type: "banknotes",
        },
        {
          id: 6,
          value: "100,00",
          type: "cents",
        },
        {
          id: 7,
          value: "100,00",
          type: "cents",
        },
        {
          id: 8,
          value: "100,00",
          type: "cents",
        },
        {
          id: 9,
          value: "100,00",
          type: "cents",
        },
        {
          id: 10,
          value: "100,00",
          type: "cents",
        },
        {
          id: 11,
          value: "25,00",
          type: "banknotes",
        },
        {
          id: 12,
          value: "26,00",
          type: "banknotes",
        },
        {
          id: 13,
          value: "30,00",
          type: "banknotes",
        },
        {
          id: 14,
          value: "40,00",
          type: "banknotes",
        },
        {
          id: 15,
          value: "50,00",
          type: "banknotes",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.Header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #2f608a;
  padding: 10px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.button {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  margin: 1%;
  background-color: #d6d6d6;
  border-radius: 5px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.last-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #2f608a;
  border-radius: 5px;
}

.label {
  color: #fff;
  padding: 2%;
  align-items: end;
  font-weight: 700;
}

.userBar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  align-content: center;
  background-color: #82a2bd;
  color: #fff;
  padding: 2%;
  font-weight: 600;
  margin-bottom: 27.5%;
}

.volumesBar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  background-color: #ebebeb;
  color: #2f608a;
  padding: 2%;
  font-weight: 600;
}

.pinBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  background-color: #2f608a;
  padding: 2%;
  margin-bottom: 10%;
}

.numericColumn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #446f94;
  padding: 6%;
  color: #fff;
  border: solid;
  border-width: 1px;
  border-color: black;
}

.lastNumericBar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: #82a2bd;
  padding: 6%;
  color: #fff;
  border: solid;
  border-width: 1px;
  border-color: black;
}

.numericButton {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: #446f94;
  padding: 6%;
  color: #fff;
  border: solid;
  border-width: 1px;
  border-color: black;
}
</style>
