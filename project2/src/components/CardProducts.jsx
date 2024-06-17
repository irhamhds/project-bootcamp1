import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

export default function CardProducts({item}) {
  return (
    <Card>
  <img
    alt="Sample"
    src={item.image}
  />
  <CardBody>
    <CardTitle tag="h5">
      {item.title}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
     Price: {item.price}
    </CardSubtitle>
    <CardText>
      Category: {item.category}
    </CardText>
    {/* <Button>
      Button
    </Button> */}
  </CardBody>
</Card>
  )
}
