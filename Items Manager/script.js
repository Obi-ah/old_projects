var delete_buttons = document.querySelectorAll('#delete')

for (let button of delete_buttons){
    button.addEventListener('click', deleteFunction)
}

var submit = document.querySelector('#submit')
submit.addEventListener('click', addFunction)
var add_field = document.querySelector('#addField')
add_field.addEventListener('keyup', EnterkeyFunction)

var filter_field = document.querySelector('#filter')
filter_field.addEventListener('keyup', searchFunction)


function deleteFunction(e){
    // console.log(e)
    button = e.target
    button.parentElement.remove()
}

function addFunction() {
    add_field = document.querySelector('#addField')

    var new_item = document.createElement('li')
    new_item.innerHTML = add_field.value +'<button id="delete">X</button>'
    new_item.firstElementChild.addEventListener('click', deleteFunction)
    add_field.value = ''
 
    var items_list = document.querySelector('ol')
    items_list.appendChild(new_item)
}

function EnterkeyFunction(e){
    // console.log(e)
    if (e.key == 'Enter') {
        addFunction()
    }
}

function searchFunction(e){
    // console.log(e)
    var filter_text = document.querySelector('#filter').value
    // console.log(filter_text)

    var items_list = document.querySelector('ol')
    items = items_list.children

    for (let item of items) {
        if (item.firstChild.textContent.toLowerCase().includes(filter_text.toLowerCase()) != true)
        item.style.display = 'none'
        else {
        item.style.display = 'block'
        }
    }

    
}