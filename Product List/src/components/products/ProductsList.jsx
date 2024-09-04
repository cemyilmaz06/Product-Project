import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState } from "react";

const ProductsList = () => {
  const [productData, setProductData] = useState(products)
  const [search, setSearch] = useState("")
  return (
    <>
      <Header categories={categories} />
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={(e)=>setSearch(e.target.value)}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {productData.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase().trim())).map((product)=>(
 <ProductCard {...product} key={product.id} />
          ))}
         
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
