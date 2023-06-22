import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";


// Components
import Header from "./components/Header/Header";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />


        <Routes>
          <Route exact path='/' Component={Homepage}>
          </Route>
          <Route path='/details/:id' Component={ReviewDetails}>
          </Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
