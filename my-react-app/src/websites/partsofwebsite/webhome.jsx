import React, { useEffect, useState } from "react";
import axios from 'axios';
function Webhome(){
    let [value,setValue]=useState([])
    let [addcart,setaddcart]=useState({})
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log("Fetched Data:", res.data); // Debug the fetched data
            setValue(res.data);
            const initialCounts = res.data.reduce((acc, product) => {
                acc[product.id] = 0;
                return acc;
            }, {});
            setaddcart(initialCounts);
        })
        .catch((err)=>{
            console.error("error fetching data:",err)
        })
    },[])
    const handleIncre=(id)=>{
        setaddcart((prevCount)=>({
            ...prevCount,[id]:prevCount[id]+1,
        }))
    }
    const handleDecrement=(id)=>{
        setaddcart((prevCount)=>({
            ...prevCount,[id]:prevCount[id]>0?prevCount[id]-1:0,
        }))
    }
    const handleAddToCart = (id) => {
        setaddcart((prevCount) => ({
          ...prevCount,
          [id]: prevCount[id] > 0 ? prevCount[id] : 1, // Start adding from 1
        }));
      };
    
    return(<>
    <div style={{display:"flex",flexWrap:"wrap",gap:"20px",padding:"20px"}}>
    {value.map((product) => (
                <div key={product.id} style={cardStyle}>
                    <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
                    <h3>{product.title}</h3>
                    <p>{product.description.substring(0, 50)}...</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    {/* Conditionally render the button based on the quantity in the cart */}
            {addcart[product.id] > 0 ? (
              <div style={buttonGroupStyle}>
                <button onClick={() => handleDecrement(product.id)} style={buttonStyle}>
                  -
                </button>
                <span style={{ margin: "0 10px" }}>{addcart[product.id] || 0}</span>
                <button onClick={() => handleIncre(product.id)} style={buttonStyle}>
                  +
                </button>
              </div>
            ) : (
              <button onClick={() => handleAddToCart(product.id)} style={buttonStyle}>
                Add to Cart
              </button>
            )}
         
                </div>
            ))}
    </div>
    </>)
}
const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
};
const buttonStyle = {
    padding: "5px 10px",
    fontSize: "16px",
    cursor: "pointer",
    border: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
    borderRadius: "4px",
    outline: "none",
};
const buttonGroupStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  
export default Webhome;