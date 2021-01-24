import filter from "./filter"

const pictureSize = (imageSelector) => {
/* При наведении мыши на эти блоки:
Они должны заменяться картинкой:
Картинки подготовлены и лежат в папке img с постфиксами “-1”
Обрати внимание на верстку - там стоят заглушки этих картинок.
Когда мышь убирается с блока - все возвращается на места.
 */

    const blocks = document.querySelectorAll(imageSelector)
    
    function showImg(block) {
        const img  = block.querySelector('img')
        img.src = img.src.slice(0,-4)/* |-4|- обрізаєм 4 ост.символи */ + "-1.png"
        img.classList.add('animated','fadeIn')
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = "none"
        });
    }

    function hideImg(block) {
        const img  = block.querySelector('img')
        img.src = img.src.slice(0,-6) + ".png"
        img.classList.remove('animated','fadeIn')
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = "block"
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover',() => {
            showImg(block)
        });
        block.addEventListener('mouseout',() => {
            hideImg(block)
        });
    })

}

export default pictureSize