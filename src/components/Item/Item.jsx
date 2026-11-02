import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Item.css'

const Item = ({ product }) => {
  return (
    <Card style={{ width: '18rem', height: '100%' }}>
      <Card.Img 
        variant="top" 
        src={product.img} 
        style={{ height: '250px', objectFit: 'cover' }} 
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="dark">Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default Item