function getInputFiledValueById(inputFiledId) {
    const inputFiled = document.getElementById(inputFiledId);
    const inputFiledValueString = inputFiled.value;
    const inputFiledValue = parseFloat(inputFiledValueString);
    inputFiled.value = '';
    return inputFiledValue;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}