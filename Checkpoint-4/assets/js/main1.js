//let title = document.getElementById('title')
//title.textContent = "DOM Manipulation";

const dataTxtBtn = document.getElementById('data-txt-btn')
const ajaxJsonBtn = document.getElementById('ajax-json-btn');

const xhr = new XMLHttpRequest()

//function submitButton(){
//    const jeromeValue = document.getElementById('jerome').value
//    document.getElementById("comments").innerHTML = `<b>Comment:<b/> ${jeromeValue}`
//    let timeSubmitted = document.getElementById("dateTime").innerHTML =  `<b>Time submitted:<b/> ${document.lastModified}`
//    let postButtonId = document.getElementById("postButtonsId").innerHTML = `<b>What is the post buttons id:<b/> ${document.getElementById("Submit").id}`
//}

const loadText = () => {
    xhr.open('GET', 'lorem.txt', true)
    xhr.onload = () => {
        if (xhr.status === 200)
            document.getElementById('textButton').innerHTML = xhr.responseText
        else if (xhr.status === 404) {
            console.log('File not found.')
        }
    }
    xhr.send()
}

const loadJson = () => {
    xhr.open('GET', 'person.json', true);
    xhr.onload = () => {
        if (xhr.status === 200) {
            const person = JSON.parse(xhr.responseText)
            let output = ''
            person.forEach(p => {
                const {id, firstname, lastname} = p
                output += `
                <li> ID: ${id}</li>
                <li> Last name: ${firstname}</li>
                <li> First name: ${lastname}</li>
                <br />
                `
            });
            document.getElementById('json-list').innerHTML = output
        }
        else if (xhr.status === 404) {
            console.log('File not found.')
        }
    }
    xhr.onerror = () => {
        console.log('file not found.', xhr.load)
    }
    xhr.send();
}

//document.getElementById('Submit').addEventListener('click', submitButton);
dataTxtBtn.addEventListener('click', loadText);
ajaxJsonBtn.addEventListener('click',loadJson);
