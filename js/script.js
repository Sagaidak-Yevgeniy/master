function startSlider() {
  let i = 1;

  setInterval(() => {
    if (i === 6) {
      i = 1;
    }
    document.getElementById(`r${i}`).checked = true;
    i++;
  }, 3300);
}
startSlider();

//
//
//

let itemsName = [
  "Человек бензопила",
  "Демон зомби",
  "Капитан Кишибэ",
  "Демон ножа",
  "Демон ангел",
  "Человек катана",
  "Человек камень",
  "Танэби",
  "демон темноты",
  "Демон ада",
  "Демон когтей",
  "Человек хлыст",
  "Субар",
  "Демон лисы",
  "Като",
  "Человек бомба",
  "Демон помидор",
  "Человек двуручный меч",
  "Демон призрак",
  "Человек копье",
];
let itemsRating = [
  4.5, 3.5, 4.0, 4.9, 1.3, 3.6, 3.5, 5.0, 4.1, 1.3, 4.2, 3.5, 5.0, 2.6, 1.9,
  4.3, 3.7, 5.0, 2.4, 2.0,
];
let itemsPrice = [
  8500, 2199, 2499, 5000, 2509, 8000, 2199, 2499, 4000, 4599, 8500, 2410, 3400,
  54000, 2590, 8090, 2200, 2500, 579, 250,
];

getItemsDetails(itemsName, itemsRating, itemsPrice);

function getItemsDetails(itemsName, itemsRating, itemsPrice) {
  for (let i = 0; i < itemsName.length; i++) {
    const name = getDetailes(itemsName, i),
      rating = getDetailes(itemsRating, i),
      price = getDetailes(itemsPrice, i);
    innerItem(name, rating, price);
  }
}

function getDetailes(mass, i) {
  for (i; i < mass.length; ) {
    const el = mass[i];
    return el;
  }
}

function innerItem(name, rating, coast) {
  let shop = document.getElementById("shop");
  rating.toFixed(1);
  shop.innerHTML += `<div class="item">
    <a class="link-shop:" href="#">
      <img class="shop-img" src="src/item.png"  />
      <div class="info">
        <p id="infoName">${name}</p>
        <div class="rating">
          <i class="fa-solid fa-star"></i>
          <h1>${rating}</h1>
        </div>
        <div class="priceCard">
          <p class="price">${coast}₸</p>\
          <i id="cart-icon" class="fa-solid fa-basket-shopping"></i>
        </div>
      </div>
    </a>
  </div>`;
}
