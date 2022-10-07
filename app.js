const values = ["10K", "50K", "100K", "500k", "1M"]; //values to step to
const prices = [8, 12, 16, 24, 36];
//const dicsountPrices = ["6.00", "8.00", "12.00", "18.00", "25.00"];

const input = document.querySelector(".slider_range");
const output = document.querySelector(".page_views");
const price = document.querySelector(".price");
const discount = document.querySelector(".checkbox");

function updatePrice() {
  output.innerHTML = values[input.value - 1];

  if (discount.checked) {
    price.innerHTML = prices[input.value - 1] - (prices[input.value - 1] * 0.25)+".00";
  } else {
    price.innerHTML = prices[input.value - 1]+".00";
  }
}

updatePrice();
