const img = document.querySelector(".img");

let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;

img.addEventListener("mousedown", (e) => {
  isDragging = true;

  startX = e.clientX;
  startY = e.clientY;

  img.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const dx = e.clientX - startX;
  const dy = e.clientY - startY;

  img.style.transform = `translate(${currentX + dx}px, ${currentY + dy}px)`;
});

document.addEventListener("mouseup", () => {
  if (!isDragging) return;

  const dx = event.clientX - startX;
  const dy = event.clientY - startY;

  currentX += dx;
  currentY += dy;

  isDragging = false;
  img.style.cursor = "grab";
});
</script>

</body>
</html>