import close from "../Assets/Images/close.svg";
import Modal from "../Components/Modal.js";
import {useState} from "react"
import {Link} from "react-router-dom";

const Navlink =({setIsNavExpanded})=>{
  const [isOpen, setIsOpen]=useState(false);
  const handleClose=()=>{
    return setIsNavExpanded(false)
  }
  const links=[
    {
        id:"twitter",
        name:"Home",
        link:"/"
    },
    {
        id:"btn_zuri",
        name:"Places to Stay",
        link:"/place"
    },
    {
        id:"books",
        name:"NFTs",
        link:"/"
    },
    {
        id:"book_python",
        name:"Community",
        link:"/"
    }
]
  return(
    <div id="NavlinkResp">
      <div id="navigation-menu">
      <div className="Navclose">
        <div></div>
        <img src={close} alt="close" onClick={handleClose}/></div>
      <div>
            <ul>
                {links.map((link)=>(
                <Link to={link.link}><li>{link.name}</li></Link>
                ))}
            </ul>
            </div>
            <div>
            <button type="button" id="connectBtn" onClick={() => setIsOpen(true)}>Connect Wallet</button>
            
            </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
      </div>
  )
}
export default Navlink