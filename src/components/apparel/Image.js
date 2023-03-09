import React from "react"
import useDragger from "../../hooks/drag"

const UserImage = () => {
  
  useDragger("circle")

  return <div id="circle" className="circle"></div>
}

export default UserImage