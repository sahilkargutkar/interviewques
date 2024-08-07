import React from 'react'

const Card = (props) => {
    const {handlePopup , id ,movies} =props
    const {EventImageUrl,TrailerURL,EventName } = movies
    console.log("card",movies)

  return (
    <div onClick={(e) =>{
      
        handlePopup(e,id,TrailerURL)  
    }}>
        <img src={EventImageUrl} />
        <div className='eventname'> {EventName}</div>


    </div>
  )
}

export default Card