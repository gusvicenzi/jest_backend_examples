import { sum } from './functions/sum'

console.log('Inicio')

const valores = [1, 3, 5]
console.log('Somando', valores.toString())

const result = sum(...valores)
console.log('Resultado', result)

console.log('Fim')
