const toggle = document.querySelector('#toggle');
const nav = document.querySelector('nav');
document.addEventListener('click', (e)=> {
    if(e.target.id === 'toggle'){
        nav.classList.toggle('doc-links')
    }
})