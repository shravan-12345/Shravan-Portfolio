function analyzeMarks() {

    let marks = [
        Number(document.getElementById("m1").value),
        Number(document.getElementById("m2").value),
        Number(document.getElementById("m3").value),
        Number(document.getElementById("m4").value),
        Number(document.getElementById("m5").value)
    ];

    let total = 0;

    for(let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    let average = total / marks.length;
    let highest = Math.max(...marks);
    let lowest = Math.min(...marks);
    let percentage = (total / 500) * 100;

    document.getElementById("result").innerHTML =
        "<b>Entered Marks:</b> " + marks.join(", ") + "<br><br>" +
        "<b>Percentage:</b> " + percentage.toFixed(2) + "%<br>" +
        "<b>Total Marks:</b> " + total + "<br>" +
        "<b>Average Marks:</b> " + average.toFixed(2) + "<br>" +
        "<b>Highest Mark:</b> " + highest + "<br>" +
        "<b>Lowest Mark:</b> " + lowest;
}