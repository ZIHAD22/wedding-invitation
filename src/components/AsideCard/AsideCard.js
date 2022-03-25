import React from 'react'
import './AsideCard.css'

const AsideCard = () => {
  return (
    <div className="bg-white side-bar mt-3">
      <h3>Selected Card Design</h3>
      <h5>indian love</h5>
      <div className="mb-3 mt-3">
        <button className="btn btn-primary rounded">
          Choose Better For You
        </button>
      </div>
      <div>
        <button className="btn btn-primary rounded">New Start</button>
      </div>
    </div>
  )
}

export default AsideCard
