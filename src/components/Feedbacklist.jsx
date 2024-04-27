import React from "react";
import PropTypes from 'prop-types'
import Feedbackitem from "./Feedbackitem"
import Spinner from "./shared/Loader";
import {AnimatePresence, motion} from 'framer-motion'
import {useContext} from 'react'
import FeedBackContext from "../context/FeedBackContext";

function Feedbacklist() {
    const {feedback, isLoading} = useContext(FeedBackContext)
    if(!isLoading && (!feedback || feedback.length === 0 )) { return <p>There is no feedback</p>};

    return isLoading ? <Spinner />: (
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
                    />
                    </motion.div>
                )
            )}
            
            </AnimatePresence>
        </div>
    )
}


export default Feedbacklist