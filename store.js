const products = {
  hoodie: {
    name: "Pumpkin Pie Hoodie",
    price: 34.99,
    image: "images/Jimhoodie.png",
    description: "Premium heavyweight hoodie with Pumpkin Pie branding. Cozy, modern, and built for colder nights."
  },
  tshirt: {
    name: "Pumpkin Pie TShirt",
    price: 24.99,
    image: "images/Tshirt.png",
    description: "Soft cotton tee with minimalist Pumpkin Pie design. Lightweight and breathable."
  }
};

const params = new URLSearchParams(window.location.search);
const productKey = params.get("id");
const product = products[productKey];

if (product) {
  document.getElementById("product-name").innerText = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-desc").innerText = product.description;
  document.getElementById("product-price").innerText = `$${product.price}`;
}
