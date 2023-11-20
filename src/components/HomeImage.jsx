import React from 'react'
import Image from 'next/image'; 

import Home from "../assets/Home.svg"

const HomeImage = () => {
  return (
    <Image width={1200} src={Home} alt="Home Image" />
  )
}

export default HomeImage