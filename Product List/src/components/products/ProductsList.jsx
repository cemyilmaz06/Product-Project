import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState } from "react";

const ProductsList = () => {
  const [productData, setProductData] = useState(products)
  return (
    <>
      <Header categories={categories} />
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {productData.map((product)=>(
 <ProductCard {...product} key={product.id} />
          ))}
         
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
