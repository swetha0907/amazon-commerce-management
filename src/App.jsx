
import { useState, useEffect } from "react";
import "./App.css";

function Header() {
  return (
    <header style={{ backgroundColor: "#232f3e", color: "white", padding: "20px", textAlign: "center" }}>
      <h1>Amazon Product Store</h1>
    </header>
  );
}

function ProductCard({
  name,
  price,
  quantity,
  selectedColor,
  deliveryCity,
  onAdd,
  onRemove,
  onReset,
  onColorChange,
  onCityChange
}) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "25px", margin: "25px auto", maxWidth: "450px" }}>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>

      <label>
        Colour:{" "}
        <select
          value={selectedColor}
          onChange={(e) => onColorChange(e.target.value)}
        >
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>
      </label>

      <p>Selected colour: {selectedColor}</p>

      <label>
        Delivery city:{" "}
        <input
          value={deliveryCity}
          onChange={(e) => onCityChange(e.target.value)}
        />
      </label>

      <p>Quantity: {quantity}</p>
      <h3>Total: ₹{quantity * price}</h3>

      <p>
        {quantity === 0
          ? "Cart is empty"
          : "Product added to cart"}
      </p>

      <button onClick={onAdd}>Add to Cart</button>{" "}
      <button onClick={onRemove} disabled={quantity === 0}>
        Remove One
      </button>{" "}
      <button onClick={onReset}>Reset Cart</button>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#232f3e", color: "white", padding: "15px", textAlign: "center" }}>
      © 2026 Amazon Product Store
    </footer>
  );
}

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  useEffect(() => {
    document.title = `Amazon Product Store - Quantity: ${quantity}`;
  }, [quantity]);

  return (
    <div>
      <Header />

      <main style={{ textAlign: "center", minHeight: "65vh", padding: "20px" }}>
        <button onClick={() => setShowProduct(!showProduct)}>
          {showProduct ? "Hide Product" : "Show Product"}
        </button>

        {showProduct && (
          <ProductCard
            name="Wireless Mouse"
            price={499}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
            onAdd={() => setQuantity(quantity + 1)}
            onRemove={() => setQuantity(Math.max(0, quantity - 1))}
            onReset={() => setQuantity(0)}
            onColorChange={setSelectedColor}
            onCityChange={setDeliveryCity}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
