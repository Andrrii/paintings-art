const checkTextInputs = async (selector) =>  {
    //Заполнение имени и комментария - только на русском языке.
    const inputs  = document.querySelectorAll(selector)

    inputs.forEach(input => {
        input.addEventListener("keypress",function(e){
            if( e.key.match(/[^а-яё0-9]/ig) ){
                e.preventDefault()
                
            }else{input.style.cssText =   `
            border:none;
            `}
           
        })
        input.addEventListener("blur",function(e){
            let target = e.target;
            if( input.value.match(/[a-ik-tvxyz]/ig) ){
                //input.value = "Только русские буквы!!!"
                input.value = ""
                let test = input.getAttribute("placeholder")
                let res = "Только русские буквы!!!"
                
                input.setAttribute("placeholder",res)
               input.style.cssText =   `
               border:3px dashed red;
               `          
                setTimeout(() => {
                    input.setAttribute("placeholder",test);
                },1500)
               
            }else{input.style.cssText =   `
            border:none;
            `}
        })
    })
   
}   
export default checkTextInputs