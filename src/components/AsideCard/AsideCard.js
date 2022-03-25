import React from 'react'
import SelectedCardItem from '../SelectCardItem/SelectedCardItem'
import './AsideCard.css'

const AsideCard = ({ aSideCardsInfo }) => {
  const isTrue = () => {
    return Object.keys(aSideCardsInfo).length === 0 ? true : false
  }
  return (
    <div className="bg-white side-bar mt-3">
      {isTrue() ? '' : <h3>Selected Card Design</h3>}
      {!isTrue() ? (
        aSideCardsInfo.map((cardInfo) => (
          <SelectedCardItem key={cardInfo.id} cardInfo={cardInfo} />
        ))
      ) : (
        <h5>Please Select Wedding Card</h5>
      )}
      <div className={!isTrue() ? 'mb-3 mt-3 d-block' : 'd-none'}>
        <button className="btn btn-primary rounded">
          Choose Better For You
        </button>
      </div>
      <div className={!isTrue() ? 'd-block' : 'd-none'}>
        <button className="btn btn-primary rounded">New Start</button>
      </div>
    </div>
  )
}

export default AsideCard
