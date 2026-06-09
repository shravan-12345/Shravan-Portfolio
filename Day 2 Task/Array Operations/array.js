let arr = [10, 20, 30];

function displayArray(message){
    document.getElementById("result").innerHTML =
        "<b>" + message + "</b><br><br>" +
        "Current Array: " + arr.join(", ");
}

function showArray(){
    displayArray("Original Array");
}

function addElement(){
    arr.push(40);
    displayArray("40 has been added at the end of the array.");
}

function removeElement(){
    let removed = arr.pop();
    displayArray(removed + " has been removed from the end of the array.");
}

function addFirst(){
    arr.unshift(5);
    displayArray("5 has been added at the beginning of the array.");
}

function removeFirst(){
    let removed = arr.shift();
    displayArray(removed + " has been removed from the beginning of the array.");
}