// Draggables
document.querySelectorAll(".draggable").forEach((element) => {
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;

  // Click Draggable
  element.addEventListener('mousedown', (event) => {
  isDragging = true;
  lastX = event.clientX;
  lastY = event.clientY;
  element.style.cursor = "grabbing";
  document.body.style.userSelect = "none";

  element.dataset.dragFrom = element.style.right ? "right" : "left";

  element.dataset.moved = "true";
  positionDraggables();
});


  // Drag Draggable
  document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - lastX;
    const deltaY = event.clientY - lastY;

    const style = window.getComputedStyle(element);
    let elementX, elementY;

    if (element.dataset.dragFrom === "right") {
      elementX = parseInt(style.getPropertyValue('right'));
      element.style.right = `${elementX - deltaX}px`;
    } else {
      elementX = parseInt(style.getPropertyValue('left'));
      element.style.left = `${elementX + deltaX}px`;
    }

    elementY = parseInt(style.getPropertyValue('top'));
    element.style.top = `${elementY + deltaY}px`;

    lastX = event.clientX;
    lastY = event.clientY;

    element.dataset.moved = "true";
  });

  // Unlick Draggable
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      element.style.cursor = "grab";
      document.body.style.userSelect = "auto";
    }
  });
});
