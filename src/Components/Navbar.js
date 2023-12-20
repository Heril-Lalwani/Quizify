import React from 'react'
import {Link } from 'react-router-dom'

const Navbar = () => {
  const mystyle={
    backgroundColor: "rgb(192, 141, 78)",
    textAlign: "left"
    // paddingRight:"10px"
  };
  return (
    <>
    <nav style={mystyle} >
    <div>
      
         <Link to ="/" style={{marginRight:"10px",fontSize:"20px"}}>Home</Link>
        <Link to ="/createquestions" style={{marginRight:"10px",fontSize:"20px"}}>Create Questions</Link>
    </div>
    </nav>
    
    </>
  )
}

export default Navbar