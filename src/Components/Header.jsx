import headerpics from "../Assets/Images/headerpics.svg";
const Header = ()=>{
    return(
        <div>
            <header>
                <div className="HeadingCon">
                    <h1>Rent <span>a place</span> away from <span>Home</span> in <span>Metaverse</span></h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div>
                        <input type="search" placeholder="search for location" />
                        <button>Search</button>
                    </div>
                </div>
                <div className="imageCon">
                    <div className="headerImg1">
                    <img src={headerpics} alt="header Images" className="headerpic"/>
                   
                    </div>
                   
                    
                </div>
               
            </header>
        </div>
    )
}
export default Header