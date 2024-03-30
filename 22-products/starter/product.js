const urlParagram = new URLSearchParams(window.location.search);
let products = [];
//Otengo el contenedoe
const containerP = document.querySelector(".product-wrapper");
const productID = urlParagram.get("id");

fetch("products.json")
  .then((Response) => Response.json())
  .then((data) => {
    products = data;
    console.log(products);
    renderCurrenPro();
  })
  .catch((err) => {
    console.log(err);
  });

function renderCurrenPro() {
  //   recupero el producto
  const item = products.filter((prod) => prod.id === productID)[0];
  console.log(item);

  const htmP = `  <img src="${item.fields.image[0].url}" alt="product img" class="img" />
      <section class="product-info">
        <h3>${item.fields.name}</h3>
        <h5>${item.fields.company}</h5>
        <span>${item.fields.price}</span>
        <p>
          Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge
        </p>
        <button class="btn">add to cart</button>
      </section>`;

  containerP.innerHTML = htmP;
  containerP.style.display = "grid";
  const loader = (document.querySelector(".loading").style.display = "none");
}
