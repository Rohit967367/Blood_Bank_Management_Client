import React from 'react'
import './TypeList.css'
import { BloodImage } from './BloodImage'
// import ReactCardFlip from 'react-card-flip'
// import { useState } from 'react'




const TypeList = () => {
    // let [ isFlipped ,setIsFlipped ] = useState(false);
    // let fliped =()=> {
    //     setIsFlipped(!isFlipped);
    // }
    // let [button, setButton ] = useState(false);


    return (
        <div className='typeList'>
            <div className="row">
                {BloodImage.map((List) => (
                    <div className="column" key={List.id}>
                        <div className="card">
                            {/* <div className="cardBackground"> */}
                            {/* <img src={List.trans} alt={List.name} /> */}

                            <div className="cardImg">
                                <img src={List.img} alt={List.name} />
                            </div>
                            {/* </div> */}
                            <div className="typeListContainer">
                                <span><strong>Name Of Blood: </strong>{List.name}</span>
                                {/* <p> <strong>Specility: </strong>{List.specility}</p>
                                <p className='shortDescrip'> <strong>Short Description: </strong>{List.descrition}</p>
                                <p><button className='listButton' onClick={props.onOpen} >Order</button></p>  */}
                                <p><strong>Available Blood: </strong> 3</p>
                                
                                {/* <button onClick={()=> setButton(!button)}>more</button>
                                {button && <p> <strong>Specility: </strong>{List.specility}</p>} */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>






            {/* <div className="row">
                {BloodList.map((list)=> (
                    <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
                    
                    <span>{list.id}
                    <button onClick={fliped}>{list.id}</button>
                    </span>
                    
                    <span>{list.name}</span>
                    <button onClick={fliped}>{list.name}</button>
                    </ReactCardFlip>
                ))}
                </div>

                <div className="row"> */}

            {/* {BloodList.map((list)=> ( */}
            <>
            </>
            {/* ))} */}
            {/* </div> */}



        </div>
    )
}

export default TypeList
