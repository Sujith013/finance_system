import React, { JSX } from 'react'
import './Card.css'
import cardLogo1 from '../../images/card_logo1.jpeg'

interface Props  {
    companyName:string;
    ticker:string;
    price:number;
}

const Card:React.FC<Props> = ({companyName,ticker,price}:Props) : JSX.Element => {
  return (
    <div className='card'>
      <img src={cardLogo1} alt="image" />
      <div>
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <p className='info'></p>
    </div>
  )
}

export default Card
