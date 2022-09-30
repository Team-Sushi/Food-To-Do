import React from 'react';
import "./homepage.css";
import logo from '../components/foodToDoLogo.png';

class Homepage extends React.Component {
    goToLogin() {
        console.log("Going to sign in page ...");
        const url = '/login';

        window.location.replace(url);
    };

    componentWillMount() {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1584473457406-6240486418e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')";
    };

    componentWillUnmount() {
          document.body.style.backgroundImage = 'none';
    };

    render() {
        return (
            <div className="main-div">
                
                <div className='sideBar'>
                    
                <div className='background'>
                </div>

                <div className='header'>
                    <div className='header-left'>
                        <h2>FoodToDo.</h2>
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
                

                <div className='motto'>
                    <p>
                        Grocery planning tailored for you, with convenience as our motto,
                        FoodToDo will make your grocery trips faster and executed with ease.
                    </p>
                </div>

                <div className='logo'>
                    <img src={logo} alt="" />
                </div>

                <div className='credits'>
                    <p>
                        Built by COMP30022 Team Sushi 2022
                    </p>
                </div> 
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
                </div>

            </div>
        );
    };
}

export default Homepage;
