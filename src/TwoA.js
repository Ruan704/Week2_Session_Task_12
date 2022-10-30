import _, { isEqual } from 'lodash'
import React, { Component } from 'react'

 class TwoA extends React.Component {
    render() {
        const arrOne = [{ 'id' : 20, 'name': 'alex'  }, {id: 30,name: 'alina'}]
        const arrTwo = [{ id : 40,name: 'hello'}, {id: 30,name: 'world'}]

        const result = _.xorBy(arrOne,arrTwo,'id') 
        console.log(result) 
         
        const res =_.unionWith(arrOne,arrTwo,_.isEqual)
        console.log(res)

        const res1 = _.pullAllWith(res, [{ 'id' : 20, 'name': 'alex'  },{ id : 40,name: 'hello'}],_.isEqual)
        console.log(res1)

     return(
        <>
    </> 
    )
  }
}
  export default TwoA