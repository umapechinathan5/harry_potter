charactersToShow.forEach((character)=>{})
				
function createTableStructure() {
  const tableContainer = document.getElementById('tableContainer');

  const table = document.createElement('table');
  table.classList.add('table', 'table-striped');
  table.id = 'charactersTable';

  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');

  const headings = [
    'Name', 'House', 'Species', 'Role', 'Ministry of Magic',
    'Order of the Phoenix', 'Dumbledores Army', 'Death Eater',
    'Blood Status', 'Species', 'Birth Date', 'Eye Colour',
    'Hair Colour', 'Patronus', 'Image'
  ];

  headings.forEach(headingText => {
    const th = document.createElement('th');
    th.textContent = headingText;
    headRow.appendChild(th);
  });

  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  tbody.id = 'charactersBody';
  table.appendChild(tbody);

  tableContainer.appendChild(table);
}

function displayCharactersTable(characters) {
  const charactersTable = document.getElementById('charactersBody');

  characters.forEach(character => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = character.name;
    row.appendChild(nameCell);

    const houseCell = document.createElement('td');
    houseCell.textContent = character.house;
    row.appendChild(houseCell);

    const speciesCell = document.createElement('td');
    speciesCell.textContent = character.species;
    row.appendChild(speciesCell);

    const roleCell = document.createElement('td');
    roleCell.textContent = character.role;
    row.appendChild(roleCell);

    const ministryCell = document.createElement('td');
    ministryCell.textContent = character.ministryOfMagic;
    row.appendChild(ministryCell);

    const orderCell = document.createElement('td');
    orderCell.textContent = character.orderOfThePhoenix;
    row.appendChild(orderCell);

    const dumbledoreCell = document.createElement('td');
    dumbledoreCell.textContent = character.dumbledoresArmy;
    row.appendChild(dumbledoreCell);

    const deathCell = document.createElement('td');
    deathCell.textContent = character.deathEater;
    row.appendChild(deathCell);

    const bloodCell = document.createElement('td');
    bloodCell.textContent = character.bloodStatus;
    row.appendChild(bloodCell);

    const birthCell = document.createElement('td');
    birthCell.textContent = character.dateOfBirth;
    row.appendChild(birthCell);

    const eyeCell = document.createElement('td');
    eyeCell.textContent = character.eyeColour;
    row.appendChild(eyeCell);

    const hairCell = document.createElement('td');
    hairCell.textContent = character.hairColour;
    row.appendChild(hairCell);

    const patronusCell = document.createElement('td');
    patronusCell.textContent = character.patronus;
    row.appendChild(patronusCell);

    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = character.image;
    image.alt = character.name;
    image.style.maxWidth = '100px';
    imageCell.appendChild(image);
    row.appendChild(imageCell);

    charactersTable.appendChild(row);
  });
}