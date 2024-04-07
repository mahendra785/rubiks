var color = "";

function select(x) {
    if (x == 1) {
        color = "white";
    }
    if (x == 2) {
        color = "blue";
    }
    if (x == 3) {
        color = "red";
    }
    if (x == 4) {
        color = "green";
    }
    if (x == 5) {
        color = "orange";
    }
    if (x == 6) {
        color = "yellow";
    }
}

function fill(x) {
    var div = document.getElementById(x);
    div.style.backgroundColor = color;
}

function solve() {
    var str = "";
    for (let i = 1; i <= 54; i++) {
        let box = document.getElementById(i);
        const col = box.style.backgroundColor;
        if (col == "white") {
            str += "D";
        }
        if (col == "blue") {
            str += "L";
        }
        if (col == "red") {
            str += "F";
        }
        if (col == "yellow") {
            str += "U";
        }
        if (col == "green") {
            str += "R";
        }
        if (col == "orange") {
            str += "B";
        }
    }

alert(str);
}
