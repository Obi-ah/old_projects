var images = document.querySelectorAll('img')

for(let image of images){
    image.addEventListener('click', expandFunction)
}

function expandFunction(e){
    e.target.className = 'active'
    
    for (let img of e.target.parentElement.children){
        if (img != e.target){
            img.className = 'inactive'
        }
    }

}