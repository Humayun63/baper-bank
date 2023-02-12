document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdraw = getValueFromInput('withdraw-filed');
    const oldWithdrawAmount = getTextById('withdraw');
    const oldBalanceAmount = getTextById('balance');
    if (newWithdraw > oldBalanceAmount) {
        alert('Baper Bank A Eto Taka Nai!');
        document.getElementById('withdraw-filed').value = '';
    } else {
        const newWithdrawAmount = newWithdraw + oldWithdrawAmount;
        const newBalanceAmount = oldBalanceAmount - newWithdraw;
        addCurrentValue('withdraw', newWithdrawAmount);
        addCurrentValue('balance', newBalanceAmount);
    }
})