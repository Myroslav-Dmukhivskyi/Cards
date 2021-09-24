const items = document.querySelectorAll(".item");

for (const item of items) {
  item.addEventListener("click", () => {
    clearActiveClasses();
    item.classList.add("active");
  });
}

function clearActiveClasses() {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}
