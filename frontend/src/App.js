// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Timeline from "./components/Timeline";
// import Team from "./components/team";
// import Quote from "./components/quote";
// import Footer from "./components/footer";
import LandingPage from "./components/LandingPage";
// import ShopPage from "./components/ShopPage/ShopPage.jsx";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom" ;  


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/shop" element={< ShopPage />} /> */}
          <Route path="/" element={<LandingPage /> } />
          {/* <Route path="/" element={<Home /> } />
          <Route path="/" element={<Timeline /> } />
          <Route path="/" element={<Team /> } />
          <Route path="/" element={<Quote /> } /> */}
          

        </Routes>
      </Router>
     

    </div>
   
  );
}

export default App;
