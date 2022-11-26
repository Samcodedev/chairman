import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Chairman from './Chairman/Chairman';
import NavBar from './NavBar/NavBar';
import Government from './Government/Government';
import DepartProfile from './Department/DepartProfile/DepartProfile';
import Legislature from './Legislature/Legislature';

const Component = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chairman" element={<Chairman />} />
            <Route path="/government" element={<Government />} />
            <Route path="/works" element={<DepartProfile />} />
            <Route path="/legislature" element={<Legislature />} />
            {/* <Route path="*" element={<Error />} /> */}
        </Routes>
    </Router>
  )
}

export default Component
