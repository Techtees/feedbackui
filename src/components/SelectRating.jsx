
import React, {useState,useContext, useEffect} from 'react'
import FeedBackContext from '../context/FeedBackContext'


function SelectRating ({select}) {
    const [selected, setSelected] = useState(3)
    const {feedbackEdit} = useContext(FeedBackContext);

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])


    const handleChange = (e) => {
        // setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)

    }
    return (
        <ul className="rating">
            {Array.from({length:10}, (_,i) => (
                <li key={`rating-${i+1}`}>
                    <input
                      type='radio'
                      id = {`num${i + 1}`}
                      value = {i +1}
                      name ='rating'
                      onChange={handleChange}
                      checked = {selected === i +1} 
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
      );
}
 
export default SelectRating ;