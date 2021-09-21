document.write("<table border = 1>");
document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
let timesRun = 0;
let min = 0;
let max = 0;
let average = 0.0;
let runningTotal = 0;
runCalc();

function runCalc() {
    var x = prompt("Value of x?");
    var op = prompt("Enter an operator");
    var y = prompt("Value of y?");
    document.write("<tr><td>", x, "</td><td>", op, "</td><td>", y, "</td><td>");
    x = parseInt(x);
    y = parseInt(y);
    var calculation = total(x, op, y);
    document.write(calculation, "</td></tr>");
    if (timesRun == 0) {
        min = calculation;
        max = calculation;
    } else if (!isNaN(calculation) && (calculation < min)) {
        min = calculation;
    } else if (!isNaN(calculation) && (calculation > max)) {
        max = calculation;
    }
    if (!isNaN(calculation)) {
        runningTotal += calculation;
        timesRun++;
    }
    var goAgain = confirm("Continue?");
    if (goAgain == true) {
        runCalc();
    } else {
        average = runningTotal / timesRun;
        document.write("<tr><th>min</th><th>max</th><th>average</th><th>total</th></tr>");
        document.write("<tr><td>", min, "</td><td>", max, "</td><td>", average, "</td><td>", runningTotal, "</td></tr>");
        document.write("</table>");
    }
}

function total(fx, fop, fy) {
    if (Number.isInteger(fx) && Number.isInteger(fy)) {
        switch (fop) {
            case '+':
                return fx + fy;
            case '-':
                return fx - fy;
            case '/':
                return fx / fy;
            case '*':
                return fx * fy;
            case '%':
                return fx % fy;
            default:
                return "computation error";
        }
    } else {
        return "wrong input number";
    }
}