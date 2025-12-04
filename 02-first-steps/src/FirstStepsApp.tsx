import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity?: number;
}

export function FirstStepsApp() {
  const itemsInCart: ItemInCart[] = [
    { productName: "Nintendo Switch 2", quantity: 1 },
    { productName: "PlayStation 5", quantity: 2 },
    { productName: "Xbox Series X", quantity: 1 },
  ];
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsInCart.map((item, index) => (
        <ItemCounter
          key={index}
          name={item.productName}
          quantity={item.quantity}
        />
      ))}
    </>
  );
}
