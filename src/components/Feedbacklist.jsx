import PropTypes from 'prop-types'
import Feedbackitem from "./Feedbackitem"

function Feedbacklist({feedback, deleteFeedBack}) {
    if( !feedback || feedback.length ===0 ) { return <p>There is no feedback</p>}
    return(
        <div className="feedback-list">
            { 
                feedback.map((item)=> {
                    return(
                        <Feedbackitem
                          key={item.id}
                          item = {item} 
                          handleDelete= {deleteFeedBack}
                        />
                    )
                })
            }
        </div>
    )
}

Feedbackitem.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        }
    )
  )
}


export default Feedbacklist