import _, { isEqual } from 'lodash'
import React, { Component } from 'react'

 class TwoC extends React.Component {
    render() {
        let array = [['E', 'F'], [['F'], ['G']]]
        let newArray = array.flat(Infinity)
        console.log("This is the output for question 2D : ", newArray)
     return(
        <>
    </> 
    )
  }
}
  export default TwoC