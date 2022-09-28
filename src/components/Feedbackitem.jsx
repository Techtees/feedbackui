import React from "react";
import { FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'

import Card from "./shared/Card";

function Feedbackitem({item,handleDelete}){
    return(
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            <button className='close' onClick ={() => handleDelete(item.id) }>
                 <FaTimes color='purple' />
            </button>
        </Card>
    )
}

Feedbackitem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Feedbackitem;