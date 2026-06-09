function countText() {

    let text = document.getElementById("sentence").value;

    // Total Characters
    let characters = text.length;

    // Total Words
    let words = text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;

    // Total Vowels
    let vowels = text.match(/[aeiouAEIOU]/g);
    let vowelCount = vowels ? vowels.length : 0;

    document.getElementById("resultBox").innerHTML =
        "Total Words : " + words + "<br><br>" +
        "Total Characters : " + characters + "<br><br>" +
        "Total Vowels : " + vowelCount;
}