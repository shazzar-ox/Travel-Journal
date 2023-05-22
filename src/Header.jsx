import React  from "react";
import logo from './assets/logo.png'

const Header = () => {

    return(
        <>
            <nav>
                <img src={logo} alt="" />
                <span> my travel journal</span>
            </nav>        
        </>
    )
}
export default Header