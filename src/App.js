import { Routes,Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contacts from "./Components/Contacts/Contacts";
import Business from "./Components/Business/Business";
import Portfolio from "./Components/Portfolio/Portfolio";
import Notfound from "./Components/Notfound/Notfound";
import Footer from "./Components/Footer"
import Header from "./Components/Header";
import Preheader from "./Components/Preheader/Preheader";
import Developer from "./Components/Developer/Developer";
import Teams from "./Components/Teams/Teams";
import "./App.css";
// import Footer from "./Components/Footer";
function App() {
  return (
      <div>
        <Preheader/>
        <Header/>
        {/* <Footer/> */}
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/business' element={<Business/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/contact' element={<Contacts/>}></Route>
          <Route path='/developer' element={<Developer/>}></Route>
          <Route path='/teams' element={<Teams/>}></Route>
          <Route path="*" element={<Notfound/>}></Route>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
