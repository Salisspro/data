const nameElem = document.getElementById('name')
const gmailElem = document.getElementById('gmail')
const passwordElem = document.getElementById('password')
let btnElem = document.getElementById('button')

//let output = document.createElement('div')

function call(){
    let output1 = nameElem.value;
    nameElem.innerText = output1;
    nameElem.value = ''
    

    let  output2 = gmailElem.value
    gmailElem.innerText = output2.value;
    gmailElem.value = ''

    let output3 = passwordElem.value;
    passwordElem.innerText = output3;
    passwordElem.value = ''
    console.log(output1, output2, output3)

    
}
btnElem.onclick = call;
