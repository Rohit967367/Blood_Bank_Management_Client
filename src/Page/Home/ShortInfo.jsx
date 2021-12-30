import React, { useState } from 'react'
import './ImageSlider.css'
import Blood from '../../Picture/BloodSlide.webp'
import Blood1 from '../../Picture/BloodSlide1.jpg'
import Blood2 from '../../Picture/BloodSlide2.jpg'
import Blood3 from '../../Picture/BloodSlide3.jpg'
import Blood4 from '../../Picture/BloodSlide4.jpg'
import Blood5 from '../../Picture/BloodSlide5.jpg'

let Data = [
    {
        id: '1',
        text: 'Give Blood,Save Life',
        img: Blood,
    },
    {
        id: '2',
        text: 'You Give me blood and i will gave you freedom',
        img: Blood1,
    },
    {
        id: '3',
        text: 'Smile and give, some one will smile and live',
        img: Blood2,
    },
    {
        id: '4',
        text: 'Blood - a gift that saves a life.',
        img: Blood3,
    },
    {
        id: '5',
        text: 'The blood is red gold in time of saving a life.',
        img: Blood4,
    },
    {
        id: '6',
        text: 'A few drops of your Blood can help a life to bloom.',
        img: Blood5,
    },
]


const ShortInfo = () => {
    let [count, setCount] = useState(0);
    
    setTimeout(() => {
        if(count === Data.length-1){
            setCount(0)
        }else{
            setCount(count + 1)
        }
    }, 4000);
    return (
        <div className='short'>
            <div className="slider" style={{transform: `translateX(-${count * 100}vw)`}}>
                {Data.map((d) => (
                    <div className="container" key={d.id}>
                        <div className="item">
                            <div className="leftContainer">
                                <div className="text">
                                    <span style={{color:'red', fontSize: "18px"}}>{d.text}</span>
                                </div>
                            </div>
                            <div className="rightContainer">
                                <img src={d.img} alt="blood" />
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ShortInfo
