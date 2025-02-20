const studentCard = (student) => `
    <div class="card bg-dark text-white">
      <img src="${student.crest}" class="card-img" alt="${student.house} crest">
      <div class="card-img-overlay">
        <h5 class="card-title">${student.name}</h5>
        <p class="card-text">${student.house}</p>
        <button type="button" id="expel--${student.id}" class="btn btn-danger btn-sm">Expel</button>
      </div>
    </div>
    `;
// Export so 'render.js' can use it!
export default studentCard;
