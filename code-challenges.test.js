// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// a describe method that lists the name of the function OR naming of the particular test.
describe("sentenceBuilder", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(sentenceBuilder(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// sentenceBuilder › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
//  ReferenceError: sentenceBuilder is not defined
// Good failure


// b) Create the function that makes the test pass.

// Declare a function that takes in array.
// Declare a variable that uses the .map function and the .toUpperCase that uses the values of name and occupation in a string.
// Return the string.

const senteS = (array) => {
  let sentence = array.map(person => {
    let splitName = person.name.split(" ")
    let firstName = (splitName[0][0].toUpperCase()+splitName.slice(0,1)).split("")
    firstName.splice(1,1)
    let lastName = (splitName[1][0].toUpperCase()+splitName.slice(1,2)).split("")
    lastName.splice(1,1)
    return firstName.join("")+" "+lastName.join("")+" is "+ person.occupation+"."
  })
  return sentence
}

// The test passed Green.


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
// a describe method that lists the name of the function OR naming of the particular test.
describe("only3Remainders", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(only3Remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(only3Remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// only3Remainders › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// ReferenceError: only3Remainders is not defined
// Good failure.



// b) Create the function that makes the test pass.

// Create a function that takes in a array.
// Use the filter method to complie the idex of the values that are integers.
// Use the .map to iterate through the integers and and modoel to divide by 3.
// Return the value.

const only3Remainders = (array) => {
  let remainders = array.filter(value => {
    return typeof value === "number"
  })
  return remainders.map(value => value%3)
}

// The test passed Green.


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
// a describe method that lists the name of the function OR naming of the particular test.
describe("cubedSum", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(cubedSum(cubeAndSum1)).toEqual(99)
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})

// cubedSum › takes in an array of numbers and returns the sum of all the numbers cubed.
// ReferenceError: cubedSum is not defined
// Good failure

// b) Create the function that makes the test pass.

// Declare a function that takes in a array 
// Declare a const that uses the .map method and iterates through the array taking it to the 3rd power
// Use that variable and the .reduce method with the direction to add the values to get one sum 
// Return answer rendering .reduce method.

const cubedSum = (array) => {
  let answer = array.map(value => {
    return value ** 3
  })
  return answer.reduce((a,b) => a+b)
}

// The test passed Green.
