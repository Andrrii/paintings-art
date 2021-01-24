import {timeout} from "./modals"
import {postData} from "../services/requests"

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]'),
          message ={
            loading : "Загрузка...",
            success: "Дякуємо ! Найбижчим часом  ми   зателефонуємо вам",
            failure:"Ой! Щось не так :( ",
            spinner: "assets/img/spinner.gif",
            ok: "assets/img/ok.png",
            fail: "assets/img/fail.png" 
        },

        path = {
            designer: "assets/server.php", /* Для форми із зображенням */
            question: "assets/question.php"
        };

        
    

    //

    const clearInput = () => {
        inputs.forEach(input => {
            input.value = ""
        })
        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран" // Попередній елемент

        })
    }


    upload.forEach(item => { /* Загрузка зображення на калькулятор |drag and drop| */
                    item.addEventListener("input",(event) => {
                    console.log(item.files[0])
                    let dots; // Якщо ім'я картинки занадто довге то ставим |...+.png|
                    const arr = item.files[0].name.split('.')
                    arr[0].length >6 ? dots = "... + ." : dots = "."
                    const name = arr[0].substring(0,6) + dots + arr[1]
                    item.previousElementSibling.textContent = name // Попередній елемент
            })
        })
    
    form.forEach(item => {
        item.addEventListener('submit',(event) => {
            event.preventDefault()

            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            item.parentNode.appendChild(statusMessage) 

            item.classList.add('animated', 'fadeOutUp')
            setTimeout (() =>{
                item.style.display = "none"
            } ,400)

            let statusImg = document.createElement('img') 
            statusImg.setAttribute('src',message.spinner)
            statusImg.classList.add('animated','fadeInUp')
            statusMessage.appendChild(statusImg)    

            let textMessage = document.createElement('div')
            textMessage.textContent = message.loading
            statusMessage.appendChild(textMessage)

            const formData = new FormData(item)
            let api;

            // Шукає значення у прарoдителей
            // ".popup-design" - Для зображень
            item.closest(".popup-design") || item.classList.contains('calc_form')  ? api = path.designer : api = path.question;
            console.log(api)

            postData(api,formData)
            .then(res =>{
                console.log(res)
                statusImg.setAttribute('src',message.ok)
                textMessage.textContent = message.success

                clearTimeout(timeout)
            }).catch((e) =>{
                console.log(e)
                statusImg.setAttribute('src',message.fail)
                textMessage.textContent = message.failure;
            }).finally(() => {
                clearInput()
                setTimeout(() => {
                    statusMessage.remove()
                    item.style.display = "block"
                    item.classList.remove('fadeOutUp')
                    item.classList.add('fadeInUp')

                } ,4000)  
            })        
            
        })
    })

    
    
}

export default forms;