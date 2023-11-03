import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  let {id} = useParams()
  const[product, setProduct] = useState(null)
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/eugene9851/hnm/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProduct(data)
  }
  useEffect(() => {
    getProductDetail()
  },[])
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img}/>
        </Col>
        <Col>
          <h4 className="detail">{product?.title}</h4>
          <div className="detail">{product?.price}</div>
          <Dropdown className="detail">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="d-grid gap-2">
            <Button variant="dark" size="lg">
              장바구니에 추가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
