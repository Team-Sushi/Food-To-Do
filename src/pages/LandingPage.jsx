import React from 'react'
import './LandingPage.css'
import {GiBellPepper, GiOrange, GiCoconuts, GiChiliPepper, GiGarlic, GiCoffeeBeans, GiCarrot, GiSlicedBread, GiMilkCarton, GiSteak, GiBroccoli, GiRoastChicken, GiBananaBunch, GiTomato, GiShinyApple} from 'react-icons/gi';

const LandingPage = () => {

  const url = '/Dashboard';
  
  return (
    <div className='body-landingpage'> 
      <article className="wrapper-landingpage">
        <div className="marquee-landingpage">
          <div className="marquee__group">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiBroccoli size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiCarrot size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiRoastChicken size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiBananaBunch size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiCoffeeBeans size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiTomato size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiSteak size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiShinyApple size={22}/>
            </svg>
          </div>

          <div aria-hidden="true" className="marquee__group">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiMilkCarton size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiTomato size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiSlicedBread size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiShinyApple size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiCarrot size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiCoconuts size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiGarlic size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiChiliPepper size={22}/>
            </svg>
          </div>
        </div>

        <div className="marquee-landingpage marquee--reverse">
          <div className="marquee__group">
          <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiMilkCarton size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiTomato size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiSlicedBread size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiShinyApple size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiCarrot size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiCoconuts size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiOrange size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiChiliPepper size={22}/>
            </svg>
          </div>

          {/* Bottom wheel */}
          <div aria-hidden="true" className="marquee__group">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiBroccoli size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiCarrot size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiRoastChicken size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiBananaBunch size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiCoffeeBeans size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiTomato size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiSteak size={22}/>
            </svg>
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <GiBellPepper size={22}/>
            </svg>
          </div>
        </div>
      </article>

    <div className='FoodToDo-landingpage-h1-container'>
        <div className='center-landingpage-items'>
          
          <span className='FoodToDo-landingpage-h1-1'>
            Food
          </span>
          <span className='FoodToDo-landingpage-h1-2'>
            To
          </span>
          <span className='FoodToDo-landingpage-h1-3'>
            Do
          </span>
        </div>
    </div>

    <div className='getstartedbtn'>
        <button
            type="button"
            onClick={() => window.location.replace(url)}
            className="getstartbutton"
        >
            <span>
                Get Started Now
            </span>
        </button>
    </div>

    </div>
  )
}

export default LandingPage;