async function fetchPackage() {
    try {
      const response = await fetch('package.json');
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error al leer el archivo JSON:', error);
    }
  }

  async function displayAllTitles() {
    const all = await fetchPackage();
    const tableBody = document.getElementById('todosTable').querySelector('tbody');

    all.forEach(todo => {
      const row = document.createElement('tr');

      const titleCell = document.createElement('td');
      titleCell.textContent = todo.title;
      row.appendChild(titleCell);

      const priorityCell = document.createElement('td');
      priorityCell.textContent = todo.priority;
      row.appendChild(priorityCell);

      const isDoneCell = document.createElement('td');
      isDoneCell.textContent = todo.isDone ? 'Yes' : 'No';
      row.appendChild(isDoneCell);

      tableBody.appendChild(row);
    });
  }
  displayAllTitles();