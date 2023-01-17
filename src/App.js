import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Header, Footer, PageNotFound } from "./components";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/*' element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
