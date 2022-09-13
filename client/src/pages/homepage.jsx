import React from 'react';
import "./homepage.css";
import logo from '../components/foodToDoLogo.png';

class Homepage extends React.Component {
    goToLogin() {
        console.log("Going to sign in page ...");
        const url = '/login';

        window.location.replace(url);
    };

    render(){
        return (
            <div className="main-div">
            
                <div className='header'>
                        <div className='header-left'>
                            <h2>FoodToDo.</h2>
                        </div>

                        <div className='header-right'>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                </div>

                <div className='getstartedbtn'>
                    <button 
                        type="button" 
                        onClick={() => this.goToLogin()} 
                        className="button"
                        >
                            <span>
                                Get Started Now
                            </span>
                    </button>
                </div>

                <div className='orange-subsec1'>
                    <h1 className='head-main'>
                        {/* <span className='head-left'>TO</span>
                        {/* <img className='o3' src={o3} alt=""/> }
                        <span className='head-right'>DO</span> */}
                    </h1>

                    <p>
                        Grocery planning tailored for you, with convenience as our motto, 
                        FoodToDo will make your grocery trips faster and executed with ease.
                    </p>
                </div>
                
                <div className='background'>
                </div>

                <div className='logo'>
                    <img src={logo} alt="" />
                </div>

                <div className='credits'>
                    <p>
                        Built by COMP30022 Team Sushi 2022
                    </p>
                </div>

                <div className='orange-main'>
                    <div className="transparent-text">
                        <h1 className='transparent-text-heading'>
                            <span className='tt-span-one'>FOOD</span>
                        </h1>

                        <h1 className='transparent-text-heading-2'>
                            <span className='tt-span-three'>TO</span>
                        </h1>

                        <h1 className='transparent-text-heading-3'>
                            <span className='tt-span-four'>DO</span>
                        </h1>
                    </div>

                    {/* <div className='orange-diag'></div> */}

                    {/* <div className='o1'>
                        <img src={o1} alt=""/>
                    </div> */}
                </div>


            </div>

            

            
        );
    };
}

export default Homepage;
