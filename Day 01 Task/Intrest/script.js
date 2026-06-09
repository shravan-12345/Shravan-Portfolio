function calculateSI() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    let si = (p * r * t) / 100;

    document.getElementById("resultBox").innerHTML =
        "SI = " + si.toFixed(2);
}

function calculateCI() {
    let p = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    let t = parseFloat(document.getElementById("time").value);

    let amount = p * Math.pow((1 + r / 100), t);
    let ci = amount - p;

    document.getElementById("resultBox").innerHTML =
        "CI = " + ci.toFixed(2);

}