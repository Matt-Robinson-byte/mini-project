export let getLocation = function (evt){
    let location  = document.querySelector('city')
    return location
    
}

let submit = document.querySelector('#submit')
submit.addEventListener('click', getLocation)