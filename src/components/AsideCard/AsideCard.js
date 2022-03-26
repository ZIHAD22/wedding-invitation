import React from 'react'
import QuestionAccordion from '../QuestionAccordion/QuestionAccordion'
import SelectedCardItem from '../SelectCardItem/SelectedCardItem'
import './AsideCard.css'

const AsideCard = ({
  aSideCardsInfo,
  handleCardClear,
  handleBetterChoose,
  handleCardDelete,
  enableBtn,
}) => {
  const isTrue = () => {
    return aSideCardsInfo.length === 0 ? true : false
  }
  return (
    <div className="bg-white side-bar mt-3">
      {isTrue() ? '' : <h3>Selected Card Design</h3>}
      {!isTrue() ? (
        aSideCardsInfo.map((cardInfo) => (
          <SelectedCardItem
            key={cardInfo.id}
            cardInfo={cardInfo}
            handleCardDelete={handleCardDelete}
            enableBtn={enableBtn}
          />
        ))
      ) : (
        <h5>Please Add To Card A Product</h5>
      )}
      <div className={!isTrue() ? 'mb-3 mt-3 d-block' : 'd-none'}>
        <button
          onClick={handleBetterChoose}
          className="btn btn-primary rounded"
          disabled={enableBtn}
        >
          Choose Better For You
        </button>
      </div>
      <div className={!isTrue() ? 'd-block' : 'd-none'}>
        <button onClick={handleCardClear} className="btn btn-primary rounded">
          New Start
        </button>
      </div>
      <div className="container question">
        <h5 className="text-center">Question Answer</h5>
        <QuestionAccordion />
      </div>
    </div>
  )
}

export default AsideCard
