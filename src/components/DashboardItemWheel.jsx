import React, { Component } from 'react'
import {IoIosLogOut} from 'react-icons/io'
import Slider from "react-slick";
import Carousel from 'react-elastic-carousel';
import { render } from '@testing-library/react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

class DashboardItemWheel extends Component {

  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'},
      {id: 6, title: 'item #6'},
      {id: 7, title: 'item #7'},
      {id: 8, title: 'item #8'},
      {id: 9, title: 'item #9'},
      {id: 10, title: 'item #10'},
    ]
  }

  render() {
    const { items } = this.state;

    const breakPoints = [
      { width: 1, itemsToShow: 2},
      { width: 550, itemsToShow: 3 },
      { width: 768, itemsToShow: 5 },
      { width: 1200, itemsToShow: 6 },
    ];

    return (
      <div>
        <div className='dashboard-item-wheel-container'>
          <div className='dashboard-item-wheel-title'>
            <h1>
              {this.props.ListName}
            </h1>

            <div className='dashboard-item-wheel-title-img'>
              <IoIosLogOut/>
            </div>
          </div>
        </div>

        <Carousel breakPoints={breakPoints}>
          {items.map(item => <div className='dashboard-wheel-item-item' key={item.id}>{item.title}</div>)}
        </Carousel>
      </div>
    )
  }
}

DashboardItemWheel.defaultProps = {
  ListName: "Next Shopping List",
}

export default DashboardItemWheel