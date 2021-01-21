const checkTextInputs = (selector) => {
    //Заполнение имени и комментария - только на русском языке.
    
    const inputs  = document.querySelectorAll(selector)

    inputs.forEach(input => {
        input.addEventListener("keypress",function(e){
            if( e.key.match(/[^а-яё 0-9]/ig) ){
                e.preventDefault()
            }
           
        })
        input.addEventListener("blur",function(e){
            if( input.value.matchAll(/[^a-z]/ig) ){
                input.value = "Только русские буквы!!!"
                setTimeout(() => {input.value = ""},1800)
                
            }
        })
    })
}   
export default checkTextInputs