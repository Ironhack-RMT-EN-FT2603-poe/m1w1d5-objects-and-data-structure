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



//* methods

let virtualPet3 = {
  name: "Pugsy",
  version: 1.0,
  isHappy: true,
  favFoods: ["fish", "carrots", "apples"],
  greet() {
    // in methods we have access to a specific keyword called this
    // console.log(this)
    let greetMessage = `${this.name} is waving Hello!`
    return greetMessage
  },
  toggleMood() {
    if (this.isHappy === true) {
      this.isHappy = false
      return `${this.name} is no longer happy :(`
    } else {
      this.isHappy = true
      return `${this.name} now happy! :)`
    }
  },
  feedRandomFood() {

    // how to access the array of foods? this.favFoods
    let randomNumber = Math.random() * 3 // 0 - 2.9999999
    // console.log(randomNumber)

    let randomIndex = Math.floor(randomNumber)
    // console.log(randomIndex)

    let randomFood = this.favFoods[randomIndex]
    // console.log(randomFood)
    // how do we generate something random?
    // how do we target elements in an array?

    let message = `${this.name} is eating ${randomFood} !`
    return message
  }
}
console.log( virtualPet3.greet() )

virtualPet3.name = "Paquita"
console.log( virtualPet3.greet() )

console.log( virtualPet3.toggleMood() )
console.log( virtualPet3.toggleMood() )

console.log( virtualPet3.feedRandomFood() )


//* Data structure

const users = [
  {
    username: "Samuel",
    salary: 20000,
    occupation: "junior",
  },
  {
    username: "Jenny",
    salary: 22000,
    occupation: "junior II",
  },
  {
    username: "Val",
    salary: 36000,
    occupation: "senior",
  },
  {
    username: "Luis",
    salary: 42000,
    occupation: "PM",
  },
];

// print the occupation of user #2
console.log(users[1].occupation)

// change the username of user #3
let newUsername = "Valentina"
users[2].username = newUsername


// how can we increase the salary of the first user by 2000 euros
users[0].salary += 2000


// we need to add a new user to the array. Ruth, GM, 56000
users.unshift({
  username: "Ruth",
  salary: 56000,
  occupation: "GM"
})

// increase the salary of everyone by 10%
for (let i = 0; i < users.length; i++) {
  users[i].salary *= 1.1
} 

console.log(users)
