const tabButtons = document.querySelectorAll("[data-admin-tab]");
const panels = document.querySelectorAll(".admin-panel");
const titleEl = document.querySelector("[data-admin-title]");

const titles = {
  dashboard: "Dashboard",
  posts: "Posts",
  pages: "Pages",
};

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.adminTab;
    if (!id) return;

    tabButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    panels.forEach((panel) => {
      const match = panel.id === `panel-${id}`;
      panel.classList.toggle("is-active", match);
      panel.hidden = !match;
    });

    if (titleEl && titles[id]) {
      titleEl.textContent = titles[id];
    }
  });
});
