function accordion(triggersSelector,itemsSelector){
    const btns = document.querySelectorAll(triggersSelector);

    //#region First variant
         // blocks = document.querySelectorAll(itemsSelector);

          
    // blocks.forEach(block => {
    //     block.classList.add('animated','fadeInDown')
    // });
    
    // btns.forEach(btn => {
    //     btn.addEventListener('click',function() {
    //         if(!this.classList.contains('active')) {
    //             btns.forEach(btn => {btn.classList.remove('active', 'active-style')});
    //             this.classList.add('active', 'active-style')
    //         }
    //     })
    // })
    //#endregion

    //Second variant || using jS animation
    
    btns.forEach(btn => {
        btn.addEventListener('click',function() {
            this.classList.toggle('active-style')
            this.nextElementSibling.classList.toggle('active-content')

            if(this.classList.contains("active-style")){
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 +"px" // this.nextElementSibling.scrollHeight -- Висота контенту
            }else{this.nextElementSibling.style.maxHeight = "0px"}
        })
    })

}

export default accordion