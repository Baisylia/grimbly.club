// Draggables
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

document.querySelectorAll(".draggable").forEach((element) => {
  const aboutDraggable = document.getElementById('aboutDraggable');

  if (aboutDraggable) {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    aboutDraggable.dataset.moved = isTouchDevice ? "false" : "true";
  }
  
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;

  const startDrag = (x, y) => {
    isDragging = true;
    lastX = x;
    lastY = y;
    element.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
    element.dataset.dragFrom = element.style.right ? "right" : "left";
  };

  const drag = (x, y) => {
    if (!isDragging) return;

    const deltaX = x - lastX;
    const deltaY = y - lastY;

    const style = window.getComputedStyle(element);
    let elementX = element.dataset.dragFrom === "right" 
      ? parseInt(style.getPropertyValue('right')) 
      : parseInt(style.getPropertyValue('left'));
    let elementY = parseInt(style.getPropertyValue('top'));

    if (element.dataset.dragFrom === "right") {
      element.style.right = `${elementX - deltaX}px`;
    } else {
      element.style.left = `${elementX + deltaX}px`;
    }
    element.style.top = `${elementY + deltaY}px`;

    lastX = x;
    lastY = y;
    element.dataset.moved = "true";
  };

  const endDrag = () => {
    isDragging = false;
    element.style.cursor = "grab";
    document.body.style.userSelect = "auto";
  };

  // Mouse events
  element.addEventListener('mousedown', (e) => startDrag(e.clientX, e.clientY));
  document.addEventListener('mousemove', (e) => drag(e.clientX, e.clientY));
  document.addEventListener('mouseup', endDrag);

  // Touch events
  element.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
  });
  document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    drag(touch.clientX, touch.clientY);
  }, { passive: false });
  document.addEventListener('touchend', endDrag);
});
