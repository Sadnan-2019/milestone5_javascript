// console.log("check")

let BalanneAfterExpence = 0;

function CalculteBalanceExpence() {
  const Income = document.getElementById("income-amount");
  const IncomeValue = parseInt(Income.value);
  // console.log(IncomeValue);
  const Food = document.getElementById("food-amount");
  const FoodValue = parseInt(Food.value);
  const Rent = document.getElementById("rent-amount");
  const RentValue = parseInt(Rent.value);
  const Cloth = document.getElementById("cloth-amount");
  const ClothValue = parseInt(Cloth.value);

  const TotalExpence = parseInt(FoodValue + RentValue + ClothValue);
  //   console.log(TotalExpence,"local");

  if (IncomeValue > TotalExpence) {
    const TotalExpenceText = document.getElementById("total-expence");

    TotalExpenceText.innerText = TotalExpence;
  } else {
    const TotalOverExpence = document.getElementById("total-over-expence");
    TotalOverExpence.style.display = "block";
    TotalOverExpence.style.color = "red";
  }

  // const TotalExpence = parseInt(FoodValue + RentValue + ClothValue);
  // //   console.log(TotalExpence,"local");
  // const TotalExpenceText = document.getElementById("total-expence");

  // TotalExpenceText.innerText = TotalExpence;

  // console.log(TotalExpence)
  // Income.value = "";
  Food.value = "";
  Rent.value = "";
  Cloth.value = "";

  TotalBalance(TotalExpence);

  // console.log(Balance)

  // console.log('click working')
}

function Validation() {
  const IncomeSave = document.getElementById("income-amount").value;
  const Food = document.getElementById("food-amount").value;
  const Rent = document.getElementById("rent-amount").value;
  const Cloth = document.getElementById("cloth-amount").value;

  // const IncomeSaveValue = parseInt(IncomeSave.value);
  const IncomeError = document.getElementById("income-error");
  const FoodError = document.getElementById("food-error");
  const RentError = document.getElementById("rent-error");
  const ClothError = document.getElementById("cloth-error");

  if (IncomeSave < 0 || IncomeSave == "") {
    IncomeError.style.display = "block";
    IncomeError.style.color = "red";
    return false;
  } else if (Food < 0 || Food == "") {
    FoodError.style.display = "block";
    FoodError.style.color = "red";
    return false;
  } else if (Rent < 0 || Rent == "") {
    RentError.style.display = "block";
    RentError.style.color = "red";
    return false;
  } else if (Cloth < 0 || Cloth == "") {
    ClothError.style.display = "block";
    ClothError.style.color = "red";
    return false;
  } else return true;
}
// const A = CalculteBalanceExpence("total-expence");
// console.log(A,"expence");
function TotalBalance(TotalExpence) {
  const Income = document.getElementById("income-amount");
  const IncomeValue = parseInt(Income.value);
  //   console.log(IncomeValue,"Income");

  // const Balance = IncomeValue - TotalExpence;
  //   const A = CalculteBalanceExpence("total-expence");

  if (IncomeValue > TotalExpence) {
    BalanneAfterExpence = IncomeValue - TotalExpence;
  }
  const BalanceText = document.getElementById("total-balance");

  BalanceText.innerText = BalanneAfterExpence;

  return BalanneAfterExpence;
}

function AfterSavings() {
  const BalanceExpence = BalanneAfterExpence;

  const IncomeSave = document.getElementById("income-amount");

  const IncomeSaveValue = parseInt(IncomeSave.value);
  // console.log(IncomeSaveValue);
  const SavingAmount = document.getElementById("saving-amount");
  const SavingAmountValue = parseInt(SavingAmount.value);
  const TotalSavingsAmount = document.getElementById("total-saving-amout");
  const TotalSavings = (IncomeSaveValue * SavingAmountValue) / 100;

  if (BalanceExpence < TotalSavings) {
    // console.log("its not possible");
    const OverSavings = document.getElementById("total-over-savings");
    OverSavings.style.display = "block";
    OverSavings.style.color = "red";
  } else if (BalanceExpence >= TotalSavings) {
    TotalSavingsAmount.innerText = TotalSavings;
  }

  // const TotalSavings = (IncomeSaveValue * SavingAmountValue) / 100;
  // const TotalSavingsAmount = document.getElementById("total-saving-amout");
  // TotalSavingsAmount.innerText = TotalSavings;

  // const BalanceExpence = BalanneAfterExpence;
  // console.log(BalanceExpence,"balaneexpnece");
  if (BalanceExpence > TotalSavings) {
    const Remaining = BalanceExpence - TotalSavings;
    const RemainngBalance = document.getElementById("remaining-balanace");
    RemainngBalance.innerText = Remaining;
  } else {
    const OverSavings = document.getElementById("total-over-savings");
    OverSavings.style.display = "block";
    OverSavings.style.color = "red";
  }
  // console.log(Remaining,"now remanin");

  SavingAmount.value = "";
  IncomeSave.value = "";
}

document.getElementById("calculte").addEventListener("click", function () {
  if (Validation()) {
    CalculteBalanceExpence();
  }
});

document.getElementById("after-saving").addEventListener("click", function () {
  // console.log("non saving");

  const SavingsValue = document.getElementById("saving-amount").value;
  const savingsError = document.getElementById("saving-amount-error");

  if (SavingsValue < 0 || SavingsValue == "") {
    // savingsError.style.display ="block";
    // savingsError.style.color ="red";
    alert("please enter valid number");
  } else {
    AfterSavings();
  }

  // console.log(TotalSavings);
});
