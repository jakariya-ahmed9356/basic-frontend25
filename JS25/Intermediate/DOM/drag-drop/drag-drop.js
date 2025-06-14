/*****
 * =========================
 * DOM Drag & Drop Events 
 * =========================
 * @param {'drag'} - Element is dragged
 * @param {'dragstart'} - Dragging starts 
 * @param {'dragend'} - Dragging ends
 * @param {'dragover'} - Element is dragged over
 * @param {'drop'} - Element is dropped
 * 
 */

// Get referrence to the dragabble element with ID (drag-box)
const dragBox = document.getElementById('drag-box');

dragBox.addEventListener('dragstart', () => {
    dragBox.style.opacity = '0.5';
});

 dragBox.addEventListener("drag", () => {
    console.log("🟠 Dragging...");
  });

   dragBox.addEventListener("dragend", () => {
    console.log("🟢 Drag ended");
    dragBox.style.opacity = "1";
});


dragBox.addEventListener('dragover', () => {
    
});