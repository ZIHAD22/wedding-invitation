import React, { useEffect, useState } from 'react'
import ItemCard from '../ItemCard/ItemCard'

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div className="row g-0">
      <div className="col-md-9">
        <div className="row g-0 pt-3">
          {products.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))}
          {/* <ItemCard product={products[0]} /> */}
        </div>
      </div>
      <div className="col-md-3">
        <h1>this is shop cart</h1>
      </div>
    </div>
  )
}

export default Shop
