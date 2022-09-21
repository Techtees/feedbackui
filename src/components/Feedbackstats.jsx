function Feedbackstats ({ feedback }){
  
   let average = feedback.reduce((acc,curr) => {
     return acc + curr.rating
   },0) /  feedback.length

   average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats">
            <h4>{ feedback.length }</h4>
            <h5>Average Ratings : { isNaN(average) ? 0 : average } </h5>
        </div>
    )
}

export default Feedbackstats;