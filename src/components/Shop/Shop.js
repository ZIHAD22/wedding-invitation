import React, { useEffect, useState } from 'react'
import AsideCard from '../AsideCard/AsideCard'
import ItemCard from '../ItemCard/ItemCard'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [aSideCardsInfo, setAsideCardsInfo] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const handleAddToCard = (productInfo) => {
    const isInCard = aSideCardsInfo.find((card) => card.id === productInfo.id)
    if (!isInCard && aSideCardsInfo.length <= 3) {
      setAsideCardsInfo([...aSideCardsInfo, productInfo])
    } else {
      console.log('this is already on the card')
    }
  }
  useEffect(() => console.log(aSideCardsInfo), [aSideCardsInfo])
  return (
    <div className="container">
      <div className="row g-0">
        <div className="col-md-9">
          <div className="row g-0 pt-3">
            {products.map((product) => (
              <ItemCard
                key={product.id}
                product={product}
                handleAddToCard={handleAddToCard}
              />
            ))}
          </div>
        </div>
        <div className="col-md-3 ">
          <AsideCard aSideCardsInfo={aSideCardsInfo} />
        </div>
      </div>
    </div>
  )
}

export default Shop
