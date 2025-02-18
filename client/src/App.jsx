import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing libraries
import AnnouncementBar from "./Components/header/AnnouncementBar"; // Import components
import Header from "./Components/header/Header";
import NavBar from "./Components/header/NavBar";
import InstaPage from "./Pages/instapage";
import FbPage from "./Pages/fbpage"; // Ensure proper import (name should start with a capital letter)

const App = () => {
  return (
    <Router>
      <AnnouncementBar />
      <Header />
      <NavBar />
      {/* Routing for different pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default page route */}
        <Route path="/instapage" element={<InstaPage />} />
        <Route path="/fbpage" element={<FbPage />} />
      </Routes>
    </Router>
  );
};

export default App;
