$(document).ready(handleReady);

function handleReady() {
  $("#btn").on("click", renderDom);
} // end handleReady

const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

// create new employee bonus array
let employeesBonusArr = [];

// create new employee bonus objects and push them into the employeeBonus array
function bonusCalculator(employee) {
  let bonusPercentage = 0;
  if (Number(employee.annualSalary) > 65000) {
    bonusPercentage -= 1;
  }
  if (employee.employeeNumber.length > 3) {
    bonusPercentage += 5;
  }
  if (employee.reviewRating === 2) {
    bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    bonusPercentage += 4;
  } else if (employee.reviewRating === 4) {
    bonusPercentage += 6;
  } else if (employee.reviewRating === 5) {
    bonusPercentage += 10;
  }

  if(bonusPercentage >= 13) {
    bonusPercentage = 13;
  }
  else if(bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  let totalBonus = Math.round(
    (Number(employee.annualSalary) * bonusPercentage) / 100
  );
  let totalCompensation = totalBonus + Number(employee.annualSalary);

  let employeeBonus = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus,
  };
  return employeeBonus;
} // end bonusCalculator

function renderDom() {
  let el = $("#employeeBonusList");
  el.empty();
  for (let i = 0; i < employees.length; i++) {
    let employee = bonusCalculator(employees[i]);
    el.append(

      `<tr>
          <td>${i + 1}</td>
          <td>${employee.name}</td>
          <td>${employee.bonusPercentage}%</td>
          <td>$${employee.totalCompensation}</td>
          <td>$${employee.totalBonus}</td>
      </tr>`
    );
  } // end for loop
} // end renderDom
