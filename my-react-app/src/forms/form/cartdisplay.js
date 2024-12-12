import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cart() {
  const [products, setProducts] = useState([]); // State for fetched products
  const [cart, setCart] = useState([]); // State for cart items
  const [showCart, setShowCart] = useState(false); // State to toggle cart visibility

  useEffect(() => {
    // Fetch products on component mount
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Function to handle adding an item to the cart
  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      // Update quantity if item already exists in cart
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new item to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowCart(true); // Show cart section when an item is added
  };

  // Function to handle removing an item from the cart
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    if (cart.length === 1) {
      setShowCart(false); // Hide cart if the last item is removed
    }
  };

  // Calculate total items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h1>Product Store</h1>
        <h3>Cart Items: {totalItems}</h3>
      </div>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Display product cards */}
        {products.map((product) => (
          <Card key={product.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} alt={product.title} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>

      {/* Conditional Cart Section */}
      {showCart && (
        <div style={{ marginTop: "20px" }}>
          <h3>Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <strong>{item.title}</strong> - ${item.price} (x
                  {item.quantity})
                  <Button
                    variant="danger"
                    size="sm"
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
