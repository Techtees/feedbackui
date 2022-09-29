import React, {createContext, useContext, useState} from 'react'
import { v4 as uuidv4} from 'uuid'

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {

    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:'This is an item 1',
            rating:4
        },
        {
            id:2,
            text:'This is an item 2',
            rating:5
        }
    ])
    const [editFeedback,setEditFeedBack] = useState({
        item:{},
        edit:false
    })

    const deleteFeedback = (id) => {
        if(window.confirm('are sure you want to delete')){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
     }

     const feedBackEdit = (item) => {
        setEditFeedBack({
            item,
            edit:true
        })
     }

    return <FeedBackContext.Provider value= {{
        feedback,
        deleteFeedback,
        addFeedback,
        feedBackEdit,
        editFeedback,
        }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext 