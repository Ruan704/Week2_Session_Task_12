import React from "react";

const HOC = (Propsect) => {
   console.log(Propsect)
   const color = ['Red' , 'Green' , 'Blue' , 'purple']
   const randomColor = color[Math.floor(Math.random() * 4)];

   return () =>{
    return(
        <>
        <div style={{color: randomColor}}>
          <Propsect/>
        </div>
        </>
    )
   }
    
}
export default HOC;
