function showMessage() {
    alert("Thanks for visiting! I'm ECE grad Jameer, learning Full Stack. Hire me!");
}

function changeColor() {
    document.body.style.backgroundColor = "#1e293b";
    document.querySelector("h1").innerHTML = "Hi, I'm Jameer - ECE to Dev ⚡";
}
function calculateVoltage() {
    let i = document.getElementById("current").value;
    let r = document.getElementById("resistance").value;
    let v = i * r;
    document.getElementById("result").innerHTML = "V = " + v + " Volts ⚡";
}
function calculateSeries() {
    // 1. Put all input IDs into an array
    let resistorIDs = ["r1", "r2", "r3", "r4", "r5"];
    let total = 0;

    // 2. Loop through each ID and add the values
    for (let i = 0; i < resistorIDs.length; i++) {
        let value = document.getElementById(resistorIDs[i]).value;

        // Empty check
        if (value === "") {
            document.getElementById("seriesResult").innerHTML = "Fill all 5 values ⚠️";
            document.getElementById("seriesResult").style.color = "#ef4444";
            return;
        }

        total = total + Number(value); // Number() is critical, else it joins as text
    }

    // 3. Show result
    document.getElementById("seriesResult").innerHTML = "Total R = " + total + " Ω";
    document.getElementById("seriesResult").style.color = "#22c55e";
}
function calculateParallel() {
    let resistorIDs = ["p1", "p2", "p3", "p4", "p5"];
    let sumOfInverse = 0;

    for (let i = 0; i < resistorIDs.length; i++) {
        let value = document.getElementById(resistorIDs[i]).value;

        if (value === "" || Number(value) === 0) {
            document.getElementById("parallelResult").innerHTML = "Enter all 5 values. 0 not allowed ⚠️";
            document.getElementById("parallelResult").style.color = "#ef4444";
            return;
        }

        sumOfInverse = sumOfInverse + 1 / Number(value); // 1/R1 + 1/R2...
    }

    let totalR = 1 / sumOfInverse;
    document.getElementById("parallelResult").innerHTML = "Total R = " + totalR.toFixed(2) + " Ω";
    document.getElementById("parallelResult").style.color = "#22c55e";
}