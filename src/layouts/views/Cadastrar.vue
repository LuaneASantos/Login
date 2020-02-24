<template>
  <div id="login">
    <div id="logo">
      <img src="~assets/icons8-foguete-100.png" />
    </div>

    <div class="campos">
      <input id="nome" type="text" name="nome" v-model="input.nome" placeholder="Nome" />
    </div>

    <div class="campos">
      <input id="email"
        type="text"
        name="email"
        v-model="input.email"
        placeholder="E-mail"
      />
    </div>

    <div class="campos">
      <input id="senha"
        type="text"
        name="senha"
        v-model="input.senha"
        placeholder="Senha"
      />
    </div>

    <div class="campos">
      <input id="senhaConf"
        type="text"
        name="senhaConf"
        v-model="input.senhaConf"
        placeholder="Confirmar Senha"
      />
    </div>

    <div style="position: relative;">
      <div
        class=""
        style="width: 62px; margin-top: 10px; font-size: 16px;position: absolute;"
      >
        <router-link to="/" class="voltar">Voltar</router-link>
      </div>

        <div style="width: 74px; margin-top: 10px; font-size: 16px;float: right;">
          <button type="button" class="voltar" style="background: none; border: none" v-on:click="login()">Cadastrar</button>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        nome: '',
        email: '',
        senha: '',
        senhaConf: ''
      }
    }
  },
  methods: {
    login () {
      let messageBody = {
        'nome': document.getElementById('nome').value,
        'email': document.getElementById('email').value,
        'senha': document.getElementById('senha').value
      }

      var request = require('request')
      request.post({
        url: 'http://localhost:8000/api/usuarios',
        body: messageBody,
        json: true
      // eslint-disable-next-line handle-callback-err
      }, function (error, response, body) {
        console.log(body)
      })

      this.$router.push('/confirmarCadastro')
    }
  }
}
</script>

<style scoped>
input {
  border-radius: 20px;
  border: 2px solid #ffffff;
  background-color: #414055;
  margin: auto;
  width: 100%;
  height: 100%;
  color: #fff;
}

#login {
  background-color: #414055;
  width: 300px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 50%;
}

.campos {
  width: 300px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-top: 10px;
  height: 45px;
}

::placeholder {
  color: #fff;
  padding: 20px;
}

#logo {
  width: 100px;
  margin: auto;
  margin-top: 10px;
  height: 100px;
}

.voltar {
  color: #f55793;
  text-decoration: none;
}
</style>
