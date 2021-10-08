import React, { useEffect, useState } from 'react';
import './countdown.scss'
import img from '../../assets/img/avatar.png'
import CreateCountModal from './CreateCountModa';
import CountdownWrap from './CountdownDetails';

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
          <CountdownWrap name={name} category={category} img={img}  deadline={deadline}
          addLeadingZeros={addLeadingZeros}  countDown={countDown} openModal={openModal}/>
             <CreateCountModal isOpen={isOpen} onClose={closeModal} getData = {getData} deadline={deadline}/>
        </div>
      )
};


export default Countdown;

