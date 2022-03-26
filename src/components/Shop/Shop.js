import React, { useEffect, useState } from 'react'
import AsideCard from '../AsideCard/AsideCard'
import ItemCard from '../ItemCard/ItemCard'
import WarningModal from '../WarningModal/WarningModal'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [aSideCardsInfo, setAsideCardsInfo] = useState([])
  const [isChoosed, setIschoosed] = useState(false)
  const [isModalShow, setModalIsShow] = useState({ isShow: false })

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const handleAddToCard = (productInfo) => {
    const isInCard = aSideCardsInfo.find((card) => card.id === productInfo.id)
    if (!isInCard && aSideCardsInfo.length <= 3 && !isChoosed) {
      setAsideCardsInfo([...aSideCardsInfo, productInfo])
    } else {
      if (isInCard) {
        const modalText = 'This is already on the card'
        handleWarningModal(modalText, true)
      }
      if (aSideCardsInfo.length === 4) {
        const modalText = 'You Can Only Add 4 item On card'
        handleWarningModal(modalText, true)
      }
    }
  }

  const handleWarningModal = (modalText, isShow = false) => {
    const modalObj = {
      isShow: isShow ? true : false,
      modalText: modalText,
    }
    setModalIsShow(modalObj)
  }

  const handleCardClear = () => {
    return aSideCardsInfo.length === 0
      ? console.log('please Select then Clear')
      : (setAsideCardsInfo([]), setIschoosed(false))
  }

  const handleBetterChoose = () => {
    const randomIndex = Math.floor(Math.random() * aSideCardsInfo.length)
    console.log(randomIndex)
    const selectedItem = aSideCardsInfo[randomIndex]
    setIschoosed(!isChoosed)
    setAsideCardsInfo([selectedItem])
  }

  const handleCardDelete = (id) => {
    const withOutDeletedItem = aSideCardsInfo.filter((card) => card.id !== id)
    setAsideCardsInfo(withOutDeletedItem)
    if (isModalShow.isShow) {
      handleWarningModal()
    }
  }

  useEffect(() => console.log(aSideCardsInfo), [aSideCardsInfo])
  return (
    <div className="container position-relative">
      <div className="row g-0">
        <div className="col-md-9">
          <div className="row g-0 pt-3">
            {products.map((product) => (
              <ItemCard
                key={product.id}
                product={product}
                handleAddToCard={handleAddToCard}
                modalShow={isModalShow.isShow}
              />
            ))}
          </div>
        </div>
        <div className="col-md-3 ">
          <AsideCard
            aSideCardsInfo={aSideCardsInfo}
            handleCardClear={handleCardClear}
            handleBetterChoose={handleBetterChoose}
            handleCardDelete={handleCardDelete}
            enableBtn={isChoosed}
          />
        </div>
      </div>
      {isModalShow.isShow ? (
        <WarningModal
          modalInfo={isModalShow}
          handleWarningModal={handleWarningModal}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default Shop
