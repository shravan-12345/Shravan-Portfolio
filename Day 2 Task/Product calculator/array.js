function calculatePrice() {

    let input = document.getElementById("prices").value;

    let prices = input.split(",").map(Number);

    let total = prices.reduce(function(sum, price) {
        return sum + price;
    }, 0);

    let average = total / prices.length;

    document.getElementById("resultBox").innerHTML =
        "<b>Product Prices:</b> " + prices.join(", ") + "<br><br>" +
        "<b>Total Amount:</b> Rs. " + total + "<br><br>" +
        "<b>Average Product Price:</b> Rs. " + average.toFixed(2);
}