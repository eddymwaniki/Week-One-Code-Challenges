// Example Basic Salary and Benefits
const basicSalary = 100000;
const benefits = 10000;

// Gross Salary Calculation
let grossSalary = basicSalary + benefits;


// PAYE Calculation
function payeCalculation(grossSalary) {
    let paye = 0;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary >= 24001 && grossSalary <= 32333) {
        paye = (24000 * 0.1) + ((grossSalary - 24000) * 0.25);
    } else if (grossSalary >= 32334 && grossSalary <= 500000) {
        paye = (24000 * 0.1) + (8332 * 0.25) + ((grossSalary - 32333) * 0.3);
    } else if (grossSalary >= 500001 && grossSalary <= 800000) {
        paye = (24000 * 0.1) + (8332 * 0.25) + (467667 * 0.3) + ((grossSalary - 500001) * 0.325);
    } else {
        paye = (24000 * 0.1) + (8332 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35);
    }
    return paye;
}

// NHIF Calculation
function nhifDeductions(grossSalary) {
    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1050;
    } else {
        nhif = 1200;
    }
    return nhif;
}

// NSSF Calculation
const nssfTierOne = Math.min(grossSalary, 7000) * 0.06;
const nssfTierTwo = Math.max(0, Math.min(grossSalary - 7000, 29000)) * 0.06;
const nssf = nssfTierOne + nssfTierTwo;

// Net Salary Calculation
let paye = payeCalculation(grossSalary);
let nhif = nhifDeductions(grossSalary);
let netSalary = grossSalary - nssf - nhif - paye;

//Prints the Net Salary and the Deductions
console.log( "Gross Salary:", grossSalary);
console.log("PAYE Deductions:", paye);
console.log("NHIF Deductions:", nhif);
console.log("NSSF Deductions:", nssf);
console.log("Net Salary", netSalary)
