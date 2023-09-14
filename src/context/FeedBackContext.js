import React, {createContext, useContext, useEffect, useState} from 'react'

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback,setFeedback] = useState([])

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }
    
    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
        
        setFeedback([data, ...feedback])
    }
    
    const deleteFeedback = async (id) => {
        if(window.confirm('are sure you want to delete')){
            //filter out feedback item
            await fetch(`/feedback/${id}`, {method: 'DELETE'})
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
     //set item to be updated
     const editFeedback = (item) => {
        setfeedbackEdit({
            item,
            edit: true,
        })
     }
     //update feedback item
     const updateFeedBack = async(id,upItem) => {
        console.log(upItem);
        const response = await fetch(`/feedback/${id}`, {
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upItem)
        })
        const data = await response.json()

        setFeedback(
            feedback.map((item) => (
                item.id === id ? {...item, ...data} : item
            )) 
        )
     }

    return <FeedBackContext.Provider value= {{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedBack,
        }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext 