import _, { isEqual } from 'lodash'
import React, { Component } from 'react'

 class TwoC extends React.Component {
    render() {
        let array = [['E'], ['F']]
        let newArray = _.flatten(array)
        console.log("This is the output for question 2C : ", newArray)
     return(
        <>
    </> 
    )
  }
}
  export default TwoC