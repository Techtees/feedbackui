import React, {useState} from 'react'
import Card from "./shared/Card"
import Button from './shared/Button'
import SelectRating from './SelectRating'

function FeedbackForm ({handleAdd}){
    const [text, setText] = useState('')
    const [rating , setRating] = useState(3)
    const [btnDisable, setbtnDisable ] = useState(true) // disable button before numbers of characters is entered 
    const [message, setMessage ] = useState('') // mesage state 

    const handleChange = (e) => {
        
        if(text === ''){
            setbtnDisable(true)
            setMessage(null)
        }
        else if( text !== "" && text.trim().length <= 10){
            setMessage('Text must be atleast 10 characters')
            setbtnDisable(true)
        }
        else{
            setMessage(null)
            setbtnDisable(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text.trim().length > 10) {
            const newFeedback1 = {
                text,
                rating,
            }
            // console.log(newFeedback);

            handleAdd(newFeedback1)
            setText('')
        }
        
    }
    return(
        <Card>
            <form onSubmit = {handleSubmit} >
                <h2>How would you rate your service with us?</h2>
                <SelectRating select = { (rating) => setRating(rating)} />
                <div className="input-group">
                    <input 
                      type="text"
                      onChange={handleChange} 
                      value= {text}/>
                    <Button type='submit' isDisable = {btnDisable}>Send</Button>
                </div>
                <div>
                    { message &&  <div className='message'>{message}</div>}
                </div>
            </form>
        </Card>
    )
}
export default FeedbackForm;