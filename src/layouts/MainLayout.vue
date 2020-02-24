<template>
  <div id="app">
      <div id="login">

        <div id="logo" >
          <img src="~assets/icons8-foguete-100.png">
        </div>

        <div class="campos">
          <input type="text" name="email" id="email" v-model="input.email" placeholder="Seu Email" />
        </div>

        <div class="campos">
          <input type="password" name="password" id="password" v-model="input.password" placeholder="Senha" />
        </div>

        <div class="botao">
          <button type="button" v-on:click="login()">Login</button>
        </div>

        <div style="color: #fff;width: 140px;margin-top: 50px;height: 25px;" class="campos">
          Não tem conta ainda?
        </div>

        <div class="campos" style="width: 62px;width: 70px; font-size: 16px">
          <router-link to="/cadastrar" class="cadastrar">Cadastrar</router-link>
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
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      let messageBody = {
        'email': document.getElementById('email').value
      }

      var request = require('request')
      request.get({
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
  #login{
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
  input{
    border-radius: 20px;
    border: 2px solid #ffffff;
    background-color: #414055;
    margin: auto;
    width: 100%;
    height: 100%;
    color: #fff;
  }
  button{
    margin: auto;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: none;
    background-color: #f55793;
    color: #fff;
  }
  #logo{

    width: 100px;
    margin: auto;
    margin-top: 10px;
    height: 100px;

  }

  .campos{
    width: 300px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    margin-top: 10px;
    height: 45px;
  }

  .botao{
    width: 300px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    margin-top: 10px;
    height: 45px;
    font-size: 18px;
  }

  ::placeholder {
    color: #fff;
    padding: 20px;
  }

  .cadastrar{
    color: #f55793;
    text-decoration: none;
  }
</style>
