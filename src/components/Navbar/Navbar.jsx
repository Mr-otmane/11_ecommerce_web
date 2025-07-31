import React from 'react'
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div>
        {/* upper Navbar */}
        <div>
            <div>
                <div>
                <a href="#">
                    <img src={Logo} alt="Logo" />
                </a>

            </div>
            {/* search bar and order button */}
            <div>
                <div>
                    <input type="text" placeholder='search' />
                </div>
            </div>
        </div>
        </div>
        {/* lower Navbar */}
        <div></div>
    </div>
  )
}

export default Navbar