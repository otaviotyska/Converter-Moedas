// Seleciona o botão de conversão
const convertbutton = document.querySelector(".convert-button")

// Seleciona o menu suspenso de moedas (select)
const currencyselect = document.querySelector(".currency-select")

// Função que realiza a conversão dos valores
function convertvalues() {
   // Pega o valor digitado pelo usuário
   const inputCurrencyValue = document.querySelector(".input-currency").value

   // Seleciona o campo que exibe o valor em real
   const currencyvalueToConvert = document.querySelector(".currency-value-real")

   // Seleciona o campo que exibe o valor convertido
   const currencyvalueToConverted = document.querySelector(".currency-value")

   // Taxas de câmbio fixas
   const dolarToday = 5.62
   const euroToday = 6.30
   const bitcoinToday = 573.680
   const libraToday = 7.49 
   

   // Se a moeda selecionada for dólar
   if (currencyselect.value == "dolar") {
      currencyvalueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolarToday)
   }

   // Se a moeda selecionada for euro
   if (currencyselect.value == "euro") {
      currencyvalueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / euroToday)
   }

   if (currencyselect.value == "bitcoin") {
      currencyvalueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "BTC"
      }).format(inputCurrencyValue / bitcoinToday)
   }

   if (currencyselect.value == "libra") {
      currencyvalueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP"
      }).format(inputCurrencyValue / libraToday)
   }

   // Exibe o valor original digitado em reais formatado
   currencyvalueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)
}

// Função que troca nome e imagem da moeda, e chama a conversão
function changecurrency() {
   // Seleciona o campo de nome da moeda
   const currencydolar = document.getElementById("currency-dolar")

   // Seleciona a imagem da moeda
   const currencyimage = document.querySelector(".currency-img")

   // Se for selecionado dólar, muda nome e imagem
   if (currencyselect.value == "dolar") {
      currencydolar.innerHTML = "Dólar Americano"
      currencyimage.src = "./assets/dolar.png"
   }

   // Se for selecionado euro, muda nome e imagem
   if (currencyselect.value == "euro") {
      currencydolar.innerHTML = "Euro"
      currencyimage.src = "./assets/euro.png"
   }

   if (currencyselect.value == "bitcoin") {
      currencydolar.innerHTML = "Bitcoin"
      currencyimage.src = "./assets/bitcoin 1.png"
   }

     if (currencyselect.value == "libra") {
      currencydolar.innerHTML = "Libra"
      currencyimage.src = "./assets/libra 1.png"
   }

   // Atualiza a conversão com base na nova moeda
   convertvalues()
}

// Executa a função changecurrency quando a moeda for trocada
currencyselect.addEventListener("change", changecurrency)

// Executa a função convertvalues quando clicar no botão
convertbutton.addEventListener("click", convertvalues)
