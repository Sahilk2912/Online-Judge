import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flowbite, DarkThemeToggle } from "flowbite-react";
// import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Problems from "./pages/Problems";
import Dashboard from "./pages/Dashboard";
import Header from "./Components/Header";
import CreateProblems from "./pages/CreateProblems";

export default function App() {
  return (
    <BrowserRouter>
      <Flowbite>
        <Header />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-problem" element={<CreateProblems />} />
        </Routes>
        {/* <Footer heading="Footerrr" /> */}
      </Flowbite>
    </BrowserRouter>
  );
}
