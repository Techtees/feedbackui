import React from "react";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import Feedbackstats from './components/Feedbackstats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/shared/AboutIconLink";
import FeedBackContext, { FeedBackProvider } from "./context/FeedBackContext";


function App() {
  return (
    <FeedBackProvider>
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route exact element = {
              <>
              <FeedbackForm />
              <Feedbackstats />
              <Feedbacklist />
              </>
            } path="/" />
            
          <Route path="/about" element={<AboutPage/>} />
          </Routes>
          <AboutIconLink />
        </div>
    </Router>
    </FeedBackProvider>
  );
}

export default App;
