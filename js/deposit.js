document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getValueFromInput('deposit-filed');
    if (isNaN(newDepositAmount)) {
        alert('Enter An Amount!')
    } else {
        const oldDepositAmount = getTextById('deposit');
        const oldBalanceAmount = getTextById('balance');
        const currentDepositAmount = newDepositAmount + oldDepositAmount;
        const currentBalanceAmount = newDepositAmount + oldBalanceAmount;
        addCurrentValue('deposit', currentDepositAmount);
        addCurrentValue('balance', currentBalanceAmount);

    }
})