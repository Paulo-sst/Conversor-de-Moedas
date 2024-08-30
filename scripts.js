const convertButton = document.querySelector(".convert-button")
const select = document.querySelector(".select-sst")

function aperteiconverteu(){

const btnCurrency = document.querySelector(".btn-currency").value
const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // VALOR EM REAL
const currencyValueConvert = document.querySelector(".currency-value") // OUTRAS MOEDAS


console.log("selectsst.value")


const dolarToday = 5.2
const euroToday = 6.2

const convertedValue = btnCurrency / dolarToday

currencyValueToConvert.innerHTML = new Intl.NumberFormat ("pt-BR",{
    style: "currency",
    currency: "BRL"
}).format(btnCurrency)

currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency:"USD"
}).format(convertedValue)



console.log(convertedValue);

}

convertButton.addEventListener("click",aperteiconverteu)