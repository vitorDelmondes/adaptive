<template>
  <div style="hei">
    <vs-row class="Header">
      <span style="color: #fff; font-size: .875rem; padding-left: padding-right: 1rem;">OPERADOR: PAULO CÉSAR - 02/04/2018 - 19:37</span>
      <vs-button radius color="#fff" type="flat" size="large" icon="help_outline"></vs-button>
    </vs-row>
    <vs-row class="row">
      <vs-col class="col" vs-w="4">
        <!-- <span style="color: #949; font-size: .875rem; padding-left: padding-right: 1rem;">OPERADOR: PAULO CÉSAR - 02/04/2018 - 19:37</span> -->
      </vs-col>
      <vs-col class="col" style="background-color: #ebebeb;" vs-w="8">
        <vs-row class="row" style="margin-top: 15%">

          <vs-col v-for="item in values" :key="item.id" class="button" vs-w="2.2">
            <vs-row style="flex-direction: row-reverse;">
              <div v-if="item.type == 'banknotes'">
                <img style="width: 40px;" src="./assets/local_atm-black-24dp.svg">
              </div>
              <div v-else-if="item.type == 'cents'">
                <img style="width: 40px;" src="./assets/monetization_on-black-48dp.svg">
              </div>
            </vs-row>
            <vs-row class="row" style="font-size: 50px; justify-content: left; align=content:base-line; font-weight: 520; color: #2f608a; padding-left:4%">
              <span>{{ item.value }}</span>
            </vs-row>
            <vs-row class="row" style="background-color: #2f608a; border-radius: 5px;">
              <span class="label">Selecione</span>
            </vs-row>
          </vs-col>

          <vs-col class="button" vs-w="2.2">
            <vs-row></vs-row>
            <vs-row class="row">
              <img style="width: 65px;" src="./assets/local_atm-black-48dp (1).svg">
            </vs-row>
            <vs-row class="last-row" style="background-color: #fa7035; border-radius: 5px;">
              <span class="label">Dinheiro</span>
            </vs-row>
          </vs-col>
          <vs-col class="button" vs-w="2.2">
            <vs-row></vs-row>
            <vs-row class="row">
              <img style="width: 65px;" src="./assets/payment-black-48dp.svg">
            </vs-row>
            <vs-row class="last-row" style="background-color: #fa7035;">
              <span class="label">Cartão de Crédito</span>
            </vs-row>
          </vs-col>
          <vs-col class="button" vs-w="2.2">
            <vs-row></vs-row>
            <vs-row class="row">
              <img style="width: 65px;" src="./assets/payment-black-48dp.svg">
            </vs-row>
            <vs-row class="last-row" style="background-color: #fa7035;">
              <span class="label">Cartão de Débito</span>
            </vs-row>
          </vs-col>
          <vs-col class="button" vs-w="2.2">
            <vs-row></vs-row>
            <vs-row class="row">
              <img style="width: 65px;" src="./assets/receipt_long-black-48dp.svg">
            </vs-row>
            <vs-row class="last-row" style="background-color: #fa7035;">
              <span class="label">Cheque</span>
            </vs-row>
          </vs-col>
          <vs-col class="button" vs-w="2.2">
            <vs-row></vs-row>
            <vs-row class="row">
              <img style="width: 65px;" src="./assets/arrow_right_alt-black-48dp.svg">
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
  name: 'App',
  components: {},
  data() {
    return {
      values: [
        {
          id: 1,
          value: '5,00',
          type: 'banknotes'
        },
        {
          id: 2,
          value: '10,00',
          type: 'banknotes'
        },
        {
          id: 3,
          value: '20,00',
          type: 'banknotes'
        },
        {
          id: 4,
          value: '50,00',
          type: 'banknotes'
        },
        {
          id: 5,
          value: '100,00',
          type: 'banknotes'
        },
        {
          id: 6,
          value: '100,00',
          type: 'cents'
        },
        {
          id: 7,
          value: '100,00',
          type: 'cents'
        },
        {
          id: 8,
          value: '100,00',
          type: 'cents'
        },
        {
          id: 9,
          value: '100,00',
          type: 'cents'
        },
        {
          id: 10,
          value: '100,00',
          type: 'cents'
        },
        {
          id: 11,
          value: '25,00',
          type: 'banknotes'
        },
        {
          id: 12,
          value: '26,00',
          type: 'banknotes'
        },
        {
          id: 13,
          value: '30,00',
          type: 'banknotes'
        },
        {
          id: 14,
          value: '40,00',
          type: 'banknotes'
        },
        {
          id: 15,
          value: '50,00',
          type: 'banknotes'
        },
      ],
    };
  },
  }
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
  padding: 15px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.col {
  display: flex;
  flex-direction: col;
  justify-content: flex-end;
  align-items: center;
}

.button {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 9rem;
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
  align-items:end; 
  font-weight: 700;
}
</style>
