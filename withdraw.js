document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawTotalString = withdrawField.value;
    const newWithdrawTotal = parseFloat(newWithdrawTotalString)
   
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);
    
    const currentWithdraw = newWithdrawTotal + previousWithdraw ;
    previousWithdrawElement.innerText = currentWithdraw;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceAmount = parseFloat(balanceTotalString);

    const currentBalance = balanceAmount - newWithdrawTotal ;
    balanceTotalElement.innerText = currentBalance;
    
       

    withdrawField.value = '';
})