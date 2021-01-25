
const drop = () => {
    // загрузчик файлов на чистом JavaScript
    
    // drag *
    // dragend *
    // dragenter - объект над dropArea
    // dragexit *
    // dragleave - объект за пределами dropArea
    // dragover - объект зависает над dropArea
    // dragstart *
    // drop - объект отправлен в dropArea


    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter','dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName,preventDefaults,false)
        })
    });

    function preventDefaults(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    function highlights(item) /* Підсвічуєм |input| */ {
        item.closest('.file_upload').style.border = "3px solid green";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .4)";
    }
    function unhighlights(item) /* забираєм підсвітку |input| */ {
        item.closest('.file_upload').style.border = "none";
        if (item.closest('.calc_form')){
            item.closest('.file_upload').style.backgroundColor = "#fff"; 
        }else{
        item.closest('.file_upload').style.backgroundColor = "#ededed";}
    }

    ['dragenter','dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName,() => highlights(input),false)
        })
    });
    ['dragleave','drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName,() => unhighlights(input),false)
        })
    });

    // Коли юзер закинув фото
    fileInputs.forEach(input => {
        input.addEventListener('drop',(e) => {
            input.files = e.dataTransfer.files // Передаєм значення в |input|
            let dots; // Якщо ім'я картинки занадто довге то ставим |...+.png|
            const arr = input.files[0].name.split('.')
            arr[0].length >6 ? dots = "... + ." : dots = "."
            const name = arr[0].substring(0,6) + dots + arr[1]
            input.previousElementSibling.textContent = name // Попередній елемент
    
        })
    })
}

export default drop