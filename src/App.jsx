import React, { useState } from 'react'
import Coffees from './components/Coffees'
import Pastries from './components/Pastries'
import Teas from './components/Teas'
import './MenuStyles.css'

const App = () => {
  // const [coffees] = useState(["Espresso", "Cappuccino", "Latte"]);
  const coffees = ["Espresso", "Cappuccino", "Latte"] 

  return (
    <div className='menu-board'>

      <h3>Coffees with items from app</h3>
      <Coffees items={coffees} name={"Sally"}/>

      <h3>Default </h3>
      <Coffees /> 
      <Pastries />
      <Teas />
    </div>
  )
}

export default App