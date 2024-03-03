import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Portfolio from "./Pages/Portfolio.jsx"
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
function App() {
    return (  
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;