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
    

    // Total Balance Amount
    const balance = totalIncome - totalExpenses;
    console.log(balance);

    // Saving Amount

    const savingAmount = balance * .20;
    console.log(savingAmount);

    // Remaining Balance Amount

    const remainingBalance = balance - savingAmount;
    console.log(remainingBalance);

})