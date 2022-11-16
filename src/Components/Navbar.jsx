import logo from "../Assets/Images/logo.svg";
import hamburger from "../Assets/Images/hamburger.svg";
import { Outlet, Link } from "react-router-dom";
import {useState} from "react";
import Modal from "../Components/Modal.js";
import Navlink from "./Navlink";
const Navbar = ()=>{
    const [isOpen, setIsOpen]=useState(false);
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const handleToggle = () => {
        setIsNavExpanded(prev => !prev)
      }

   
    const links=[
        {
            id:"Home",
            name:"Home",
            link:"/"
        },
        {
            id:"places",
            name:"Places to Stay",
            link:"/place"
        },
        {
            id:"nfts",
            name:"NFTs",
            link:"/"
        },
        {
            id:"community",
            name:"Community",
            link:"/"
        }
    ]
    return(
        <div className="barCon">
        <nav>
            <div>
            <img src={logo} alt="metabnb logo" className="logo"/>
            </div>
            <div>
            <img src={hamburger} alt="hamburger icon" onClick={handleToggle} className="hamburger"/>
            </div>
            
            <div className="linkButton" >
            
            <div>
            <ul>
                {links.map((link)=>(
                <Link to={link.link}><li>{link.name}</li></Link>
                ))}
            </ul>
            </div>
            <div>
            <button type="button" onClick={() => setIsOpen(true)}>Connect Wallet</button>
            </div>
            </div>
            
            
            {isOpen && <Modal setIsOpen={setIsOpen} />}
            {isNavExpanded && <Navlink setIsNavExpanded={setIsNavExpanded} />}
           
            
            <Outlet></Outlet> 
        </nav>
       
        </div>
    )
}
export default Navbar