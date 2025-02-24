const titleHeading = document.querySelector("#title");
console.log(titleHeading);

const userSection = document.querySelector("#user-data");

const button = document.querySelector("#click-me");

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.products.forEach((product) => {
      const container = document.createElement("div");
      container.classList.add("product");

      const title = document.createElement("h3");
      title.textContent = product.title;

      const price = document.createElement("p");
      price.textContent = `Price: $${product.price}`;

      container.appendChild(title);
      container.appendChild(price);

      userSection.appendChild(container);
    });
  })
  .catch((error) => console.error("Error fetching products:", error));
