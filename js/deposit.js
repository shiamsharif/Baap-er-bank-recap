// 1. Add event listener to the deposit button

// 2. get deposit amount from the deposit input field
// 2-5. Convert string to number

// 3. clear the deposit input field after getting the value

// 4. get the previous deposit total]

// 5. Calculate new deposit total

 

//step:1
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step:2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step:3
    depositField.value = '';

    //step:4
    const deposiTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString =  deposiTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //Step:5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    deposiTotalElement.innerText = newDepositTotal;

    console.log( newDepositAmount);
} )
