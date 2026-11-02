import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default Item