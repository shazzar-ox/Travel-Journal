import { useState } from 'react'
import Header from './Header'
import FavPlace from './Favplace'
import data from './Data'


import './App.css'

const App = () => {
  console.log(data)

  const dataEl = data.map((item)=> {

    return (

      <FavPlace
      key = {item.key}
      {...item}
      />) 

  })

  return(
    <>
      <Header/>
      {dataEl}
    </>
  )



}

export default App