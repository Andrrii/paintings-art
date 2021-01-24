import modals from "./modules/modals"
import sliders from "./modules/slider"
import forms from "./modules/forms"
import mask from "./modules/mask"
import checkTextInputs from "./modules/checkTextInputs"
import showMoreStyles from "./modules/showMoreStyles"

window.addEventListener('DOMContentLoaded',() => {
"use strict"

modals()
forms()
mask("[name='phone']")

sliders('.feedback-slider-item','horizontal','.main-prev-btn','.main-next-btn')

sliders('.main-slider-item','vertical')

checkTextInputs('[name="name"]')
checkTextInputs('[name="message"]')
showMoreStyles('.button-styles','.styles-2',"#styles .row")
})