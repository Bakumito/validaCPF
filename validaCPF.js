let validaMultiplicador = 10
let cpf = '098.382.666-80'
let cpfNumeros = cpf.replace(/\D+/g, '')
let cpfArray = Array.from(cpfNumeros)
let cpfValidacao1 = cpfArray.map(v => (v = Number(v))).splice(0, 9)
let cpfValidacao2 = cpfArray.map(v => (v = Number(v))).splice(0, 10)
cpfValidacao1.map((v, i, arr) => {
  arr[i] = v * validaMultiplicador
  validaMultiplicador--
})
soma1 = cpfValidacao1.reduce((ac, v) => {
  ac += v
  return ac
})
let resultado = 11 - (soma1 % 11) > 9 ? 0 : 11 - (soma1 % 11)

validaMultiplicador = 11
cpfValidacao2.map((v, i, arr) => {
  arr[i] = v * validaMultiplicador
  validaMultiplicador--
})
soma2 = cpfValidacao2.reduce((ac, v) => {
  ac += v
  return ac
})
let resultado2 = 11 - (soma2 % 11) > 9 ? 0 : 11 - (soma2 % 11)

let cpfValido = cpfArray.map(v => (v = Number(v))).toString()

console.log(cpfValidacao1, soma1, resultado)
console.log(cpfValidacao2, soma2, resultado2)
console.log(cpfValido)

// console.log(278 % 11)
// console.log(cpfValidacao1)
// console.log(cpfArray)
// console.log(cpfTemp, soma1, resultado)
// cpfTemp.map(valor => {
//   valor = valor * validaMultiplicador
//   validaMultiplicador--
// })

// 10 9 8 7 6 5 4 3 2
// 11 - (soma % 11) = primeiro digito
// se o numero for maior que 9, considera-se 0

// 11 10 9 8 7 6 5 4 3 2
// 11 - (soma % 11) = segundo digito
// se o numero for maior que 9, considera-se 0
