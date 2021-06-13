// let nestedObject = {
//     speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
//     data: {
//       continents: {
//         europe: {
//           countries: {
//             switzerland: {
//               capital: "Bern",
//               population: 8000000
//             }
//           }
//         }
//       },
//       languages: {
//         spanish: {
//             hello: "Hola"
//         },
//         french: {
//             hello: "Bonjour"
//         }
//       }
//     }
//   }

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
      citiesLivedIn: ["Seattle", "Providence", "New York"],
    },
  },
};

const cityLivedIn = (obj) => {
  const { additionalData } = obj;
  const { moreDetails } = additionalData;
  const { citiesLivedIn } = moreDetails;
  citiesLivedIn.map((city) => console.log(city));
};

const displayHometownData = () => {
  const { additionalData } = obj;
  const { moreDetails } = additionalData;
  const { hometown } = moreDetails;
  for (let town in hometown) {
    console.log(hometown[town]);
  }
};

// const addDetail = (key, val) => {
//     const { additionalData } = obj;
//     let { moreDetails } = additionalData;
//     for(let keys in moreDetails){
//         keys = [...keys, key];
//         moreDetails[keys] = [...moreDetails[keys], val];
//     }
//     return moreDetails
// }

const makeXOGrid = (rows, cols) => {
  // initialize an empty array;
  // determine the no of cols
  // if col even, add o; odd? add x. if col = 0 return empty arr; if col =1? add x; if col =2 ? add x, o
  // push the col into the arr in num of rows times
  let vals = "xo";
  let arr = [];
  let arrOfVals = [vals.toUpperCase()]
  let valOfCOls =
    cols === 0
      ? ""
      : cols === 1
      ? arrOfVals[0]
      : cols % 2 === 0
      ? arrOfVals[1]
      : cols % 2 !== 0
      ? arrOfVals[0]
      : undefined;
    for (let i =0; i< rows; i++){
        arr.push(valOfCOls);
        rows[i] = arr
    }
  return rows
};
