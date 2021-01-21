const mask = (selector) => {
    let setCursorPosition = (pos,elem) => {
        elem.focus()

        if (elem.setSelectionRange){
            elem.setSelectionRange(pos,pos) // Ставим курсор на вказаний елемент 
        }else if ( elem.createTextRange){ // for Internet Explorel and old browsers
            let range = elem.createTextRange()

            // internet
            //#region 
            /* 
                    015 -Range-TextRange-Selection
                    https://learn.javascript.ru/range-textrange-selection

                    015 HTMLInputElement.setSelectionRange-
                    https://developer.mozilla.org/ru/docs/Web/API/HTMLInputElement/setSelectionRange

                    015 RegExp.prototype.test-
                    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

                    015 String.prototype.replace-
                    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace

            
            */
            //#endregion

            range.collapse(true) //read in the internet 
            range.moveEnd("character",pos)//read in the internet
            range.moveStart("character",pos)//read in the internet
            
            range.select()//read in the internet
        }
    }
    
    /*  Необходима маска или валидация номера телефона (нужное кол-во чисел, код). */
    function createMask(event) {
        let matrix = '+38 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length){
            val = def
        }

        this.value = matrix.replace(/./g,function(a){ // Це |value| буде відображатись на сторінці
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a; // lesson 15 !!!!
        })

        if(event.type === 'blur')  // Якщо нажали за межі input  і маска пуста то поле очиститься 
        {
            if (this.value.length == 3){
                this.value = ""
            }
        }else{
            setCursorPosition(this.value.length,this)
        }
    } 


    let inputs = document.querySelectorAll(selector)

    inputs.forEach(input => {
        input.addEventListener("input",createMask)
        input.addEventListener("focus",createMask)
        input.addEventListener("blur",createMask)

        

    })
}

export default mask