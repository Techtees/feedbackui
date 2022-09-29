import React from "react";
import PropTypes from 'prop-types'
import Feedbackitem from "./Feedbackitem"
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import {useContext} from 'react'
import FeedBackContext from "../context/FeedBackContext";

function Feedbacklist({deleteFeedBack}) {
    const {feedback} = useContext(FeedBackContext)
    if( !feedback || feedback.length === 0 ) { return <p>There is no feedback</p>}
    return(
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item) => (
                    <motion.div
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <Feedbackitem 
                    key={item.id}
                    item={item}
                    handleDelete={deleteFeedBack}

                    />
                    </motion.div>
                )
            )}
            
            </AnimatePresence>
        </div>
    )
}


export default Feedbacklist