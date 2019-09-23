let title = document.getElementById('title')
let displayToDo = document.getElementById('displayToDo')
title.textContent = "DOM Manipulation";

let tableRowE = document.querySelectorAll('.table-row:nth-child(even)');
let tableRowO = document.querySelectorAll('.table-row:nth-child(odd)');

tableRowE.forEach(r => {
    r.style.color = "Black"
    r.style.backgroundColor = "White"
})
tableRowO.forEach(r => {
    r.style.color = "White"
    r.style.backgroundColor = "Black"
})
function submitButton(){
    const jeromeValue = document.getElementById('jerome').value
    document.getElementById("comments").innerHTML = `<b>Comment:<b/> ${jeromeValue}`
    let timeSubmitted = document.getElementById("dateTime").innerHTML =  `<b>Time submitted:<b/> ${document.lastModified}`
    let postButtonId = document.getElementById("postButtonsId").innerHTML = `<b>What is the post buttons id:<b/> ${document.getElementById("Submit").id}`
}

function addToDo(e){e.preventDefault()
    Li = document.createElement('li')
    Li.append(document.createTextNode(document.getElementById('toDoInput').value))
    displayToDo.append(Li)   

}
document.getElementById('toDoSender').addEventListener('submit',addToDo)
document.getElementById('Submit').addEventListener('click', submitButton);

