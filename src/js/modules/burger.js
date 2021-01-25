const burger = (menuSelector, burgerSelector) =>{
    /* На планшетной версии (992 и меньше ширина) при клике на гамбургер - должно показываться подменю. Если человек разворачивает планшет и ширина становится
     больше - оно скрывается.
    */

    const menuElem = document.querySelector(menuSelector),
          burgerElem = document.querySelector(burgerSelector);


    menuElem.style.display = "none" 
    
    burgerElem.addEventListener('click',() => {
        if (menuElem.style.display == "none" && window.screen.availWidth <= 993 /* Ширина екрану (без status-bar) */){
            menuElem.style.display = "block"
        }else{menuElem.style.display = "none"}
    })

    window.addEventListener('resize',() => {
        if (window.screen.availWidth > 992){
            menuElem.style.display = "none"
        }
    })

}

export default burger