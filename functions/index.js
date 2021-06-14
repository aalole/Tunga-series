// function printDay
const printDay = (n) => {
    let suffix = 'day'
    n === 1 ? `Sun${suffix}` : n === 2 ? `Mon${suffix}` : n === 3 ? `Tue${suffix}` : n === 4 ? `Wednes${suffix}`
    : n === 5 ? `Thurs${suffix}` : n === 6 ? `Fri${suffix}` : n === 7 ? `Satur${suffix}` : undefined ;
}

// lastElement
const lastElement = arr => arr.pop()

// numberCompare
const numberCompare = (n1, n2) => n1 > n2 ? "First is greater" : n2 > n1 ? "Second is greater" : "Numbers are equal";

// singleLetterCount
const singleLetterCount = (word, letter) => {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseLetter = letter.toLowerCase();
    let count = 0;
    for (let i = 0; i < lowerCaseWord .length; i++) {
        if(lowerCaseWord.charAt(i) == lowerCaseLetter){
            count++
        }  
    }
    return count
}

// multipleLetterCount
// s.indexOf(e, s.indexOf(e) + 1) !== -1
const multipleLetterCount = str => {
    let objCount = {};
    let count;
    for (let i = 0; i <= str.length; i++) {
        count = 1;
        if(str[i] === str[i + 1]){
            count += 1;
        }
       objCount[str[i]] = count;
    }
    return objCount;
}

// arrayManipulation
const arrayManipulation = (arr, command, location, value) => 
        // "remove" and the location is "end",
        command === "remove" && location === 'end'? arr.pop() 
        //  "remove" and the location is "beginning"
        : command === "remove" && location === 'beginning' ? arr.shift()
        // "add" and the location is "beginning"
        : command === "add" && location === 'beginning'? arr.unshift(value)
        //  "add" and the location is "end",
        : command === "add" && location === 'end' ? arr.push(value)
        : undefined

// isPalindrome

const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr ? true : false
}