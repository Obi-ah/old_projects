var signupin_links = document.querySelectorAll('.signupin a')

console.log(signupin_links)

// signupin_links.forEach(link => {
//     link.addEventListener('click', switch_form))
//     }

signupin_links.forEach(link => {
    link.addEventListener('click', switch_form)  
});

function switch_form(e){
    e.preventDefault()
    if (e.target.innerText == 'Sign up'){
        document.querySelector('.container.signin').classList.add('inactive')
        document.querySelector('.container.signup').classList.remove('inactive')
    }
    else if (e.target.innerText == 'Sign in'){
        document.querySelector('.container.signup').classList.add('inactive')
        document.querySelector('.container.signin').classList.remove('inactive')
    }

}
