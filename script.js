// Listado de los equipos reales clasificados
const teams = [
  { name: "Real Madrid", country: "España", rating: 9.5, prob: "24.5%" },
  { name: "Manchester City", country: "Inglaterra", rating: 9.4, prob: "21.0%" },
  { name: "FC Barcelona", country: "España", rating: 9.2, prob: "16.5%" },
  { name: "Bayern Múnich", country: "Alemania", rating: 9.0, prob: "12.2%" },
  { name: "Arsenal", country: "Inglaterra", rating: 8.9, prob: "8.5%" },
  { name: "Liverpool", country: "Inglaterra", rating: 8.8, prob: "7.0%" },
  { name: "Inter de Milán", country: "Italia", rating: 8.6, prob: "4.2%" },
  { name: "Bayer Leverkusen", country: "Alemania", rating: 8.5, prob: "3.0%" },
  { name: "Juventus", country: "Italia", rating: 8.4, prob: "1.8%" },
  { name: "Atlético de Madrid", country: "España", rating: 8.3, prob: "1.5%" },
  { name: "Borussia Dortmund", country: "Alemania", rating: 8.2, prob: "1.2%" },
  { name: "Aston Villa", country: "Inglaterra", rating: 7.9, prob: "0.5%" },
  { name: "Sporting CP", country: "Portugal", rating: 7.8, prob: "0.3%" },
  { name: "VfB Stuttgart", country: "Alemania", rating: 7.6, prob: "0.1%" }
];

// Función para pintar las filas en la tabla HTML
function renderTable(data) {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
  
  data.forEach(team => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${team.name}</strong></td>
      <td>${team.country}</td>
      <td>
        <div class="rating-bar"><div class="rating-fill" style="width: ${team.rating * 10}%"></div></div>
        ${team.rating} / 10
      </td>
      <td><span class="badge-prob">${team.prob}</span></td>
    `;
    tbody.appendChild(row);
  });
}

// Filtro interactivo del input buscador
function filterTable() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filtered = teams.filter(t => 
    t.name.toLowerCase().includes(input) || 
    t.country.toLowerCase().includes(input)
  );
  renderTable(filtered);
}

// Ejecución al iniciar el navegador (Paso 5 de la guía)
document.addEventListener("DOMContentLoaded", () => {
  renderTable(teams);
  console.log("Página cargada correctamente.");
});
