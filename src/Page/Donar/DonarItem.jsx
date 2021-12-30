// import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import './DonarItem.css'
const DonarItem = () => {

    return (
        <div className="donarNav">
            <div className="donarNavLeft">
                <h1>Infomation Of Blood Donating</h1>
            </div>
            <div className="donarNavRight">
                <Link to='/DonarForm'>
                    <div className="button">
                        <button>
                            Donat Now
                        </button>
                    </div>
                </Link>
            </div>
            <center><div className="donarInfo">
                <div className="infoConatiner">
                    <p>Blood is the most essential thing for human life. It is an inhuman body fluid that
                        delivers necessary substances such as nutrients and oxygen to the cells. Technically,
                        blood is a transport liquid pumped by the heart (or an equivalent structure) to all
                        parts of the body, after which it is returned to the heart to repeat the process.
                        To donate blood or platelets, you must be in good general health, weigh at least
                        110 pounds, and be at least 16 years old. Parental consent is required for blood
                        donation by 16-year-olds; 16-year-olds are NOT eligible to donate platelets. No
                        parental consent is required for those who are at least 17 years old.a donate?
                    </p>
                    <br />
                    <p>Every adult human being (male or female) has 5 to 6 litres of blood.</p>
                    <br />
                    <p>*Any person between 18 and 60 years, weighing 45 kg or more can safely donate one
                        unit of blood, that is, 350 ml once every three months.
                    </p>
                    <p>
                        Blood is differentiated into types of A, B, O, AB groups. These blood types were
                        discovered by Karl Landsteiner in 1900 and his birthday June 14 has been celebrated as blood
                        donation day.
                    </p>
                    <p>
                    In many situations, blood transfusion has been important.blood is usually transfused to 
                    replace red blood cells that carry oxygen in various situation necessitate transfusion blood 
                    loss due to bleeding, surgery or a medical procedure medical conditions that prevent the body 
                    from producing new blood cells medical conditions such as anaemia, kidney disease, cancer, 
                    leukaemia, chemotherapy, chronic disease may prevent the production of new blood cells.Transfusion 
                    may be necessary until the body is able to produce its own blood cells.
                    </p>
                    <p>
                    Haemophilia is a rare disorder in which your blood doesn’t clot normally because it lacks 
                    sufficient blood.Clotting proteins and use to bleed for longer and that patient will be treated 
                    by plasma.
                    </p>
                    <p>
                    The average adult has about  10points  of blood in his body.Roughly 1 point is given during a 
                    situation.A healthy donor may donate red blood cells every 56 days.All donated blood is screened 
                    for the laboratory tests.
                    </p>
                </div>
            </div></center>
        </div >
    )
}

export default DonarItem
