// import React, { useEffect } from 'react'
import './Bill.css'
import BLoodStock from './BLoodStock'
// import { BloodImage } from './BloodImage'
// import { Button } from '@mui/material'
// import { useHistory } from 'react-router'
// import { useState } from 'react'
// import axios from 'axios'

// import o from '../../Picture/b8.png'



const Bill = () => {
    // let Request = useHistory()
    // let ButtonClick = () => {
    //     Request.push("/RequestF")
    // }
    

    // let [unit, setUnit] = useState(0);
    // const [bloodName, setBloodName] = useState("");
    // const [valueBlood, setValueBlood]= useState("");

    // const [bloodUnit, setBloodUnit] = useState([]);

    // useEffect(() => {
    //     const getUnit = async () => {
    //         try {
    //             const res = await axios.get(`http://localhost:8800/api/bloodStock/bloodName?componentName=${bloodName}`)
    //             setBloodUnit(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getUnit()
    // }, [bloodName])

//     const [bloodNameO, setBloodNameO] = useState("");
//     const [bloodUnitO, setBloodUnitO] = useState([]);
//     useEffect(() => {
//         const getUnitO = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:8800/api/bloodStock/bloodName?componentName=${bloodNameO}`)
//                 setBloodUnitO(res.data[0].unit);
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//         getUnitO()
//     }, [bloodNameO])
//     console.log(bloodNameO)
//     console.log(bloodUnitO);

//     const [componentNameO, setComponentNameO] = useState([]);
    
// useEffect(() => {
//     const getBloodDataO = async () => {
//         try {
//             const res = await axios.get(`http://localhost:8800/api/bloodStock/find?bloodName=O&rh=positive`)
//             setComponentNameO(res.data);
//         } catch (err) {
//             console.log(err);
//         }
//     }
//     getBloodDataO()
    // return () => {
    //     cleanup
    // }
// }, [])

    return (
        <>
            {/* <div className="donorCard"> */}
                {/* <div className="donorCard">
                {BloodImage.map((list) => (
                    <div className="cardContainer" key={list.id}>
                        <div className="card">
                            <div className="cardLeft">
                                <img src={list.img} alt={list.name} />
                            </div>
                            <div className="cardRight">
                                <h4>{list.specility}</h4>
                                <br />
                                <div className="option">
                                    <label htmlFor="option">Blood Component:</label>
                                    <select name="option" id="option" value={bloodName} onChange={(e) => setBloodName(e.target.value)}>
                                        <option value="null">Select</option>
                                        {list.blood.map((BloodName, index) => (
                                            <option value={BloodName.name} key={index}>{BloodName.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <label htmlFor="unit">Unit</label>
                                {bloodUnit.map((unit) => (
                                   <span>{unit.unit}</span>// <input type="text" value={valueBlood} onChange={(e)=>setValueBlood(e.target.value)}>{unit.unit}</input>
                                ))}
                                <br />
                                <Button variant='contained' onClick={ButtonClick} style={{ backgroundColor: "red" }}>Request Blood</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}

                <BLoodStock />

                


        </>
    )
}

export default Bill
