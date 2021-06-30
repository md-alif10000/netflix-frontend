import {  ArrowBackIos, ArrowForwardIosOutlined } from '@material-ui/icons'
import React, { useRef, useState } from "react";
import ListItem from './listItem/ListItem'
import './list.scss'

export default function List() {
    const [SlideNumber, setSlideNumber] = useState(0)
    const [isMoved, setisMoved] = useState(false)
    const listRef=useRef()

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x -50
        if (direction === 'left' && SlideNumber > 0) {
            setSlideNumber(SlideNumber-1)
            listRef.current.style.transform=`translateX(${distance+230}px)`
            
        } if (direction === 'right' && SlideNumber < 5) {
            setSlideNumber(SlideNumber + 1)
            setisMoved(true)
             listRef.current.style.transform = `translateX(${
               distance - 230
             }px)`;
            
            
        }
        
    }
    return (
      <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
          <ArrowBackIos
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container" ref={listRef}>
            <ListItem index={0} />
            <ListItem index={1} />
            <ListItem index={2} />
            <ListItem index={3} />
            <ListItem index={4} />
          </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    );
}
