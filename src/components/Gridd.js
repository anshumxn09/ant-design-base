import React from "react";
import {Card } from "antd";
import Data from './CardData'
const Gridd = () => {
  return (<>
    <h1 style={{textAlign : 'center'}}>Top Albums</h1>
    <div className="gridContainer" style={{display : "flex", justifyContent : "center", alignItems : "center", flexWrap : "wrap"}}>
      {
        Data.map((elem, index) => {
          return <Card key={index} style={{margin : "10px"}}>
          <img src={elem.img} alt="" width={300} height={300} style={{objectFit : "cover"}}/>
            <p>{elem.name}</p>
          </Card>
        })
      }
    </div>
    </>
  );
};

export default Gridd;
