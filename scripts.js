const form = document.getElementById('employeeForm');
const employeeList = document.getElementById('employeeList');
const totalMonthlyCostElement = document.getElementById('totalMonthlyCost');
const footer = document.querySelector('footer');

let totalMonthlyCost = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.querySelector('[data-testid="firstNameInput"]').value;
    const lastName = document.querySelector('[data-testid="lastNameInput"]').value;
    const id = document.querySelector('[data-testid="idInput"]').value;
    const title = document.querySelector('[data-testid="titleInput"]').value;
    const annualSalary = parseFloat(document.querySelector('[data-testid="annualSalaryInput"]').value);

    addEmployee(firstName, lastName, id, title, annualSalary);
    updateTotalMonthlyCost(annualSalary / 12);
    form.reset();
});

function addEmployee(firstName, lastName, id, title, annualSalary) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${id}</td>
        <td>${title}</td>
        <td>$${annualSalary.toFixed(2)}</td>
        <td><button onclick="deleteEmployee(this)">Delete</button></td>
    `;
    employeeList.appendChild(row);
}

function updateTotalMonthlyCost(monthlySalary) {
    totalMonthlyCost += monthlySalary;
    totalMonthlyCostElement.textContent = totalMonthlyCost.toFixed(2);

    if (totalMonthlyCost > 20000) {
        footer.classList.add('over-budget');
    } else {
        footer.classList.remove('over-budget');
    }
}

function deleteEmployee(button) {
    const row = button.closest('tr');
    row.remove();

}