import { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/data").then(({ data }) => {
      setProduct(data);
    });
  }, []);

  return (
    <div className="product">
      {product.map((e) => (
        <div key={e.id}>
          <img src={e.image} alt="" />
          <div className="link">
            <Link to={`/categories/${e.id}`}>{e.title}</Link>
            <div className="flex">
              <p>₹: {Math.ceil(e.price)}</p>
              <p>Rating: {e.rating.rate}</p>
            </div>
            <button className="btn">Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};
