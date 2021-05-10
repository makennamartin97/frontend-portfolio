import React,{useState} from 'react';
import logo from '../images/finallogo2.png'
import close from "../images/x-mark-16.png";
import open from "../images/whiteopen.png";




const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    
    return (
        <div className="parent">
        <nav className="nav sticky">
            <div className="logo-nav">
            <div className="logo-container">
        
            <a href="#"><img src={logo} className="navlogo" alt="logo"/></a>
            </div>

            

            <ul className={click ? "nav-options active" : "nav-options"}>
                
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#about">ABOUT ME</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#skills" >SKILLS</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#experience" >EXPERIENCE</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#projects" >PROJECTS</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="/#contact" >CONTACT</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vRm3YCF2A6i5X5K8gVRSywGir5pEfqh2aynf6Ykko7byabrBDLLTaBPtXHKd2KfVv40DqL3B1hEp_Ql/pub">RESUME</a>
                </li>
               
                



            </ul>
            </div>
            <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <img src={close} className="menu-icon2" />
        ) : (
          <img src={open} className="menu-icon1" />
        )}
      </div>
        </nav>
        
        </div>
    )
}

export default Navbar;