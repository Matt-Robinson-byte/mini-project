import {ajax, corsFix} from "./ajax.js"
import {makeElement,doClose} from "./make-element.js"


let button = document.querySelector('#button')

console.log(button.innerHTML)

let addCard = function(){
        ajax(corsFix + "https://opentdb.com/api.php?amount=1",(resp)=>{
        let r = JSON.parse(resp)
        console.log(r)

        let q = makeElement('question',( (r.results[0].question)))
        let a = makeElement("answer", (r.results[0].correct_answer), 'none')
    
        let answer = document.createElement('button')
        
        answer.innerHTML = 'Answer'
        answer.addEventListener("click",() => showCard(a)) 
        let p = document.createElement('div')
        p.className = 'card'
        let closeButton = document.createElement('button')
        closeButton.innerHTML = "X"
        closeButton.className = 'closebutton'
        closeButton.addEventListener('click', doClose)
        
        p.append(q,answer,a,closeButton)
        document.body.append(p)
    })
}


let showCard = function(ans){
    if(ans.style.display === 'block'){
        ans.style.display = "none";
    }else{
        ans.style.display = 'block';

    }
}
    

button.addEventListener("click", addCard)



