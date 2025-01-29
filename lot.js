// 1
const gridContainer = document.querySelector('.grid-container');
const cards = Array.from(gridContainer.children);

function shuffleCards() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    cards.sort(() => Math.random() - 0.5);
    cards.forEach(card => gridContainer.appendChild(card));
}

shuffleCards();

// 2
document.addEventListener('DOMContentLoaded', () => {
    const cardGrid = document.querySelector('.card-grid');
    const drawnCardContainer = document.getElementById('drawn-card');
    const drawCardBtn = document.getElementById('draw-card-btn');
  
    const cards = [
      { name: 'LA NOTIFICACION', img: 'cards/card1.png' },
      { name: 'EL MUNDO', img: 'cards/card2.png' },
      { name: 'LA ROSA', img: 'cards/card3.png' },
  
    ];
  
    // Function to draw a random card
    function drawCard() {
      // Pick a random card
      const randomIndex = Math.floor(Math.random() * cards.length);
      const card = cards[randomIndex];
  
      // Show the drawn card
      drawnCardContainer.innerHTML = `
        <h2>${card.name}</h2>
        <img src="${card.img}" alt="${card.name}">
      `;
      drawnCardContainer.style.display = 'block';
  
      // Hide the grid
      cardGrid.classList.add('hidden');
  
      // Disable the button to prevent multiple draws
      drawCardBtn.disabled = true;
    }
  
    // Attach event listener to the button
    drawCardBtn.addEventListener('click', drawCard);
  });

  //3
  function startDrag(e) {
    // determine event object
    if (!e) {
      var e = window.event;
    }
            if(e.preventDefault) e.preventDefault();

    // IE uses srcElement, others use target
    var targ = e.target ? e.target : e.srcElement;

    if (targ.className != 'dragme') {return};
    // calculate event X, Y coordinates
      offsetX = e.clientX;
      offsetY = e.clientY;

    // assign default values for top and left properties
    if(!targ.style.left) { targ.style.left='0px'};
    if (!targ.style.top) { targ.style.top='0px'};

    // calculate integer values for top and left 
    // properties
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;

    // move div element
      document.onmousemove=dragDiv;
            return false;
    
  }
  function dragDiv(e) {
    if (!drag) {return};
    if (!e) { var e= window.event};
    var targ=e.target?e.target:e.srcElement;
    // move div element
    targ.style.left=coordX+e.clientX-offsetX+'px';
    targ.style.top=coordY+e.clientY-offsetY+'px';
    return false;
  }
  function stopDrag() {
    drag=false;
  }
  window.onload = function() {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
  }

  //4
  document.querySelectorAll('.dragme').forEach(bean => {
    // Get random positions within the viewport
    const randomTop = Math.random() * (window.innerHeight - 40); // Adjust for bean height
    const randomLeft = Math.random() * (window.innerWidth - 30); // Adjust for bean width
    
    // Apply the positions
    bean.style.top = `${randomTop}px`;
    bean.style.left = `${randomLeft}px`;
});
  