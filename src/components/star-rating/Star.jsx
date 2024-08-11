import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

const Star = ({noOfStars = 5}) => {

  const [state, setState] = useState(0)
  const [hover, setHover] = useState(0)
  const [rating, setRating] = useState(0)

  const handleClick = (curIndex) => {
    console.log("Click: ",curIndex)
    setRating(curIndex)
  }
  
  const handleMouseEnter = (curIndex) => {
    console.log("Hover: ", curIndex)
    setHover(curIndex)
    
  }
  
  const handleMouseLeave = () => {
    console.log("Leave : ", rating)
    setHover(rating)

  }

  return (
    <div className='star-rating'>
      {
        [...Array(noOfStars)].map((_, index) => {
          index+=1
          return <FaStar 
          className={index <= (hover || rating) ? 'active':'inactive'}
          key = {index}
          onClick={() => handleClick(index)}
          onMouseMove={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
          size={40} />
        })
      }
      
    </div>
  )
}

export default Star
