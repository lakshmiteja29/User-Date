// javascript

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    addData(name, age);
    document.getElementById('dataForm').reset();
});

document.getElementById('sortButton').addEventListener('click', function() {
    sortData();
});

document.getElementById('filterButton').addEventListener('click', function() {
    filterData();
});

let data = [];

function addData(name, age) {
    data.push({ name, age });
    displayData(data);
}

function sortData() {
    data.sort((a, b) => a.age - b.age);
    displayData(data);
}

function filterData() {
    const filteredData = data.filter(person => person.age > 18);
    displayData(filteredData);
}

function displayData(dataArray) {
    const tbody = document.querySelector('#dataTable tbody');
    tbody.innerHTML = '';
    dataArray.forEach(person => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const ageCell = document.createElement('td');
        nameCell.textContent = person.name;
        ageCell.textContent = person.age;
        row.appendChild(nameCell);
        row.appendChild(ageCell);
        tbody.appendChild(row);
    });
}
