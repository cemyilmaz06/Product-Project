import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import { useState } from "react";

const ProductsList = () => {
  const [productData, setProductData] = useState(products)
  const [search, setSearch] = useState("")
const handleClick=(category)=>{
  if(category === "all"){
    setProductData(products);
  }else{
    const filteredProduct=()=>(products.filter((product)=>product.category === category))
    setProductData(filteredProduct);
  }
}
  return (
    <>
      <Header categories={categories} handleClick={handleClick}/>
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
