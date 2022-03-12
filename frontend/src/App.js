import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Team from "./components/team";
import Quote from "./components/quote";
import Footer from "./components/footer";



function App() {
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Timeline />
     <Team />
     <Quote />
     <Footer/>
    </div>
   
  );
}

export default App;
