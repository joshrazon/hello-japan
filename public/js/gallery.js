/* <div class="card-outer">
  <div class="card img1"></div>
  <div class="card-text">
    <h3>Sakura Bridge</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia velit odit exercitationem saepe tempore quibusdam.</p>
  </div>
  <div class="card-btn">
    <button>Tours & Pricing</button>
  </div>
</div> */

fetch(`${window.location.origin}/api/v0/tours`)
.then(response => response.json())
.then(data => {
  const tours = data;
  return tours
}).then(tours => {
  const deck = document.querySelector('.deck');
  let outputHTML = '';
  tours.forEach(function(tour) {
    outputHTML += `
    <div class="card-outer">
      <div class="card img${tour.id}"></div>
      <div class="card-text">
      <h3>
      ${tour.title}
      <br>
      <span>photo by: ${tour.credit}</span>
      </h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia velit odit exercitationem saepe tempore quibusdam.</p>
    </div>
      <div class="card-btn">
        <button><a href="/group-tours/${tour.id}">Tours & Pricing</a></button>
      </div>
    </div>
    `
    deck.innerHTML = outputHTML;
  })
});

