import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/directprivateoffers-logo-bd.png'

function TopNav() {
  return (
    <div className={"topBar"}>
      <div className={"topContainer"}>
        <h1 >DPO Global LLC </h1>
      </div>
      <div className={"lowerContainer"}>
        <div className={"imageContainer"}>
        </div>
       <p className='text-center'>FIAT WINDOW</p> 
      </div>
    </div>
  )
}

export default TopNav