import React from "react";
import PropTypes from 'prop-types'
import Feedbackitem from "./Feedbackitem"
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'


function Feedbacklist({feedback, deleteFeedBack}) {
    if( !feedback || feedback.length === 0 ) { return <p>There is no feedback</p>}

    // return (
    //     <div className='feedback-list'>
           
    //        {
    //             feedback.map((item) => 
    //                  (
    //                     <Feedbackitem
    //                     key = {item.id}
    //                     item = {item}
    //                     handleDelete = {deleteFeedBack}
    //                 />
    //                 )
    //             )
    //         }
         
    //     </div>
    // )


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

Feedbackitem.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }
    )
  )
}


export default Feedbacklist