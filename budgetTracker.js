// Selecting elements
const descriptionInput = document.getElementById("expense-description");
const amountInput = document.getElementById("expense-amount");
const addButton = document.getElementById("add-expense");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total-amount");

// Function to add an expense
function addExpense() {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (!description || !amount || isNaN(amount)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.innerHTML = `${description} - $${amount.toFixed(2)}`;
    
    // Append list item to expense list
    expenseList.appendChild(li);

    updateTotal();

    // Clear input fields
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

