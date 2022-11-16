import "../Components/modal.css";
import close from "../Assets/Images/close.svg";
import coloredmask from "../Assets/Images/coloredmask.svg";
import wallet from "../Assets/Images/walletconnect.svg";
import gotovector from "../Assets/Images/goto.svg";



const Modal = ({ setIsOpen }) => {
  const handleClose=()=>{
    return setIsOpen(false)
  }

  return (
    
    <div className="modalCon">
      <div className="connectWallet">
        <div><h4>Connect Wallet</h4></div>
        <div><img src={close} alt="close" onClick={handleClose} className="closeIcon"/></div>
      </div>
      <div className="connectHeading">
      <p>choose your preferred wallet</p>
      <div className="connectCon">
        <div>
        <img src={coloredmask} alt="mask icon"/>
        </div>
        <div><img src={gotovector} alt=" icon" className="gotovector"/></div>
      </div>
      <div className="connectCon">
        <div>
        <img src={wallet} alt="mask icon"/>
        </div>
        <div><img src={gotovector} alt=" icon" className="gotovector"/></div>
      </div>

      </div>
     
    </div>
  );
};
export default Modal