import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";


// Components
import Header from "./components/Header/Header";


function App() {
  return (
    <Router className='App'>
      {/* <div className="App"> */}
        <Header />


        <Routes>
          <Route exact path='/' Component={Homepage} />
          <Route path='/details/:id' Component={ReviewDetails} />
          <Route path='/category/:id' Component={Category} />
        </Routes>

      {/* </div> */}
    </Router>
  );
}

export default App;
