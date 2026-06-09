function filterNumbers() {
 
    let input = document.getElementById("numbers").value;

    let numbers = input.split(",").map(Number);
  
    let evenNumbers = numbers.filter(function(num) {
        return num % 2 === 0;
    });
  
    let oddNumbers = numbers.filter(function(num) {
        return num % 2 !== 0;
    });

    document.getElementById("original").innerHTML =
        "Entered Numbers: " + numbers.join(", ");

    document.getElementById("even").innerHTML =
        "Even Numbers: " + evenNumbers.join(", ");

    document.getElementById("odd").innerHTML =
        "Odd Numbers: " + oddNumbers.join(", ");
}