function withdraw() {

    let balance = parseFloat(document.getElementById("balance").value);
    let amount = parseFloat(document.getElementById("amount").value);

    if (amount <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter a valid withdrawal amount.";
    }
    else if (amount > balance) {
        document.getElementById("result").innerHTML =
            "Insufficient Balance!";
    }
    else {
        balance = balance - amount;

        document.getElementById("result").innerHTML =
            "Withdrawal Successful! <br>Remaining Balance: " + balance;
    }
}