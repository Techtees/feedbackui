import { useState } from 'react';
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import React from "react";
import FeedBackdata from './data/FeedBackdata';

function App() {
  const [feedback, setFeedback] = useState(FeedBackdata)

  const handleDelete = (id) => {
   if(window.confirm('are sure you want to delete')){
    setFeedback(feedback.filter((item)=> item.id !== id))
   }
  }

  return (
    <>
    <Header/>
     <div className="container">
       <Feedbacklist 
         feedback = {feedback}
         deleteFeedBack = {handleDelete}
        />
     </div>
    </>
  );
}

export default App;
