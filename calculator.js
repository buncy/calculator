class calculator{
constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear()
}

clear(){
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
}

delete(){

}

appendNumber(number){

}

chooseOperation(operation){

}

compute(){

}

updateDisplay(){
this.currentOperandTextElement.innerText
}










}
const numberButtons = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelectorAll('[data-allclear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new calculator(previousOperandTextElement,currentOperandTextElement){

}
numberButtons.forEach(button =>{
    button.addEventListener('click' , ()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})






















