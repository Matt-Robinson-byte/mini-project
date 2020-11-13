

export const makeElement = (name, inner,display ) =>{
    let el = document.createElement('div')
    el.className = name
    el.innerHTML = inner
    el.style.display = display
    return el
}


export const doClose = function (btn) {
    btn.currentTarget.parentNode.remove()
}