import React, { useState } from 'react'
import './Styling.css';


function Button({value, onSquareClick}) {
    // const [value, setValue] = useState(null);

    // function clicking(){
    //     setValue('X')
    // }
  return (
    
    <div>
      <div className="boxx">
        <button onClick={onSquareClick} ><h1>{value}</h1></button>
      </div>
    </div>
  )
}

export default Button
