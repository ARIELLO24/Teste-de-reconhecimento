//switch



//Crie uma declaração switch que irá mostrar "Olá" se fruits for "banana" e "Bem-vindo" se fruits for "maçã".
let fruits = "banana"

switch(fruits) {
  case "banana":
    console.log("olá")
    break;
  case "maçã":
    console.log("Bem-vindo")
    break;
}


//Adicione uma seção que irá alertar "Nem um nem outro" se fruits não for nem "banana" nem "maçã".
let fruits2 = "Bergamota"

switch(fruits2) {
  case "banana":
    console.log("Olá")
    break;
  case "maçã":
    console.log("Bem-vindo")
    break;
  default:
    console.log("Nem um nem outro")
}
