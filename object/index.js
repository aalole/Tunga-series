let instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

// Write a function called displayCities that console.logs all the values in the citiesLivedIn array:
const displayCities = obj => obj.additionalData.moreDetails.citiesLivedIn.map(city => city);

// Write a function called displayHometownData that console.logs all the values inside of the hometown object

const displayHometownData = obj => {
    const  hometown = obj.additionalData.moreDetails.hometown
    const { city, state } = hometown
    return `${city}, ${state}`
}

// Let's write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object

const addDetail = ( key, val, obj ) => {
    let moreDetails = obj.additionalData.moreDetails;
    moreDetails[key] = val;
    return obj.additionalData.moreDetails
} 

// let's write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails

const removeDetail = (key, obj) => {
    let moreDetails = obj.additionalData.moreDetails
    delete moreDetails[key];
    return moreDetails;
}


// nested data exercises

let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
  }

//   Using a for loop, console.log all of the numbers in the primeNumbers array.

const returnPrime = () => {
    let prime = nestedData.innerData.numberData.primeNumbers
    for (let i = 0; i < prime.length; i++) {
        const element = prime[i];
       console.log(element);    
    }
} 

// Using a for loop, console.log all of the even Fibonnaci numbers.
const printEvenFibonnaci = () => {
    let fabonnaci = nestedData.innerData.numberData.fibonnaci;
    for (let i = 0; i < fabonnaci.length; i++) {
        const element = fabonnaci[i];
        if (element % 2 === 0) {
            console.log(element);
        }
    }
}
// Console.log the value "second" inside the order array.
let order = nestedData.innerData.order;
console.log(order[1]);

// Invoke the addSnack function and add the snack "chocolate"
nestedData.innerData.addSnack("chocolate")
// What does the word this refer to inside the addSnack function?
// ANSWER: this is referring to innerData inside the nestedData.

let nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }
//   Write a function addSpeaker to add a speaker to the array of speakers
const addSpeaker = (username) => {
    let speakers = nestedObject.speakers
    let user = {};
    user.name = username;
    speakers.push(user);
    return speakers   
}

// Hallo
// Write a function addLanguage that adds a language to the languages object.

const addLanguage = (lang) => {
    
}