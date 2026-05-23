function showMessage() {
    alert("Thanks for visiting! I'm ECE grad Jameer, learning Full Stack. Hire me!");
}

function changeColor() {
    document.body.style.backgroundColor = "#1e293b";
    document.querySelector("h1").innerHTML = "Hi, I'm Jameer - ECE to Dev ⚡";
}
function calculateVoltage() {
function calculateVoltage() {
    let i = document.getElementById("current").value;
    let r = document.getElementById("resistance").value;
    
    if(i === "" || r === "") {
        document.getElementById("result").innerHTML = "Please enter both values ⚠️";
        document.getElementById("result").style.color = "#ef4444";
        return;
    }
    
    let v = i * r;
    document.getElementById("result").innerHTML = "V = " + v + " Volts ⚡";
    document.getElementById("result").style.color = "#22c55e";
}
    let i = document.getElementById("current").value;
    let r = document.getElementById("resistance").value;
    let v = i * r;
    document.getElementById("result").innerHTML = "V = " + v + " Volts ⚡";
}