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
    all.forEach(all => {
      console.log(all.title);
    });
  }

  // Llamar a la función para mostrar los títulos
  displayAllTitles();