import React, {createContext, useContext, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)

    const [feedback,setFeedback] = useState([])

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch("http://localhost:5000/feedback?_sort=id&order=desc")
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }
    
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
        isLoading,
        }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext 