import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Footer from "../Components/Footer";
import { useEffect } from "react";
const Home =()=>{
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, [])
    return(
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>

        </div>
    )
}
export default Home