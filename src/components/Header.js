
import { useState } from "react";

const Header = () => {

    const [anim1, setAnim1]= useState(false)


    const setAnimation = (l) => {
        if (l === 1) {
            setAnim1(!anim1)
        }
        
  }
  //console.log(od)
  return (
    <div className='header'>
      <div className="brand">
        <img src="/0cb72a78db43c9d1050339968d38b900.jpg" className="header_img" alt="img" />
        <div className="header_name">Joseph A.</div>
      </div>
    </div>
    
  );
};

export default Header