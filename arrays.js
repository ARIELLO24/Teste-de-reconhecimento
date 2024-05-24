//arrays


//Mostre o valor "Volvo" do array "cars":

const cars = ["Saab", "Volvo", "BMW"]
console.log(cars[2])


//Mude o primeiro item de "cars" para "Ford":

const cars2 = ["Saab", "Volvo", "BMW"]
cars2[0] = "ford"
console.log(cars2)



//Mostre o número de itens que há no array usando a propriedade certa:

const cars3 = ["Volvo", "Jeep", "Mercedes"]

console.log(cars3.length)

//Use o método correto de Array para remover o último item do array fruits.
const fruits = ["Banana", "Orange", "Apple"]
fruits.pop()
console.log(fruits)


//Use o método correto de Array para adicionar "Kiwi" ao array fruits.
const fruits2 = ["Banana", "Orange", "Apple"]
fruits2.push("kiwi")
console.log(fruits2)


//Use o método splice() para remover "Orange" e "Apple" do array fruits.
const fruits3 = ["Banana", "Orange", "Apple"]
fruits3.splice(1,2 )
console.log(fruits3)