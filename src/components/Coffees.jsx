import React from 'react'
// import '../MenuStyles.css'

const Coffees = ({ items, name }) => {
  return (
    <div>
      <h1>Coffees</h1>
      { items.map((item, index) => <p key={index}>{item}</p> )}

      <p>Welcome {name}</p>
    </div>
  )
}

Coffees.defaultProps = {
  items: ["Espresso Default", "Cappuccino Default", "Latte Default"], 
  name: "Generic User"
}

export default Coffees

