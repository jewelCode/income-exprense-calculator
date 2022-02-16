document.getElementById("calculation").addEventListener("click", function(){
    const inputIncome = document.getElementById("input-income").value;
    const totalIncome = parseInt(inputIncome);
    if(totalIncome < 0){
        alert("please input positive values")
    }
    // Food Expenses
    const inputFoodExpenses = document.getElementById("input-food-expenses").value;
    const foodExpenses = parseInt(inputFoodExpenses);
    if(foodExpenses < 0){
        alert("please input positive values")
    }
    // Rent Expenses

    const inputRentExpenses = document.getElementById("input-rent-expenses").value;
    const rentExpenses = parseInt(inputRentExpenses);
    if(rentExpenses < 0){
        alert("please input positive values")
    }
     // Clothes Expenses
    const inputClothesExpenses = document.getElementById("input-clothes-expenses").value;
    const clothesExpenses = parseInt(inputClothesExpenses);
    if(clothesExpenses < 0){
        alert("please input positive values")
    }
    
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    // console.log(totalExpenses);
    
    const expenses = document.getElementById("expenses");
    expenses.innerText = totalExpenses;

    // Total Balance Amount
    const balance = totalIncome - totalExpenses;
    const totalBalance = document.getElementById("balance");
    totalBalance.innerText = balance;
    // Saving Amount

    // const savingAmount = balance * .20;
    // const totalSaving = document.getElementById("saving");
    // totalSaving.innerText = savingAmount;

    // Remaining Balance Amount
    // const remainingBalance = balance - savingAmount;
    // const totalRemainingBalance = document.getElementById("remaining");
    // totalRemainingBalance.innerText = remainingBalance;

})

document.getElementById("save").addEventListener("click", function(){
    
    
})




