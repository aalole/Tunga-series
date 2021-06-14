const startApp = () => {
    document.addEventListener('DOMContentLoaded', ()=> {
       const h1 = document.getElementById('change_heading');
       const colorDivs = document.querySelectorAll('section div');
       const section = document.querySelector('section')

    //    Changing h1 TextContent
       h1.innerText = 'Hello World!';
    //    showing hovered color
        for (let i = 0; i < colorDivs.length; i++) {
            const element = colorDivs[i];
            console.log(element);
            element.addEventListener('mouseover', function(){
                element.style.cursor = 'pointer';
                const colorName = element.className;
                const textToShow = document.createTextNode(colorName);
                element.appendChild(textToShow)
            })
        };

        const newDiv = document.createElement('div');
        newDiv.className = 'purple'
        newDiv.style.backgroundColor = 'purple';
        const lastSectionChild = document.querySelector('.yellow');
        lastSectionChild.parentNode.insertBefore(newDiv, lastSectionChild.nextSibling );

        
        // 2 pseudoCode
        const body = document.body
        function race(){
            const car1 = document.querySelector('.car1');  
            const car2 = document.querySelector('.car2');
            let initialPos = 0; 
            if(initialPos < window.outerWidth){
              const car1disTanceToCoverInMinTime = Math.random() * window.outerWidth + 'px';
              const car2disTanceToCoverInMinTime = Math.random() * window.innerWidth + 'px';
              car1.style.marginLeft = car1disTanceToCoverInMinTime;
              car2.style.marginLeft = car2disTanceToCoverInMinTime;
            } 
             
          }
        function moveCar(){
            const btn = document.querySelector('button');
             
            btn.addEventListener('click', race)
        }

        if(body.classList.contains('body')){
            moveCar()
        }
    })
}

startApp()