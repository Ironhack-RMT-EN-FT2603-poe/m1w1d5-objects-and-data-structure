console.log("testing")

/* 

{
  key: value,
  key: value,
  vey: value
}

*/


let virtualPet = {
  name: "Pugsy",
  version: 1.0,
  isHappy: true,
  favFoods: ["fish", "carrots", "apples"],
  productInfo: {
    country: "China",
    serialNo: "123FFD555HH"
  },
  "3favWords": ["KAWAII", "YAP", "GOOO"],
  "max volume": 100
}

// let 1fruit
// let max volume = 

console.log(virtualPet)

// dot notation
console.log(virtualPet.name)
console.log(virtualPet.isHappy)

// bracket notation
console.log(virtualPet["max volume"])
console.log(virtualPet["isHappy"])


// console.log(user["address"]["country"]["zipCode"]["value"])

// console.log(user.address.country.zipCode.value)

// Access nested elements

console.log(virtualPet.favFoods[1])

for (let i = 0; i < virtualPet.favFoods.length; i++) {

  let eachFood = virtualPet.favFoods[i]
  console.log(eachFood)

}

console.log(virtualPet.productInfo.country)

// how to loop over objects

let counter = 0

for (let key in virtualPet) {
  counter++
  console.log(counter)
  console.log(key) // the key (name of the property)
  console.log(virtualPet[key]) // the value
}


let virtualPet2 = {
  name: "Pugsy",
  version: 1.0,
  isHappy: true,
  favFoods: ["fish", "carrots", "apples"],
  productInfo: {
    country: "China",
    serialNo: "123FFD555HH"
  },
  "3favWords": ["KAWAII", "YAP", "GOOO"],
  "max volume": 100,
}

//* how to modify the object

virtualPet2.candy = 10 // add a property
console.log(virtualPet2)

virtualPet2.isHappy = false // updating a property
console.log(virtualPet2)

delete virtualPet2.version // deleting a property
console.log(virtualPet2)

delete virtualPet2.productInfo.country
console.log(virtualPet2)

console.log(typeof virtualPet2)

let allObjectKeys = Object.keys(virtualPet2)
console.log(allObjectKeys)
console.log(allObjectKeys.length)

// for (let key in virtualPet2) {
//   delete virtualPet2[key]
// }

// console.log(virtualPet2)

virtualPet2.favFoods.pop() // removing the apples from the favFood
console.log(virtualPet2)