import React from "react";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import { v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import FeedBackdata from './data/FeedBackdata';
import Feedbackstats from './components/Feedbackstats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/shared/AboutIconLink";
import FeedBackContext, { FeedBackProvider } from "./context/FeedBackContext";


function App() {
  const [feedback, setFeedback] = useState(FeedBackdata)

  const handleDelete = (id) => {
   if(window.confirm('are sure you want to delete')){
     setFeedback(feedback.filter((item) => item.id !== id))
   }
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedBackProvider>
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route exact element = {
              <>
              <FeedbackForm handleAdd={addFeedback} />
              <Feedbackstats/>
              <Feedbacklist 
                
                deleteFeedBack = {handleDelete}
                />
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
