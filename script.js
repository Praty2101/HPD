const papers = document.querySelectorAll('.draggable');
const card = document.querySelector('.card');

papers.forEach(paper => {
  paper.addEventListener('mousedown', handleMouseDown);
});

card.addEventListener('click', () => {
  card.style.backgroundImage = 'url("card_open.png")';
});

let initialX, initialY;

function handleMouseDown(event) {
  initialX = event.clientX;
  initialY = event.clientY;
  
  const paper = event.target;
  paper.addEventListener('mousemove', handleMouseMove);
  paper.addEventListener('mouseup', handleMouseUp);
}

function handleMouseMove(event) {
  const currentX = event.clientX;
  const currentY = event.clientY;
  
  const diffX = currentX - initialX;
  const diffY = currentY - initialY;

  event.target.style.transform = `translate(${diffX}px, ${diffY}px)`;
}

function handleMouseUp() {
  papers.forEach(paper => {
    paper.removeEventListener('mousemove', handleMouseMove);
    paper.removeEventListener('mouseup', handleMouseUp);
  });
}


