//Step:1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldAmountString);

    withdrawField.value = '';
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousDepositTotalString = withdrawTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousDepositTotalString);


    const newWithdrawTotal = previousBalanceTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotalElement.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    const newBalanceTotal = balanceTotalAmount - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    console.log(withdrawFieldAmoun);

})