import React from 'react'
const CountdownWrap = ({name, category,deadline, img,timeOut,timeElapse, addLeadingZeros, countDown,openModal }) => {
  const timeDisplay =` ${timeOut() ? 'text-timeout': ''} ${timeElapse() ? 'text-danger': '' }`
    return (
        <div className="countdown-details">
        <div className="image">
          <img src={img} alt="user's__Image"/>
        </div>
       <h1 className="name mb-2 text-center text-pry">{name}'s {category}</h1>
       <p className="date mb-2 text-center">The date for {name}'s {category} is  <span className="event__date">
          {new Date(deadline).toDateString()} </span> 
       {
         !timeElapse() && (   `and the time remaining is:`  )
       }
    </p>
      {
         !timeElapse() &&   <span className="palm__down">👇</span> 
       }
     
         {
        timeElapse() ? (
          <div className="scroll-text mb-2">
        <h1 className="text">Happy {category}</h1>
      </div>
        ): (

       <ul className="list-wrap mb-2 text-center">
       <li>
         <h2 className="count text-pry">{addLeadingZeros(countDown.days)}</h2>
         <span className={`date__desc ${timeDisplay}`}>{countDown.days <= 1 ? 'Day' : 'Days'}</span>
       </li>
       <li>
         <h2 className="count text-pry">{addLeadingZeros(countDown.hours)}</h2>
         <span className={`date__desc ${timeDisplay}`}>HOURS</span>
       </li>
       <li>
         <h2 className="count text-pry">{addLeadingZeros(countDown.min)}</h2>
         <span className={`date__desc ${timeDisplay}`}>MINUTES</span>
       </li>
       <li>
         <h2 className="count text-pry">
           {addLeadingZeros(countDown.sec).slice(0, 3)}
           </h2>
         <span className={`date__desc ${timeDisplay}`}>SECONDS</span>
       </li>
     </ul>
 
        )
      }
       <p className="mb-2 bottom__text text-center">Click <span className="here" onClick={() => openModal()}>Here</span> to create your custom Countdown</p>
        </div>
     
    )
}

export default CountdownWrap
