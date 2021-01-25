import { timeout } from "./modals";

const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector)
    window.addEventListener("scroll", () => {
        if(document.documentElement.scrollTop > 1650)/* якщо прогортали вниз на 1650 */ 
        {
            upElem.classList.add("animated","fadeInUp")
            upElem.classList.remove("fadeOut")

        }else{
            upElem.classList.add("fadeOut")
            upElem.classList.remove("fadeInUp")

        }
    });

    //#region  firt variant(simple)
    // Плавний скролл наверх або в іншу позицію

    // const element = document.documentElement,
    //       body = document.body; /* for different browsers */

    // const calcScroll = () => {
    //     upElem.addEventListener("click",function(e){
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop) // Скіль пролистали донизу
    //         if(this.hash !== ""){
    //         e.preventDefault()
    //         let hashElement = document.querySelector(this.hash) // елемент до якого гортаємо
    //         let hashElementTop = 0; // Скільки потрібно пролистати до батька цього елементу
    //         while( hashElement.offsetParent){
    //             hashElementTop += hashElementTop.offsetTop
    //             hashElement = hashElement.offsetParent
    //         } 
    //         hashElementTop = Math.round(hashElementTop)
    //         smoothScroll(scrollTop,hashElementTop,this.hash)
    //     }
    //     })
    // };

    // const smoothScroll = (from,to,hash) => {
    //     let timeInterval = 1,
    //         prevScrollTop,
    //         speed;
    //     if (to>from){speed = 30 /* Зверху вниз */}
    //     else{speed = -30}

    //     let move = setInterval(function(e){
    //         let scrollTop = Math.round(body.scrollTop || element.scrollTop) // Скіль пролистали донизу

    //         if (
    //             prevScrollTop === scrollTop ||
    //             (to > from && scrollTop >= to) ||
    //             (to < from && scrollTop <= to)
    //         ){
    //             clearInterval(move)
    //             history.replaceState   (history.state,document.title, location.href.replace(/#.*$/g,"")+hash)// Працюєм із адресною строкою
    //         }
    //         else{
    //             body.scrollTop += speed 
    //             element.scrollTop += speed
    //             prevScrollTop = scrollTop
    //         }
    //     },timeInterval)
    // };
    // calcScroll()
    //#endregion

    //  second variant | scrolling with animationFrame

    let links = document.querySelectorAll("[href^='#']"),
        speed = 0.3

    links.forEach(link => {
        link.addEventListener('click', function(e){
            e.preventDefault()

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top, /* Отримуєм верхню межу елементу */ 
                start = null;
            requestAnimationFrame(step)
            
            function step(time) {
                if (start === null) {
                    start = time
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop-progress/speed,widthTop + toBlock) : Math.min(widthTop+progress/speed,widthTop + toBlock)) /* Вичисляєм наскільки рухатись і в яку сторону */
                    document.documentElement.scrollTo(0,r)

                    if(r != widthTop + toBlock) {
                        requestAnimationFrame(step)
                    }else{location.hash = hash}
            }
        })
    })

}

export default scrolling