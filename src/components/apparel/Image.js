import React from "react"
import useDragger from "../../hooks/drag"
import './Image.css'
import { useEffect, useState } from "react"

const UserImage = (props) => {
  const {design} = props
  console.log(design)
  const imageDesign = document.getElementById('picture')

  if(design.url != ''){
    imageDesign.style.backgroundImage=`url(${design.url})`
    imageDesign.style.height=`${design.height}`
    imageDesign.style.width=`${design.width}`
    console.log('this is image design',imageDesign)
  }

  
  useDragger("picture")

  return <div id="picture" className="picture"></div>
}

export default UserImage