document.getElementById("deposit-button").addEventListener("click",function(){
    // after click get the input form the input field
    const depositInputField = document.getElementById("deposit-input");
    const depositInputText = depositInputField.value;
    if(parseFloat(depositInputText )<= 0 ) {
        return alert("please provide more then  0")
    }

    // get the previous deposit and update deposit total


    const previousDepositTotal = document.getElementById("deposit-total");
    const depositText = previousDepositTotal.innerText

    const totalDeposit = parseFloat(depositInputText) + parseFloat(depositText)

    previousDepositTotal.innerText = totalDeposit;

    // balance update
    const previousBalance = document.getElementById("Balance-total");
    const previousBalanceText = previousBalance.innerText;
    const newBalance = parseFloat(previousBalanceText) + parseFloat(depositInputText);
    previousBalance.innerText = newBalance;


    // clear the input filed

    depositInputField.value = ""
})

document.getElementById("withdraw-button").addEventListener("click",function(){
    const withdrawInputField = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInputField.value;
    const  withdrawInputNumber = parseFloat(withdrawInputText)
    if(withdrawInputNumber <= 0 ) {
        return alert("please provide more then  0")
    }



    const previousWithdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotalText = previousWithdrawTotal.innerText;
    const previousWithdrawTotalNumber = parseFloat(previousWithdrawTotalText);

    const newWithdrawTotal = withdrawInputNumber + previousWithdrawTotalNumber;
    previousWithdrawTotal.innerText = newWithdrawTotal

    const previousBalance = document.getElementById("Balance-total");
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceNumber = parseFloat(previousBalanceText)
    const newBalance = previousBalanceNumber - withdrawInputNumber;

    previousBalance.innerText = newBalance
    withdrawInputField.value = "";
})