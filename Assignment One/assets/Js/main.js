const submitBtn = document.getElementById('submit')
let displayToDo = document.getElementById('Unit name')
let unitDetails = document.getElementById('unit details')
const xhr = new XMLHttpRequest()
var unit;

function buttonClick() {
    xhr.open('GET', 'units.json',true)
    xhr.onload = () => {
        if(xhr.status === 200) {
            unit = JSON.parse(xhr.responseText)
            for(var key in unit) {
                Li = document.createElement('li')                
                Li.append(document.createTextNode(unit[key].name))
                displayToDo.append(Li)
                Li.addEventListener('click', print)  
            }
        }       
    }
    xhr.send();
}

function print() {
    document.getElementById('name').innerHTML = unit[this.innerHTML].name
    document.getElementById('cost').innerHTML = unit[this.innerHTML].cost
    document.getElementById('unitDescription').innerHTML = unit[this.innerHTML].unitDescription
    document.getElementById('flavorText').innerHTML = unit[this.innerHTML].flavorText
    document.getElementById('imageLink').src = unit[this.innerHTML].imageLink
}

document.addEventListener('DOMContentLoaded', buttonClick)
//submitBtn.addEventListener('click', buttonClick)