import React from "react";
import "./Navbar.css";
import Logo from './inllor-logo-03 1.png';
import menus from './menus';
import { Link } from 'react-router-dom';



const Navbar = () => {
      return (
        <>
           
        <div className="nav">
             <div className="logo">
                <img src={Logo} alt="logo" title="Inroll" />
             </div>
             
             {menus.map(menu =>(
              <>   
                <Link to={"/" + menu.key}><button className="register-btn">Qeydiyyat</button></Link>
              </>
               
               ))
              }

        </div>

        </>
      )
}

export default Navbar