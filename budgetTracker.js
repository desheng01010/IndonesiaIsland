// Selecting elements
const dayInput = document.getElementById("day");
const descriptionInput = document.getElementById("expense-description");
const amountInput = document.getElementById("expense-amount");
const addButton = document.getElementById("add-expense");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

// Function to add an expense
function addExpense() {
    const day = dayInput.value;
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (!day || !description || !amount || isNaN(amount)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.innerHTML = `${day}: ${description} - $${amount.toFixed(2)}`;
    
    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        li.remove();
        updateTotal();
    };
    
    // Append remove button to list item
    li.appendChild(removeButton);
    
    // Append list item to expense list
    expenseList.appendChild(li);

    updateTotal();

    // Clear input fields
    dayInput.value = "";
    descriptionInput.value = "";
    amountInput.value = "";
}

// Function to update total amount
function updateTotal() {
    let total = 0;
    expenseList.querySelectorAll("li").forEach(item => {
        const amountText = item.textContent.split("-")[1].trim().slice(1);
        total += parseFloat(amountText);
    });
    totalAmount.textContent = total.toFixed(2);
}

// Event listener for add expense button
addButton.addEventListener("click", addExpense);

