import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
    return(
        <Card>
            <div className='about'>
                <h1>About Page</h1>
                <p>THis is a react app tp leave feedback and rate services</p>
            </div>
            
            <p><Link to="/">Go back</Link></p>
        </Card>
    )
}

export default AboutPage