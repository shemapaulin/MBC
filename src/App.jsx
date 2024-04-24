import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./components/Routes.jsx";
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
