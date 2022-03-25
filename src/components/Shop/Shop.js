import React, { useEffect, useState } from 'react'
import AsideCard from '../AsideCard/AsideCard'
import ItemCard from '../ItemCard/ItemCard'

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div className="container">
      <div className="row g-0">
        <div className="col-md-9">
          <div className="row g-0 pt-3">
            {products.map((product) => (
              <ItemCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="col-md-3 ">
          <AsideCard />
        </div>
      </div>
    </div>
  )
}

export default Shop
