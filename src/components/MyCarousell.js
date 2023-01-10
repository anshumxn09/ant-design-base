import { Carousel } from 'antd';
import React from 'react'
import './Carousel.css';

const MyCarousell = () => {
  return (
    <div className='carouContainer'>
      <Carousel autoplay pauseOnHover={true} draggable>
        <div className='carou-comp'>
          <img src="https://www.hollywoodreporter.com/wp-content/uploads/2022/12/GettyImages-1448719385.jpg?w=1296" alt=""/>
        </div>
        <div className='carou-comp'>
          <img src="https://static.hiphopdx.com/2022/11/the-weeknd-trilogy-streaming-removal-1200x675.jpg" alt=""/>
        </div>
        <div className='carou-comp'>
          <img src="https://s.yimg.com/ny/api/res/1.2/CRkMSgXv0e0Rb5EwX8UWwg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/afrotech_articles_589/f3c024f330fc60da4a16341629b79445" alt=""/>
        </div>
        <div className='carou-comp'>
          <img src="https://www.nme.com/wp-content/uploads/2021/08/Weeknd-May-2021.jpg" alt=""/>
        </div>
      </Carousel>
    </div>
  )
}

export default MyCarousell