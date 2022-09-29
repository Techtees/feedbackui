import React from 'react'
import {createContext, useContext, useState} from 'react'

const FeedBackContext = createContext();

export const FeedBackProvider = ({children}) => {
    const [feedback,setFeedback] = useState([
        {
            id:1,
            text:'This is an item from context',
            rating:4
        }
    ])

    return <FeedBackContext.Provider value= {{
        feedback,
        }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext 