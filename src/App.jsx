import Header from "./components/header.jsx";
import HeroComponent from "./components/HeroComponent.jsx";
import LilttleAbt from "./components/lilttleAbt.jsx";
import Corevalues from "./components/corevalues.jsx";
import Footer from "./components/footer.jsx";
import Testimonial from "./components/Testimonial.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./components/Routes.jsx";
import Garelly from "./components/Garelly.jsx";
function App() {
  

  

  return (
    <>
    <Router>
     <Header/>
     <MainRoutes/>
     <Footer/>
     </Router>
     
     
    
    </>
  );
}

export default App;
