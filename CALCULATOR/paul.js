let firstnumber=''
let currentinput=''
let operator=''

function appendNumber(num){
    currentinput +=num;
    document.getElementById('display').value = `${firstnumber} ${operator} ${currentinput}`;

}
function setOperator(op){
    
    if(currentinput=='')return
    if(firstnumber!==''){
        calculate();
       
    }
    operator=op
    firstnumber=currentinput
    currentinput=''
    document.getElementById('display').value = `${firstnumber} ${operator}`;

}
function calculate(){
    if(firstnumber===''||currentinput===''||operator==='') return;
    let result;
    let num1=parseFloat(firstnumber)
    let num2=parseFloat(currentinput)


    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        default:
            return;
    }

    document.getElementById('display').value = `${num1} ${operator} ${num2} = ${result}`;
    firstnumber = result.toString();
    currentinput= '';
    operator = '';
}

function cleardisplay(){
    firstnumber='';
    currentinput=''
    operator=''
    document.getElementById('display').value=''
}