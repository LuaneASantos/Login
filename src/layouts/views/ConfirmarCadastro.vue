<template>

    <div id="login">
        <img src="~assets/confirm.png" style="border-radius: 14px;">
        <div class="frase" style="width: 210px;">
            Para ir para a tela inicial clique no
        </div>
        <div class="frase" style="width: 82px;margin-bottom: 14px;">
            botão abaixo
        </div>
        <div class="botao">
          <button type="button">Home</button>
        </div>
    </div>

</template>

<style scoped>

    #login{
        background-color: #fff;
        width: 300px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        height: 50%;
        border-radius: 14px;
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
    .botao{
        width: 180px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        margin-top: 10px;
        height: 45px;
        font-size: 18px;
    }
    .frase{
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        height: 16px;
        font-size: 14px;
    }
</style>
