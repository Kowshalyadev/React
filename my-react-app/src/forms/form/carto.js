import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function CartAddo() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Handle Increase Quantity
  const handleIncreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Handle Decrease Quantity
  const handleDecreaseQuantity = (productId) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  // Calculate Total Items in Cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  // Get quantity of a specific product in cart
  const getProductQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h1>Product Store</h1>
        <h3>Cart Items: {totalItems}</h3>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <Card key={product.id} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.title}
              style={{ height: "200px", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              {getProductQuantity(product.id) > 0 ? (
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Button
                    variant="danger"
                    onClick={() => handleDecreaseQuantity(product.id)}
                  >
                    -
                  </Button>
                  <span>{getProductQuantity(product.id)}</span>
                  <Button
                    variant="success"
                    onClick={() => handleIncreaseQuantity(product.id)}
                  >
                    +
                  </Button>
                </div>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              )}
            </Card.Footer>
          </Card>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - Quantity: {item.quantity}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDecreaseQuantity(item.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CartAddo;
