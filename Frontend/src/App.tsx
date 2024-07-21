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
        <div className= "flex flex-col min-h-screen w-full bg-slate-500 text-gray-950 dark:bg-slate-900 dark:text-neutral-500">
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-problem" element={<CreateProblems />} />
          </Routes>
        </div>
        {/* <Footer heading="Footerrr" /> */}
      </Flowbite>
    </BrowserRouter>
  );
}
