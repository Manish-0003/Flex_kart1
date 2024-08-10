import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../assets/Data";
import "./ProductDetail.css";
import Product from "./Product";


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id === id);

    setProduct(filterProduct[0]);

    const relatedProducts = items.filter((prod) =>prod.category === product.category)
    setRelatedProducts(relatedProducts)
  }, [id, product.category]);

  return (
    <>
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt={""} />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">₹{product.price}</button>
          <button className="btn btn-warning">Add to Cart</button>
        </div>
      </div>
      <h2 className="text-center"> Related Products</h2>
      <Product items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
