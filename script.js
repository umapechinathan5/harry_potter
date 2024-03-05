const apiUrl = 'https://hp-api.onrender.com/api/characters';
    const charactersPerPage = 4;
    let currentPage = 1;

    async function fetchCharacters() {
      try {
        const response = await fetch(apiUrl);
        const characters = await response.json();

				console.log(characters);
        return characters;
      } catch (error) {
        console.error('Error fetching characters:', error);
        return [];
      }
    }

    function displayCharacters(characters) {
      const startIndex = (currentPage - 1) * charactersPerPage;
      const endIndex = startIndex + charactersPerPage;
      const charactersToShow = characters.slice(startIndex, endIndex);

      const charactersContainer = document.getElementById('characters');
      charactersContainer.innerHTML = '';

      charactersToShow.forEach(character => {
        const img = character.image ? character.image : 'hp.jpg';
        const card = `
          <div class="col-md-3">
            <div class="card">
              <img src="${img}"  class="card-img-top" alt="${character.name}">
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">House : ${character.house}</p>
                <p class="card-text">Role: ${character.role}</p>
                <p class="card-text">D.O.B: ${character.dateOfBirth}</p>
                <p class="card-text">Patronus: ${character.patronus}</p>
                <p class="card-text blood">Blood Status: ${character.bloodStatus}</p>




              </div>
            </div>
          </div>
        `;

			

				charactersContainer.innerHTML += card;
      });
    }


    





    function displayPagination(characters) {
      const totalPages = Math.ceil(characters.length / charactersPerPage);
      const paginationContainer = document.getElementById('pagination');
      paginationContainer.innerHTML = '';

      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + 4);

      // Previous Button
      const previousLi = document.createElement('li');
      previousLi.classList.add('page-item');
      const previousLink = document.createElement('a');
      previousLink.classList.add('page-link');
      previousLink.href = '#';
      previousLink.innerHTML = '&laquo;';
      previousLink.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          displayCharacters(characters);
          displayPagination(characters);
        }
      });
      previousLi.appendChild(previousLink);
      paginationContainer.appendChild(previousLi);

      // Page Buttons
      for (let i = startPage; i <= endPage; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        const link = document.createElement('a');
        link.classList.add('page-link');
        link.href = '#';
        link.textContent = i;
        link.addEventListener('click', () => {
          currentPage = i;
          displayCharacters(characters);
          displayPagination(characters);
        });
        if (i === currentPage) {
          li.classList.add('active');
        }
        li.appendChild(link);
        paginationContainer.appendChild(li);
      }

      // Next Button
      const nextLi = document.createElement('li');
      nextLi.classList.add('page-item');
      const nextLink = document.createElement('a');
      nextLink.classList.add('page-link');
      nextLink.href = '#';
      nextLink.innerHTML = '&raquo;';
      nextLink.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          displayCharacters(characters);
          displayPagination(characters);
        }
      });
      nextLi.appendChild(nextLink);
      paginationContainer.appendChild(nextLi);
    }

    async function init() {
      const characters = await fetchCharacters();
      displayCharacters(characters);
      displayPagination(characters);
    }

    init();