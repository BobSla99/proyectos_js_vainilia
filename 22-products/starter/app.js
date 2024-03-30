const container = document.querySelector(".products-container");

const productUrl = "https://course-api.com/javascript-store-products";
let products = [];
fetchProduct();

async function fetchProduct() {
  try {
    const response = await fetch("products.json", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.status !== 200) {
      throw new Error(
        "no se pudo recuperar el recurso codigo de error :" + response.status
      );
    }
    products = await response.json();
    console.log(products);
    //disable spinner
    document.querySelector(".loading").style.display = "none";
    renderProducts();
  } catch (err) {
    console.log(err, "hubo un error en la peticion");
  }

  // return JSON.parse(p)
}

function renderProducts() {
  console.log(products[0]);
  container.innerHTML = "";
  let htmlData = [];

  htmlData = products.map((prod) => {
    return `<a href="./product.html?id=${prod.id}""  class="single-product">

                <img src="${
                  prod.fields.image[0].url
                }" alt="img produc" class="single-product-img img" />
            <footer>
              <h5 class="name">${prod.fields.name}</h5>
              <span class="price">$${prod.fields.price / 100}</span>
            </footer>
          </a>`;
  });
  container.innerHTML = htmlData.join("");
}
