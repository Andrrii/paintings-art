const sliders = (slides,direction,prev,next) => {
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slides);
          

    function showSlides(n){
        if (n > items.length){
            slideIndex = 1
        }
        if (n<1){
            slideIndex = items.length
        }

        items.forEach(item => {
            item.classList.add('animated')
            item.style.display = "none"
        })

        items[slideIndex-1].style.display = 'block'
    }

    showSlides(slideIndex)

    function changeSlides(n) {
        showSlides(slideIndex+=n)
    }

    try{
            
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next)

        prevBtn.addEventListener('click',(event) => {
            changeSlides(-1)
            items[slideIndex-1].classList.remove('slideInLeft')
            items[slideIndex-1].classList.add('slideInRight')
            clearInterval(paused)
            setTimeout(() => activeAnimation(5000),5000)
            
        })      

        nextBtn.addEventListener('click',(event) => {
            changeSlides(1)
            items[slideIndex-1].classList.remove('slideInRight')
            items[slideIndex-1].classList.add('slideInLeft')
            clearInterval(paused)
            setTimeout(() => activeAnimation(5000),5000)
        })
        
    }
    catch(e){}
    function activeAnimation(time) {
        if (direction === "vertical") {
                paused = setInterval(() => {
                changeSlides(1)
                items[slideIndex-1].classList.add('slideInDown')
            },5000)
        }else{
                paused = setInterval(() => {
                changeSlides(1)
                items[slideIndex-1].classList.remove('slideInRight')
                items[slideIndex-1].classList.add('slideInLeft')
        },time)}
    }
    activeAnimation(5000)
    if (direction === "vertical") {
    items[0].parentNode.addEventListener('mouseenter',() => { // Коли наводим мишу на слайдер то анімація зупиняється
        clearInterval(paused)
    })
    items[0].parentNode.addEventListener('mouseleave',() => {
        activeAnimation(5000)
    })
}
    
 }



export default sliders