import React, {createContext, useContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {

    const [feedback,setFeedback] = useState([

        {
            id:1,
            text:'This is an item 1',
            rating:4,
        },
        {
            id:2,
            text:'This is an item 2',
            rating:5,
        }
    ])
    
    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const deleteFeedback = (id) => {
        if(window.confirm('are sure you want to delete')){
            //filter out feedback item
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
     }

     //set item to be updated
     const editFeedback = (item) => {
        setfeedbackEdit({
            item,
            edit: true,
        })
     }
     //update feedback item
     const updateFeedBack = (id,upItem) => {
        setFeedback(
            feedback.map((item) => (
                item.id === id ? {...item, ...upItem } : item
            )) 
        )
     }

    return <FeedBackContext.Provider value= {{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedBack,
        feedbackEdit,
        }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext 