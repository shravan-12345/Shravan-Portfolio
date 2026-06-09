
        function celsiusToFahrenheit() {
            let celsius = parseFloat(document.getElementById("temp").value);
            let fahrenheit = (celsius * 9/5) + 32;

            document.getElementById("result").innerHTML =
                celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
        }

        function fahrenheitToCelsius() {
            let fahrenheit = parseFloat(document.getElementById("temp").value);
            let celsius = (fahrenheit - 32) * 5/9;

            document.getElementById("result").innerHTML =
                fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
        }
