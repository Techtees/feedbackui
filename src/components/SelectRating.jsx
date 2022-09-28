
import React, {useState} from 'react'


function SelectRating ({select}) {
    const [selected, setSelected] = useState(3)
    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)

    }
    return (
        <ul className="rating">
            <li>
                <input
                   type="radio"
                   id='num1'
                   value= '1'
                   name="rating"
                   onChange={handleChange}
                   checked= {selected === 1}
                 />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input
                   type="radio"
                   id='num2'
                   value= '2'
                   name="rating"
                   onChange={handleChange}
                   checked= {selected === 2}
                 />
                <label htmlFor="num2">2</label>
            </li>
            <li>
                <input
                   type="radio"
                   id='num3'
                   value= '3'
                   name="rating"
                   onChange={handleChange}
                   checked= {selected === 3}
                 />
                <label htmlFor="num3">3</label>
            </li>
        </ul>
      );
}
 
export default SelectRating ;