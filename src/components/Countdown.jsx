import React, { useEffect, useState } from 'react';
import './countdown.scss'
import img from '../assets/img/avatar.png'
import CreateCountModal from './CreateCountModa';

const intialCountdownState = {
  days: 0,
  hours: 0,
  min: 0,
  sec: 0,
}



const Countdown = ({date}) => {
  const [countDown, setCountDown] = useState(intialCountdownState);
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("CTO");
  const [category, setCategory] = useState("BIRTHDAY");
  const [deadline, setDeadline] = useState(date);
  
  const calculateCountdown = (endDate) => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    if (diff < 0) {
      return timeLeft;
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  };

  const addLeadingZeros = (value) => {
    value = String(value);
    return value.padStart(2, "0");
  };


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getData = (data)=>{
    let {name, category, deadline} = data
    setName(name);
    setCategory(category)
    setDeadline(new Date(deadline))
  }

  useEffect(() => {
   let data = JSON.parse(localStorage.getItem("countdown"))
   if(data){
     getData(data)
   } 
   else{console.log(false)}

  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      const countdownDate = calculateCountdown(deadline);
      setCountDown(countdownDate);
      if (countdownDate.sec < 0) {
        setCountDown(intialCountdownState);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);
  

  
      return (
        <div className="countdown-container">
          <div className="countdown-wrap">
        <div className="image">
          <img src={img} alt="user's__Image"/>
        </div>
       <h1 className="name mb-2 text-center text-pry">{name}'s {category}</h1>
       <p className="date mb-2 text-center">The date for CTO's Birthday is and the time remaining is  </p>
       <span className="palm__down">👇</span>
       <ul className="list-wrap mb-2 text-center">
         <li>
           <h2 className="count text-pry">{addLeadingZeros(countDown.days)}</h2>
           <span className="date__desc">{countDown.days <= 1 ? 'Day' : 'Days'}</span>
         </li>
         <li>
           <h2 className="count text-pry">{addLeadingZeros(countDown.hours)}</h2>
           <span className="date__desc">HOURS</span>
         </li>
         <li>
           <h2 className="count text-pry">{addLeadingZeros(countDown.min)}</h2>
           <span className="date__desc">MINUTES</span>
         </li>
         <li>
           <h2 className="count text-pry">
             {addLeadingZeros(countDown.sec).slice(0, 3)}
             </h2>
           <span className="date__desc">SECONDS</span>
         </li>
       </ul>
       <p className="mb-2 bottom__text text-center">Click <em className="here" onClick={() => openModal()}>Here</em> to create your custom Countdown</p>
        </div>
        <CreateCountModal isOpen={isOpen} onClose={closeModal} getData = {getData}/>
        </div>
      )
};


export default Countdown;

