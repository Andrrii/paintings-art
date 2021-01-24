import {getResource} from "../services/requests"

const showMoreStyles = (trigger,styles,wrapper) => {

    const btn = document.querySelector(trigger);

//   Простий спосіб без серверу
    //#region       
    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp')
    // })


    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg','hidden-md','hidden-sm','hidden-xs')
    //         card.classList.add('col-sm-3','col-sm-offset-0','col-xs-10','col-xs-offset-1')
    //     })
    //     btn.style.display = 'none' 
    //     btn.remove()
    // })
    //#endregion

    btn.addEventListener('click',() =>{
        //сервер
        getResource("http://localhost:3000/styles")
            .then(res =>createCards(res))
            .catch(error => console.log(error))
        btn.remove()
    })
    
    
    function createCards(response)/* Створюєм карточки з допомогою js */ {

        response.forEach(({src,title,link}) => /* src === item.src */ {
            let card = document.createElement('div')
            card.classList.add('animated','fadeInUp','col-sm-3','col-sm-offset-0','col-xs-10','col-xs-offset-1')

            card.innerHTML =    `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            
            `    ;

            document.querySelector(wrapper).appendChild(card)
        })

    }
    

}

export default showMoreStyles