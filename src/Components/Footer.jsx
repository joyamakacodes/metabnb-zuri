import footerlogo from "../Assets/Images/footerlogo.svg";
import facebook from "../Assets/Images/facebook.svg";
import instagram from "../Assets/Images/instagram.svg";
import twitter from "../Assets/Images/twitter.svg";
import {Outlet, Link } from "react-router-dom";

const Footer = ()=>{
  return(
    <footer>
      
      <div className="footerCon">
        <div className="footersocials">
        <img src={footerlogo} alt="footer logo"/>
        <div className="socials">
        <img src={facebook} alt="footer logo" />
        <img src={instagram} alt="footer logo" />
        <img src={twitter} alt="footer logo" />
        </div>
        </div>
        
          <div>
            <h3>Community</h3>
            <Link to="/"><p>NFT</p></Link> 
            <Link to="/"><p>Tokens</p></Link> 
            <Link to="/"><p>Landlords</p></Link> 
            <Link to="/"><p>Discord</p></Link> 
          </div>
          <div>
            <h3>Places</h3>
            <Link to="/"><p>Castle</p></Link> 
            <Link to="/"> <p>Farms </p></Link> 
            <Link to="/"><p>Beach</p></Link> 
            <Link to="/"><p>Learn more</p></Link>       
          </div>
          <div>
            <h3>About us</h3>
            <Link to="/"><p>Road map</p></Link> 
            <Link to="/">  <p>Creators  </p></Link> 
            <Link to="/"> <p>Career</p></Link> 
            <Link to="/"><p>Contact us</p></Link> 
          </div>
        </div>
        <div className="copyright">
        <p>&copy; 2022 Metabnb</p>
        </div>
        <Outlet/>
      
    </footer>
    
  )
}
export default Footer