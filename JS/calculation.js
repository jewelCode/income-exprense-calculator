document.getElementById("calculation").addEventListener("click", function(){
    const inputIncome = document.getElementById("input-income").value;
    const totalIncome = parseInt(inputIncome);

    // Food Expenses
    const inputFoodExpenses = document.getElementById("input-food-expenses").value;
    const foodExpenses = parseInt(inputFoodExpenses);

    // Rent Expenses

    const inputRentExpenses = document.getElementById("input-rent-expenses").value;
    const rentExpenses = parseInt(inputRentExpenses);
  
     // Clothes Expenses
    const inputClothesExpenses = document.getElementById("input-clothes-expenses").value;
    const clothesExpenses = parseInt(inputClothesExpenses);
   
    
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    // console.log(totalExpenses);
    
    const expenses = document.getElementById("expenses");
    expenses.innerText = totalExpenses;

    // Total Balance Amount
    const balance = totalIncome - totalExpenses;
    
    const totalBalance = document.getElementById("balance");
    totalBalance.innerText = balance;
    // Saving Amount

    const savingAmount = balance * .20;
    const totalSaving = document.getElementById("saving");
    totalSaving.innerText = savingAmount;

    // Remaining Balance Amount
    const remainingBalance = balance - savingAmount;
    const totalRemainingBalance = document.getElementById("remaining");
    totalRemainingBalance.innerText = remainingBalance;

})




