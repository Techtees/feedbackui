import React from "react";
import { FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

import Card from "./shared/Card";

function Feedbackitem({item}){
    const {deleteFeedback,feedBackEdit} = useContext(FeedBackContext)
    return(
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            <button className='close' onClick ={() => deleteFeedback(item.id) }>
                 <FaTimes color='purple' />
            </button>
            <button className='edit' onClick={ () => feedBackEdit(item)}>
                 <FaEdit color='purple' />
            </button>
        </Card>
    )
}

Feedbackitem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Feedbackitem;