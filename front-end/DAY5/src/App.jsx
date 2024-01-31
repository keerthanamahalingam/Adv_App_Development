
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./Components/Signup";  
import Login from "./Components/Login";
import Userhome from "./Components/Userhome";
import AboutUs from "./Components/AboutUs";
import Events from "./Components/Events";
import ContactUs from "./Components/ContactUs";
import Theme from "./Components/Theme";
import Venue from "./Components/Venue";
import BookingPage from "./Components/BookingPage";

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/userhome" element={<Userhome />} />
        
        <Route path="/Events" element={<Events />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Theme" element={<Theme />} />
        <Route path="/Venue" element={<Venue />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;



