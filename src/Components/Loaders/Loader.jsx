import React from 'react'
import { Ripples } from '@uiball/loaders'
import loader from "../Loaders/loader.css"



function Loader() {
  return (
    <div className='loading'>
        <Ripples 
        size={190}
        speed={2} 
        color="black"
        />
    </div>
  )
}

export default Loader