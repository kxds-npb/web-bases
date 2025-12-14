function initDragDrop() {
  const draggedItem = {
    hasItem: false,
    item: null,
    sourceZone: null,
  };

  function handleDragStart(event) {
    draggedItem.hasItem = true;
    draggedItem.item = event.target;
    draggedItem.sourceZone = event.target.parentNode;
    event.target.classList.add("dragging");
    event.dataTransfer.setData("text/plain", event.target.id || "");
  }

  function handleDragEnd(event) {
    event.target.classList.remove("dragging");
    document.querySelectorAll(".drop-zone").forEach((zone) => {
      zone.classList.remove("drag-over");
    });
    draggedItem.hasItem = false;
    draggedItem.item = null;
    draggedItem.sourceZone = null;
  }

  function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  function handleDragEnter(event) {
    /*Will also trigger at the beginning too as the item position is a drop zone as well and will do the same outside as it's till the drop-zone where the item is located but once */
    if (event.target.classList.contains("drop-zone")) {
      event.target.classList.add("drag-over");
    }
  }

  function handleDragLeave(event) {
    if (event.target.classList.contains("drop-zone")) {
      event.target.classList.remove("drag-over");
    }
  }

  function handleDrop(event) {
    event.preventDefault();
    const dropZone = event.target.classList.contains("drop-zone")
      ? event.target
      : event.target.closest(".drop-zone"); //Will drop the element to the closest drop zone if the user hasn't arrived to a specific one

    if (dropZone && draggedItem.hasItem && draggedItem.item) {
      dropZone.classList.remove("drag-over");
      draggedItem.sourceZone.removeChild(draggedItem.item);
      dropZone.appendChild(draggedItem.item);
    }
  }

  // Setup all elements
  document.querySelectorAll(".draggable").forEach((item) => {
    // item.setAttribute("draggable", "true"); //If not set in the HTML
    item.addEventListener("dragstart", handleDragStart);
    item.addEventListener("dragend", handleDragEnd);
  });

  document.querySelectorAll(".drop-zone").forEach((zone) => {
    zone.addEventListener("dragover", handleDragOver);
    zone.addEventListener("dragenter", handleDragEnter);
    zone.addEventListener("dragleave", handleDragLeave);
    zone.addEventListener("drop", handleDrop);
  });
}

document.addEventListener("DOMContentLoaded", initDragDrop);
