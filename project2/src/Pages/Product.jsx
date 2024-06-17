import React from 'react'
import Layout from '../Layout'
import Tabs from '../components/tabs'
import Products from '../features/products/Products'
import { Container } from 'reactstrap'


export default function Product() {
  return (
    <Layout>
      <Container>
          <h1>Mens</h1>
        <Tabs />
        <Products />
      </Container>
   </Layout>
  )
}
