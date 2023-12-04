async function getCafes() {
    try {
      const response = await fetch('/cafes');
      const cafes = await response.json();
      return cafes;
    } catch (error) {
      console.error('Error fetching cafes:', error);
      return [];
    }
  }
  
  async function displayCafes() {
    const cafes = await getCafes();
    const cafeList = document.getElementById('cafeList');
    cafeList.innerHTML = '';
  
    cafes.forEach(cafe => {
      const listItem = document.createElement('li');
      listItem.textContent = `${cafe.name} - Location: ${cafe.location}`;
      cafeList.appendChild(listItem);
    });
  }
  
  function sortCafes() {
    const wifiAvailable = document.getElementById('wifi').checked;
    const powerOutletsAvailable = document.getElementById('powerOutlets').checked;
    const selectedVibe = document.getElementById('vibes').value.toLowerCase();
  
    getCafes()
      .then(cafes => {
        let filteredCafes = cafes;
  
        if (wifiAvailable) {
          filteredCafes = filteredCafes.filter(cafe => cafe.wifi);
        }
  
        if (powerOutletsAvailable) {
          filteredCafes = filteredCafes.filter(cafe => cafe.powerOutlets);
        }
  
        if (selectedVibe) {
          filteredCafes = filteredCafes.filter(cafe => cafe.vibes.toLowerCase() === selectedVibe);
        }
  
        displayFilteredCafes(filteredCafes);
      })
      .catch(error => {
        console.error('Error sorting cafes:', error);
      });
  }
  
  function displayFilteredCafes(filteredCafes) {
    const cafeList = document.getElementById('cafeList');
    cafeList.innerHTML = '';
  
    filteredCafes.forEach(cafe => {
      const listItem = document.createElement('li');
      listItem.textContent = `${cafe.name} - Location: ${cafe.location}`;
      cafeList.appendChild(listItem);
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    displayCafes();
  });
  