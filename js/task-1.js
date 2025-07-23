const numberOfCategories = document.querySelectorAll("ul .item");

console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((element) => {
  const categoryTitle = element.querySelector("h2");
  const categoryCount = element.querySelectorAll(" li");

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Element: ${categoryCount.length}`);
});
