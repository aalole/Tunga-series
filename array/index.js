let people = ["Greg", "Mary", "Devon", "James"];

// Using a loop, iterate through this array and console.log all of the people.
people.map(person => {
    console.log(person);
});

// Write the command to remove "Greg" from the array.
const grey = people.shift();

//Write the command to remove "James" from the array.
const james = people.pop();

//Write the command to add "Matt" to the front of the array.
const matt = people.unshift('Matt');
// Write the command to add your name to the end of the array.
const me = people.push('Mikail');
// Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

for (let i = 0; i < people.length; i++) {
    const element = people[i];
    if(element === 'Mary') stop();
    console.log(element);   
}