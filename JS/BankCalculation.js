//deposit button handle
document.getElementById("deposit-btn").addEventListener("click", function () {
  //get the money deposited
  const depoField = document.getElementById("deposit-money");
  // console.log(depoField);
  const depoMoneyText = depoField.value;
  const depoMoneyAmount = parseFloat(depoMoneyText);
  // console.log(depoMoney);
          //updated deposit total
  const depositTotal = document.getElementById("deposit-total");
  const PreviousDepositText = depositTotal.innerText;
  const PreviousDepositAmount = parseFloat(PreviousDepositText);
  const newDepositTotal = parseInt(PreviousDepositAmount + depoMoneyAmount);
  depositTotal.innerText = newDepositTotal;

  depoField.value = "";


//Total Balance updated
 const TotalBalance = document.getElementById('total-amount');
//  console.log(TotalBalnce);
//    TotalBalnce =newDepositTotal;

          const TotalBalanceText =TotalBalance.innerText;
          const newTotalBalance =parseFloat(TotalBalanceText);
          const CurreTotalBalance =newTotalBalance + depoMoneyAmount;
          TotalBalance.innerText =CurreTotalBalance;

          // console.log(TotalBalanceText);
});



document.getElementById('withdraw-btn').addEventListener('click',function(){

          const withdrawFiled =document.getElementById('withdraw-money');
          const withdrawText =withdrawFiled.value;


          const withDrawMoney = parseFloat(withdrawText);
          console.log(withDrawMoney);

          const withdrawTotalText=document.getElementById('withdraw-total');
          const PreviousWithdraw=withdrawTotalText.innerText;
          const PreviousWithdrawTotal=parseFloat(PreviousWithdraw);
          // withdrawTotalText.innerText =newWithdrawText;
          const newWithdrawTotal=PreviousWithdrawTotal + withDrawMoney;
          withdrawTotalText.innerText=newWithdrawTotal;


          const AfterWithdrawTotalBalance =document.getElementById('total-amount');
          const AfterWithdrawTotalBalanceText=AfterWithdrawTotalBalance.innerText;
          // console.log(AfterWithdrawTotalBalance);
          const ParseWithdrawAmount=parseFloat(AfterWithdrawTotalBalanceText);
          const CurreTotalBalanceWithDraw=ParseWithdrawAmount  - withDrawMoney;
          AfterWithdrawTotalBalance.innerText = CurreTotalBalanceWithDraw;

          withdrawFiled.value="";












});
