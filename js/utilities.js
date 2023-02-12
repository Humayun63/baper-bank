function getValueFromInput(inputId){
    const inputField =  document.getElementById(inputId);
    const value = parseFloat(inputField.value);
    inputField.value = '';
    return value;
}

function getTextById(inputId){
    const textElement = document.getElementById(inputId);
    const value = parseFloat(textElement.innerText);
    return value;
}

function addCurrentValue(inputId, newValue){
    document.getElementById(inputId).innerHTML = newValue;
}