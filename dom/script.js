const containerSection = document.getElementById("container");
const sameContainerSection = document.querySelector(".container");
const allSecondListItems = document.getElementsByClassName("second")
const thirdOlLiItem = document.querySelector('ol li.third');
const footer = document.querySelector('.footer');
const ul = document.querySelector('ul')
const orderedList = document.querySelectorAll('ol li')


const containerText = document.createTextNode('Hello')
// adding text to div with id of container
containerSection.appendChild(containerText)
// adding class main to div with class of footer
footer.classList.add('main')

// removing class main to div with class of footer
footer.classList.remove('main')

// create new li 
const newLi = document.createElement("li")
// Give the li the text "four".
const liText = document.createTextNode('four');
newLi.appendChild(liText);

// Append the li to the ul element.
ul.appendChild(newLi);

for(let i=0; orderedList.length; i++){
    orderedList[i].style.backgroundColor = 'green'
    // console.log(orderedList[i]);
}

containerSection.removeChild(footer);