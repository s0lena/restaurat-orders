import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket) {
  switch (price) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
  }
}
// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]) {
  let filterOrders: Order[][] = [];
  orders[0].filter((order: Order) => order.price <= getMaxPrice(price));
  orders.forEach((restaurant: Order[]) => {
    const result = restaurant.filter(
      (order: Order) => order.price <= getMaxPrice(price)
    );
    filterOrders.push(result);
  });
  return filterOrders;
}
// Add your printOrders() function below:

// Main
// const eligibleOrders = getOrders(PriceBracket.Low, orders);
// printOrders(restaurants, eligibleOrders);
