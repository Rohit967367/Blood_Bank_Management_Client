import React, { useEffect } from 'react'
import './Bill.css'
import { Button } from '@mui/material'
import { useHistory } from 'react-router'
import { useState } from 'react'
import axios from 'axios'
import a from '../../Picture/b1.png'
import aa from '../../Picture/b2.png'
import b from '../../Picture/b4.png'
import bb from '../../Picture/b3.png'
import ab from '../../Picture/b5.png'
import abb from '../../Picture/b6.png'
import oo from '../../Picture/b7.png'
import o from '../../Picture/b8.png'


const BLoodStock = () => {
    let Request = useHistory()
    let ButtonClick = () => {
        Request.push("/RequestF")
    }


    ////forA+unit
    const [bloodNameA, setBloodNameA] = useState("");
    const [bloodUnitA, setBloodUnitA] = useState([]);
    useEffect(() => {
        const getUnitA = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/bloodStock/bloodName?componentName=${bloodNameA}`)
                setBloodUnitA(res.data[0].unit);
            } catch (err) {
                console.log(err);
            }
        }
        getUnitA()
    }, [bloodNameA])
    // console.log(bloodUnitA);

    ////forA-unit
    const [bloodName, setBloodName] = useState("");
    const [bloodUnitAA, setBloodUnitAA] = useState([]);
    useEffect(() => {
        const getUnit = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/bloodStock/bloodName?componentName=${bloodName}`)
                setBloodUnitAA(res.data[0].unit);
            } catch (err) {
                console.log(err);
            }
        }
        getUnit()
    }, [bloodName]);
    // console.log(bloodUnitAA);

    ////For B+unit
    const [bloodNameB, setBloodNameB] = useState("");
    const [bloodUnitB, setBloodUnitB] = useState([]);
    useEffect(() => {
        const getUnitB = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/bloodStock/bloodName?componentName=${bloodNameB}`)
                setBloodUnitB(res.data[0].unit);
            } catch (err) {
                console.log(err);
            }
        }
        getUnitB()
    }, [bloodNameB])
    // console.log(bloodUnitB);

    ////For B-unit
    const [bloodNameBB, setBloodNameBB] = useState("");
    const [bloodUnitBB, setBloodUnitBB] = useState([]);
    useEffect(() => {
        const getUnitBB = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/bloodStock/bloodName?componentName=${bloodNameBB}`)
                setBloodUnitBB(res.data[0].unit);
            } catch (err) {
                console.log(err);
            }
        }
        getUnitBB()
    }, [bloodNameBB])
    // console.log(bloodUnitBB);

    ////For AB+ unit
    const [bloodNameAB, setBloodNameAB] = useState("");
    const [bloodUnitAB, setBloodUnitAB] = useState([]);
    useEffect(() => {
        const getUnitAB = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/bloodStock/bloodName?componentName=${bloodNameAB}`)
                setBloodUnitAB(res.data[0].unit);
            } catch (err) {
                console.log(err);
            }
        }
        getUnitAB()
    }, [bloodNameAB])
    // console.log(bloodUnitAB);

    ////For AB- unit
    const [bloodNameABB, setBloodNameABB] = useState("");
    const [bloodUnitABB, setBloodUnitABB] = useState([]);
    useEffect(() => {
        const getUnitABB = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/bloodStock/bloodName?componentName=${bloodNameABB}`)
                setBloodUnitABB(res.data[0].unit);
            } catch (err) {
                console.log(err);
            }
        }
        getUnitABB()
    }, [bloodNameABB])
    // console.log(bloodUnitABB);

    ////For O+ unit
    const [bloodNameO, setBloodNameO] = useState("");
    const [bloodUnitO, setBloodUnitO] = useState([]);
    useEffect(() => {
        const getUnitO = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/bloodStock/bloodName?componentName=${bloodNameO}`)
                setBloodUnitO(res.data[0].unit);
            } catch (err) {
                console.log(err);
            }
        }
        getUnitO()
    }, [bloodNameO])
    // console.log(bloodUnitO);

    ////For O- unit
    const [bloodNameOO, setBloodNameOO] = useState("");
    const [bloodUnitOO, setBloodUnitOO] = useState([]);
    useEffect(() => {
        const getUnitOO = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/bloodStock/bloodName?componentName=${bloodNameOO}`)
                setBloodUnitOO(res.data[0].unit);
            } catch (err) {
                console.log(err);
            }
        }
        getUnitOO()
    }, [bloodNameOO])
    // console.log(bloodUnitOO);




    ////for A+ componentName
    const [componentNameA, setComponentNameA] = useState([]);
    const getBloodDataA = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/api/bloodStock/find?bloodName=A&rh=positive`)
            setComponentNameA(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    ////for A- componentName
    const [componentNameAA, setComponentNameAA] = useState([]);
    const getBloodDataAA = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/api/bloodStock/find?bloodName=A&rh=negative`)
            setComponentNameAA(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    ////for B+ componentName
    const [componentNameB, setComponentNameB] = useState([]);
    const getBloodDataB = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/api/bloodStock/find?bloodName=B&rh=negative`)
            setComponentNameB(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    ////for B- componentName
    const [componentNameBB, setComponentNameBB] = useState([]);
    const getBloodDataBB = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/api/bloodStock/find?bloodName=B&rh=positive`)
            setComponentNameBB(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    ////for AB+ componentName
    const [componentNameAB, setComponentNameAB] = useState([]);
    const getBloodDataAB = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/api/bloodStock/find?bloodName=AB&rh=positive`)
            setComponentNameAB(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    ////for AB- componentName
    const [componentNameABB, setComponentNameABB] = useState([]);
    const getBloodDataABB = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/api/bloodStock/find?bloodName=AB&rh=negative`)
            setComponentNameABB(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    ////for O+ componentName
    const [componentNameO, setComponentNameO] = useState([]);
    const getBloodDataO = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/api/bloodStock/find?bloodName=O&rh=positive`)
            setComponentNameO(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    ////for O- componentName
    const [componentNameOO, setComponentNameOO] = useState([]);
    const getBloodDataOO = async () => {
        try {
            const res = await axios.get(`http://localhost:8800/api/bloodStock/find?bloodName=O&rh=negative`)
            setComponentNameOO(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getBloodDataA();
        getBloodDataAA();
        getBloodDataB();
        getBloodDataBB();
        getBloodDataAB();
        getBloodDataABB();
        getBloodDataO();
        getBloodDataOO();
    }, []);

    return (
        <div>
            <div className="donorCard">

                {/* ////FOR A+ */}
                <div className="cardContainer">
                    <div className="card">
                        <div className="cardLeft">
                            <img src={a} alt={a} />
                        </div>
                        <div className="cardRight">
                            <h4>The A-Listers</h4>
                            <br />
                            <div className="option">
                                <label htmlFor="option">Blood Component:</label>
                                <select name="option" id="option" value={bloodNameA} onChange={(e) => setBloodNameA(e.target.value)}>
                                    <option value="null">Select</option>
                                    {componentNameA.map((cname, index) => (
                                        <option value={cname.componentName} key={index}>{cname.componentName}</option>
                                    ))}
                                </select>
                            </div>
                            <label htmlFor="price">Unit</label>
                            <input type="text" disabled value={bloodNameA && `${bloodUnitA}`} />
                            
                            <br />
                            <Button variant='contained' onClick={ButtonClick} style={{ backgroundColor: "red" }}>Request Blood</Button>
                        </div>
                    </div>
                </div>

                {/* ////FOR A- */}
                <div className="cardContainer">
                    <div className="card">
                        <div className="cardLeft">
                            <img src={aa} alt={aa} />
                        </div>
                        <div className="cardRight">
                            <h4>The Comforter</h4>
                            <br />
                            <div className="option">
                                <label htmlFor="option">Blood Component:</label>
                                <select name="option" id="option" value={bloodName} onChange={(e) => setBloodName(e.target.value)}>
                                    <option value="null">Select</option>
                                    {componentNameAA.map((cname, index) => (
                                        <option value={cname.componentName} key={index}>{cname.componentName}</option>
                                    ))}
                                </select>
                            </div>
                            <label htmlFor="price">Unit</label>
                            <input type="text" disabled value={bloodName && `${bloodUnitAA}`} />
                            
                            <br />
                            <Button variant='contained' onClick={ButtonClick} style={{ backgroundColor: "red" }}>Request Blood</Button>
                        </div>
                    </div>
                </div>

                {/* ////FOR +B */}
                <div className="cardContainer">
                    <div className="card">
                        <div className="cardLeft">
                            <img src={b} alt={b} />
                        </div>
                        <div className="cardRight">
                            <h4>The Bright Ones</h4>
                            <br />
                            <div className="option">
                                <label htmlFor="option">Blood Component:</label>
                                <select name="option" id="option" value={bloodNameBB} onChange={(e) => setBloodNameBB(e.target.value)}>
                                    <option value="null">Select</option>
                                    {componentNameBB.map((cname, index) => (
                                        <option value={cname.componentName} key={index}>{cname.componentName}</option>
                                    ))}
                                </select>
                            </div>
                            <label htmlFor="price">Unit</label>
                            <input type="text" disabled value={bloodNameBB && `${bloodUnitBB}`} />
                            
                            <br />
                            <Button variant='contained' onClick={ButtonClick} style={{ backgroundColor: "red" }}>Request Blood</Button>
                        </div>
                    </div>
                </div>

                {/* ////FOR B- */}
                <div className="cardContainer">
                    <div className="card">
                        <div className="cardLeft">
                            <img src={bb} alt={bb} />
                        </div>
                        <div className="cardRight">
                            <h4>The Bee's Knees</h4>
                            <br />
                            <div className="option">
                                <label htmlFor="option">Blood Component:</label>
                                <select name="option" id="option" value={bloodNameB} onChange={(e) => setBloodNameB(e.target.value)}>
                                    <option value="null">Select</option>
                                    {componentNameB.map((cname, index) => (
                                        <option value={cname.componentName} key={index}>{cname.componentName}</option>
                                    ))}
                                </select>
                            </div>
                            <label htmlFor="price">Unit</label>
                            <input type="text" disabled value={bloodNameB && `${bloodUnitB}`} />
                            
                            <br />
                            <Button variant='contained' onClick={ButtonClick} style={{ backgroundColor: "red" }}>Request Blood</Button>
                        </div>
                    </div>
                </div>

                {/* ////FOR Ab+ */}
                <div className="cardContainer">
                    <div className="card">
                        <div className="cardLeft">
                            <img src={ab} alt={ab} />
                        </div>
                        <div className="cardRight">
                            <h4>The Lucky Ones</h4>
                            <br />
                            <div className="option">
                                <label htmlFor="option">Blood Component:</label>
                                <select name="option" id="option" value={bloodNameAB} onChange={(e) => setBloodNameAB(e.target.value)}>
                                    <option value="null">Select</option>
                                    {componentNameAB.map((cname, index) => (
                                        <option value={cname.componentName} key={index}>{cname.componentName}</option>
                                    ))}
                                </select>
                            </div>
                            <label htmlFor="price">Unit</label>
                            <input type="text" disabled value={bloodNameAB && `${bloodUnitAB}`} />
                            
                            <br />
                            <Button variant='contained' onClick={ButtonClick} style={{ backgroundColor: "red" }}>Request Blood</Button>
                        </div>
                    </div>
                </div>

                {/* ////FOR Ab- */}
                <div className="cardContainer">
                    <div className="card">
                        <div className="cardLeft">
                            <img src={abb} alt={abb} />
                        </div>
                        <div className="cardRight">
                            <h4>The Rare One</h4>
                            <br />
                            <div className="option">
                                <label htmlFor="option">Blood Component:</label>
                                <select name="option" id="option" value={bloodNameABB} onChange={(e) => setBloodNameABB(e.target.value)}>
                                    <option value="null">Select</option>
                                    {componentNameABB.map((cname, index) => (
                                        <option value={cname.componentName} key={index}>{cname.componentName}</option>
                                    ))}
                                </select>
                            </div>
                            <label htmlFor="price">Unit</label>
                            <input type="text" disabled value={bloodNameABB && `${bloodUnitABB}`} />
                            <br />
                            <Button variant='contained' onClick={ButtonClick} style={{ backgroundColor: "red" }}>Request Blood</Button>
                        </div>
                    </div>
                </div>

                <div className="cardContainer">
                    <div className="card">
                        <div className="cardLeft">
                            <img src={o} alt={o} />
                        </div>
                        <div className="cardRight">
                            <h4>The Secret Saver</h4>
                            <br />
                            <div className="option">
                                <label htmlFor="option">Blood Component:</label>
                                <select name="option" id="option" value={bloodNameO} onChange={(e) => setBloodNameO(e.target.value)}>
                                    <option value="null">Select</option>
                                    {componentNameO.map((cname, index) => (
                                        <option value={cname.componentName} key={index}>{cname.componentName}</option>
                                    ))}
                                </select>
                            </div>
                            <label htmlFor="price">Unit</label>
                            <input type="text" disabled value={bloodNameO && `${bloodUnitO}`} />
                            
                            <br />
                            <Button variant='contained' onClick={ButtonClick} style={{ backgroundColor: "red" }}>Request Blood</Button>
                        </div>
                    </div>
                </div>

                <div className="cardContainer">
                    <div className="card">
                        <div className="cardLeft">
                            <img src={oo} alt={oo} />
                        </div>
                        <div className="cardRight">
                            <h4>The Unlimite Giver</h4>
                            <br />
                            <div className="option">
                                <label htmlFor="option">Blood Component:</label>
                                <select name="option" id="option" value={bloodNameOO} onChange={(e) => setBloodNameOO(e.target.value)}>
                                    <option value="null">Select</option>
                                    {componentNameOO.map((cname, index) => (
                                        <option value={cname.componentName} key={index}>{cname.componentName}</option>
                                    ))}
                                </select>
                            </div>
                            <label htmlFor="price">Unit</label>
                            <input type="text" disabled value={bloodNameOO && `${bloodUnitOO}`} />
                            
                            <br />
                            <Button variant='contained' onClick={ButtonClick} style={{ backgroundColor: "red" }}>Request Blood</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BLoodStock
