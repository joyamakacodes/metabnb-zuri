import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
import locationvector from "../Assets/Images/locationvector.svg";
import Placesdata from "../Components/Placesdata";
import { useEffect} from "react";
import Dropdown from "../Components/placesDrop";

const Place = ()=>{
  // const[isDropDown, setIsDropDown] = useState(false)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  const places=[
    {
        id:"Home",
        name:"Restaurant",
        link:"/"
    },
    {
        id:"places",
        name:"Cottage",
        link:"/place"
    },
    {
        id:"nfts",
        name:"Castle",
        link:"/"
    },
    {
        id:"community",
        name:"Fantasy city",
        link:"/"
    },
    {
      id:"Home",
      name:"Beach",
      link:"/"
  },
  {
      id:"places",
      name:"Cabins",
      link:"/place"
  },
  {
      id:"nfts",
      name:"Off grid",
      link:"/"
  },
  {
      id:"community",
      name:"Farm",
      link:"/"
  }
]
return(
  <div>
    <Navbar></Navbar>

      <div className="LinksCon">
      <Dropdown />
        <div className="Links">
        
        <ul>
          {places.map((place)=>(
            <Link to="/"><li>{place.name}</li></Link>
          ))}
        </ul>
        
      </div>
      <div>
        <button><div>Location</div> <div><img  src={locationvector} alt="location icon" className="vector" /></div> </button>
      </div>
      </div>
      <Placesdata></Placesdata>
      
      
    <Footer></Footer>
  </div>
)
}
export default Place