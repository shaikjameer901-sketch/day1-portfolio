// 1. All project data in one place
// 2. Cards automatic గా build చేసే function
// 3. Helper function for scroll
// 4. Run this when page loads
displayProjects();
function scrollToProject(id) {
    function scrollToProject(id) {
    // 1. Map the card ID to tfunction scrollToProject(id) {he corresponding calculator section ID
    const sectionMap = {
        "ohm": "ohm-section",
        "series": "series-section",
        "parallel": "parallel-section",
        "rc": "rc-section",
        "capSeries": "cap-series-section",
        "capParallel": "cap-parallel-section"
    };

    const targetId = sectionMap[id];
    const element = document.getElementById(targetId);

    // 2. Scroll smoothly to the target section
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // 3. Add highlight effect for user feedback
        element.style.border = "2px solid #38bdf8";
        setTimeout(() => {
            element.style.border = "1px solid #334155";
        }, 2000);
    }
}
    alert("Scroll feature coming Day 11. For now, calculator is below!");
}

function displayProjects() {
    const container = document.getElementById("projects-container");
    let html = "";

    for (let i = 0; i < projects.length; i++) {
        let project = projects[i];
        html += `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p><strong>Formula:</strong> ${project.formula}</p>
                <p>${project.description}</p>
                <button onclick="scrollToProject('${project.id}')">Use Calculator</button>
            </div>
        `;
    }

    container.innerHTML = html;
}

const projects = [
    {
        title: "Ohm's Law Calculator",
        formula: "V = I × R",
        description: "Calculate voltage from current and resistance",
        id: "ohm"
    },
    {
        title: "Series Resistor Calculator",
        formula: "R = R1 + R2 +...",
        description: "Add 5 resistors in series",
        id: "series"
    },
    {
        title: "Parallel Resistor Calculator",
        formula: "1/R = 1/R1 + 1/R2 +...",
        description: "Calculate equivalent resistance in parallel",
        id: "parallel"
    },
    {
        title: "RC Time Constant",
        formula: "τ = R × C",
        description: "Find circuit settling time 5τ",
        id: "rc"
    },
    {
        title: "Capacitor Series",
        formula: "1/C = 1/C1 + 1/C2 +...",
        description: "Total capacitance in series",
        id: "capSeries"
    },
    {
        title: "Capacitor Parallel",
        formula: "C = C1 + C2 +...",
        description: "Total capacitance in parallel",
        id: "capParallel"
    }
];
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
function calculateRC() {
    // 1. Get values from inputs
    let r = document.getElementById("resR").value;
    let c = document.getElementById("capC").value;

    // 2. Validation - 'return' stops the function if inputs are empty
    if (r === "" || c === "") {
        document.getElementById("rcResult").innerHTML = "Enter both R and C ⚠️";
        document.getElementById("rcResult").style.color = "#ef4444";
        document.getElementById("settleTime").innerHTML = "";
        return;
    }

    // 3. Calculation - Number() converts text to number
    let tau = Number(r) * Number(c); // τ = R × C
    let settlingTime = 5 * tau;     // 5τ rule for 99% settling

    // 4. Display Result - toExponential() for scientific notation
    document.getElementById("rcResult").innerHTML = "τ = " + tau.toExponential(2) + " seconds";
    document.getElementById("rcResult").style.color = "#22c55e";
    
    document.getElementById("settleTime").innerHTML = "Settling Time 5τ = " + settlingTime.toExponential(2) + " seconds";
    document.getElementById("settleTime").style.color = "#38bdf8";
}
// Helper function for showing errors. Reusable everywhere.
function showError(elementId, message) {
    document.getElementById(elementId).innerHTML = message;
    document.getElementById(elementId).style.color = "#ef4444";
}
function calculateCapSeries() {
    let capIDs = ["cs1", "cs2", "cs3", "cs4", "cs5"];
    let sumOfInverse = 0;

    for (let i = 0; i < capIDs.length; i++) {
        let value = document.getElementById(capIDs[i]).value;

        if (value === "" || Number(value) === 0) {
            showError("capSeriesResult", "Enter all 5 values. 0 not allowed ⚠️");
            return;
        }

        sumOfInverse = sumOfInverse + 1 / Number(value);
    }

    let totalC = 1 / sumOfInverse;
    document.getElementById("capSeriesResult").innerHTML = "Total C = " + totalC.toExponential(3) + " F";
    document.getElementById("capSeriesResult").style.color = "#22c55e";
}

function calculateCapParallel() {
    let capIDs = ["cp1", "cp2", "cp3", "cp4", "cp5"];
    let total = 0;

    for (let i = 0; i < capIDs.length; i++) {
        let value = document.getElementById(capIDs[i]).value;

        if (value === "") {
            showError("capParallelResult", "Fill all 5 values ⚠️");
            return;
        }

        total = total + Number(value);
    }

    document.getElementById("capParallelResult").innerHTML = "Total C = " + total.toExponential(3) + " F";
    document.getElementById("capParallelResult").style.color = "#22c55e";
}

