import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AnnouncementBar from "./Components/header/AnnouncementBar";
import Header from "./Components/header/Header";
import NavBar from "./Components/header/NavBar";
import IgPage from "./Pages/IgPage"; // ✅ Fix Component Name
import IgSignup from "./Pages/IgSignup";
import FbLogin from "./Pages/FbLogin";
import FacebookSignup from "./Pages/facebookSignup";
import Home from "./Pages/home";
import ReviewShow from "./Components/Reviews/ReviewShow";
// import ReviewPush from "./Components/Reviews/ReviewPush";

const App = () => {
  return (
    <Router>
      <AnnouncementBar />
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/igpage" element={<IgPage />} />
        <Route path="/instagramsignup" element={<IgSignup />} />
        <Route path="/facebooklogin" element={<FbLogin />} />
        <Route path="/facebooksignup" element={<FacebookSignup />} />
        <Route path="/reviews" element={<ReviewShow />} />
        {/* <Route path="/add-review" element={<ReviewPush />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
