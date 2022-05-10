import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DataDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/data/2").then(({ data }) => {
      setProduct(data);
      console.log(data.rating.rate);
    });
  }, []);

  return (
    <div className="product-detail">
      <div className="box1">
        <img src={product.image} alt="" />
      </div>
      <div className="box2">
        <h1>{product.title}</h1>
        <span>
          <strong>Categories:</strong> {product.category}
        </span>
        <div className="flex">
          <h1>Price: {product.price}</h1>
          <h1>Rating: 3.4</h1>
        </div>
        <p>{product.description}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};
