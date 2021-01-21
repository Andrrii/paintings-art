
// При натисненні на кнопку " Вызвать замерщика " відкривається мод. вікно
function openModal(selector) {
    const modal = document.querySelector(selector),
            scroll = calcScroll();
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
    document.body.style.marginRight = `${scroll}px`
    // use bootstrap class
    //document.body.classList.add('modal-open')
    clearTimeout(timeout)
    window.removeEventListener('scroll',showModalByScroll)
}
function calcScroll(){ /* Коли викликаєм модальне вікно то скрол заміняється на пустий блок  */
    let div = document.createElement('div')

    div.style.width = "50px"
    div.style.height = "50px"
    div.style.overflowY = "scroll"
    div.style.visibility = "hidden"

    document.body.appendChild(div)

    let scrollWidth = div.offsetWidth-div.clientWidth; // -- Отримуєм ширину прокрутки 
    
    div.remove()
    return scrollWidth;

}
const modals = (state) => {
    
    function bindModal(triggerSelector,modalSelector,closeSelector,destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');        
        
        trigger.forEach(item => {
            item.addEventListener("click" , (event) => {
                if (event.target) {
                    event.preventDefault() //  
                    
                        
                }
                if(destroy){
                    item.remove()
                }
                windows.forEach(window => {
                    window.style.display = 'none'
                    window.classList.add('animated',  'fadeIn')    // ADD Animation
                })
                
                openModal(modalSelector)
            })
        });
        close.addEventListener('click', () => {
            windows.forEach(window => {
                window.style.display = 'none'
            })
            modal.style.display = "none"
            document.body.style.overflow = ""
            document.body.style.marginRight = `0px`
            // use bootstrap class
            //document.body.classList.remove('modal-open')

        })


        modal.addEventListener('click' , (e) => {
            if( e.target === modal) /* Якщо клікаєм за межі самого модального вікна */ {
                windows.forEach(window => {
                    window.style.display = 'none'
                })
                modal.style.display = "none"
                document.body.style.overflow = ""
                document.body.style.marginRight = `0px`
            // use bootstrap class
            //document.body.classList.remove('modal-open')

            }
        })
    }

    

    window.addEventListener('scroll', showModalByScroll)
    bindModal('.button-design','.popup-design',".popup-design .popup-close")
    bindModal('.button-consultation','.popup-consultation',".popup-close")
    bindModal('.fixed-gift','.popup-gift',".popup-gift .popup-close",true)


    
}
function showModalByScroll() {
    /* Коли користувач долистав до кінця сторінки ,
        то відкриється модальне вікно */ 
        if (  /* подивитись урок 42 */
            window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) 
        {
            
        const bottomModalTimerId = setTimeout( () => 
        
            {
                try{
                /*openModal(".fixed-gift")*/
                document.querySelector('.fixed-gift').click()
            }catch(e){}},2500)
            //    console.log(bottomModalTimerId)
            //    clearInterval(bottomModalTimerId)
        }
        
    }

const timeout = setTimeout(() => {
    openModal('.popup-consultation')
}, 60000);
export default modals
export {timeout,calcScroll}