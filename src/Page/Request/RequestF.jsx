import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './RequestForm.css'
import useDynamicForm from '../../DynamicForm'
import axios from 'axios';
import { generate } from './GeneratePDF';


const RequestF = () => {

    let goRefe = useHistory();
    let showRefe = () => {
        goRefe.push('/RequestForm');
    }
    const [blood, setBlood] = useState('null')
    const [unit, setUnit] = useState('null')
    const [price, setPrice] = useState(0)
    const [cName, setCName] = useState([])

    useEffect(() => {
        if (blood !== 'null' && unit !== 'null') {
            return (cName.map((bloodPrice) => {
                if (bloodPrice.componentName === blood) {
                    let price = bloodPrice.price * Number(unit)
                    setPrice(price)
                }
            })
            )
        }
    }, [blood, unit, price, cName])




    let reqBack = useHistory();
    let requestBack = () => {
        reqBack.push('/Request');
    }


    let {
        value: firstName,
        valueIsValid: firstNameValueIsValid,
        errorMsg: firstValueIsNotValid,
        changeHandler: firstNameChangeHandler,
        blurHandler: firstNameBlurHandler,
        rest: restFirstName,
    } = useDynamicForm(value => value.trim() !== '');


    let {
        value: email,
        valueIsValid: emailValueIsValid,
        errorMsg: emailValueIsNotValid,
        changeHandler: emailChangeHandler,
        blurHandler: emailBlurHandler,
        rest: restEmail,
    } = useDynamicForm(value => value.trim() !== '');

    let {
        value: address,
        valueIsValid: addressValueIsValid,
        errorMsg: addressValueIsNotValid,
        changeHandler: addressChangeHandler,
        blurHandler: addressBlurHandler,
        rest: restAddress,
    } = useDynamicForm(value => value.trim() !== '');

    let {
        value: pin,
        valueIsValid: pinValueIsValid,
        errorMsg: pinValueIsNotValid,
        changeHandler: pinChangeHandler,
        blurHandler: pinBlurHandler,
        rest: restPin,
    } = useDynamicForm(value => value.trim().length === 6);

    let {
        value: adhaar,
        valueIsValid: adhaarValueIsValid,
        errorMsg: adhaarValueIsNotValid,
        changeHandler: adhaarChangeHandler,
        blurHandler: adhaarBlurHandler,
        rest: restAdhaar,
    } = useDynamicForm(value => value.trim().length === 12);

    let {
        value: Phone,
        valueIsValid: phoneValueIsValid,
        errorMsg: phoneValueIsNotValid,
        changeHandler: phoneChangeHandler,
        blurHandler: phoneBlurHandler,
        rest: restPhone,
    } = useDynamicForm(value => value.trim().length === 10);



    let {
        value: patientName,
        valueIsValid: patientNameValueIsValid,
        errorMsg: patientValueIsNotValid,
        changeHandler: patientNameChangeHandler,
        blurHandler: patientNameBlurHandler,
        rest: restPatientName,
    } = useDynamicForm(value => value.trim() !== '');



    let {
        value: age,
        valueIsValid: ageValueIsValid,
        errorMsg: ageValueIsNotValid,
        changeHandler: ageChangeHandler,
        blurHandler: ageBlurHandler,
        rest: restAge,
    } = useDynamicForm(value => value.trim() !== '');

    let {
        value: gender,
        valueIsValid: genderValueIsValid,
        errorMsg: genderValueIsNotValid,
        changeHandler: genderChangeHandler,
        blurHandler: genderBlurHandler,
        rest: restGender,
    } = useDynamicForm(value => value.trim() !== '');

    let {
        value: hospitalName,
        valueIsValid: hospitalNameValueIsValid,
        errorMsg: hospitalValueIsNotValid,
        changeHandler: hospitalNameChangeHandler,
        blurHandler: hospitalNameBlurHandler,
        rest: restHospitalName,
    } = useDynamicForm(value => value.trim() !== '');

    let {
        value: consultant,
        valueIsValid: ConsultantValueIsValid,
        errorMsg: consultantValueIsNotValid,
        changeHandler: consultantChangeHandler,
        blurHandler: consultantBlurHandler,
        rest: restConsultant,
    } = useDynamicForm(value => value.trim() !== '');

    let {
        value: hospitalNo,
        valueIsValid: hospitalNoValueIsValid,
        errorMsg: hospitalNoValueIsNotValid,
        changeHandler: hospitalNoChangeHandler,
        blurHandler: hospitalNoBlurHandler,
        rest: restHospitalNo,
    } = useDynamicForm(value => value.trim().length >= 10);

    let {
        value: consultantNo,
        valueIsValid: consultantNoValueIsValid,
        errorMsg: consultantNoValueIsNotValid,
        changeHandler: consultantNoChangeHandler,
        blurHandler: consultantNoBlurHandler,
        rest: restConsultantNo,
    } = useDynamicForm(value => value.trim().length === 10);

    let {
        value: bloodGroup,
        valueIsValid: bloodGroupValueIsValid,
        errorMsg: bloodGroupValueIsNotValid,
        changeHandler: bloodGroupChangeHandler,
        blurHandler: bloodGroupBlurHandler,
        rest: restBloodGroup,
    } = useDynamicForm(value => value.trim() !== '');

    let {
        value: rh,
        valueIsValid: rhValueIsValid,
        errorMsg: rhValueIsNotValid,
        changeHandler: rhChangeHandler,
        blurHandler: rhBlurHandler,
        rest: restRh,
    } = useDynamicForm(value => value.trim() !== '');

    let {
        value: dateTime,
        valueIsValid: dateTimeValueIsValid,
        errorMsg: dateTimeValueIsNotValid,
        changeHandler: dateTimeChangeHandler,
        blurHandler: dateTimeBlurHandler,
        rest: restDateTime,
    } = useDynamicForm(value => value.trim() !== '');


    let formIsValid1 = false;

    if (
        firstNameValueIsValid && emailValueIsValid && addressValueIsValid && pinValueIsValid && adhaarValueIsValid && phoneValueIsValid
        && patientNameValueIsValid && ageValueIsValid
        && genderValueIsValid
        && hospitalNameValueIsValid && ConsultantValueIsValid && hospitalNoValueIsValid
        && consultantNoValueIsValid && bloodGroupValueIsValid && rhValueIsValid && dateTimeValueIsValid) {
        formIsValid1 = true;
    }



    const add = `${address} - ${pin}`
    const patientDetail = `${patientName}
${consultant}
${hospitalName}
${hospitalNo} 
`

    const id = Math.floor((Math.random() * 100000) + 1);



    const [bloodUnit, setBloodUnit] = useState([]);
    // if (rh !== "") {

    useEffect(() => {

        const getUnit = async () => {
            try {
                const req = await axios.get(`http://localhost:8800/api/bloodStock/BloodName?componentName=${blood}`)
                setBloodUnit(req.data);
            } catch (error) {
                console.log(error);
            }
        }
        if (rh !== "") {
            getUnit();
        }
    }, [blood, rh])


    useEffect(() => {
        const getBloodData = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/bloodStock/find?bloodName=${bloodGroup}&rh=${rh}`)
                setCName(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getBloodData();
    }, [bloodGroup, rh]);

    let submitForm = async (event) => {
        event.preventDefault();

        // getDetails();


        if (formIsValid1) {
            const RequestData = {
                id, firstName, email, address, pinCode: pin, adhaarNumber: adhaar, phoneNumber: Phone,
                patientName, age, gender, hospitalName, consultantName: consultant, hospitalNumber: hospitalNo, consultantNumber: consultantNo,
                bloodG: bloodGroup, RH: rh, date: dateTime, price, unit, componentName: blood
            }


            try {

                const res = await axios.post("http://localhost:8800/api/requestform", RequestData)
                window.alert(res.data.price ? `your are not eligiable for free blood of  $ ${res.data.price}` : `Your are eligiable for free blood of $ ${price}`)


                const bloodPrice = res.data.price ? `${res.data.price}` : "0";
                const date = new Date(`${res.data.createdAt}`)
                const component = res.data.componentName;
                generate(firstName, add, patientDetail, new Date(dateTime).toDateString(), date.toDateString(), id.toString(), bloodPrice, component, unit);

                console.log(
                    firstName, email, address, pin, adhaar, Phone,
                    patientName, age,
                    gender,
                    hospitalName, consultant, hospitalNo, consultantNo,
                    bloodGroup, rh, dateTime, price, unit, blood);

                goRefe.push('/Request');

                restFirstName();
                restEmail();
                restAddress();
                restPin();
                restAdhaar();
                restPhone();
                restPatientName();
                restAge();
                restGender();
                restConsultant();
                restHospitalName();
                restPatientName();
                restHospitalNo();
                restConsultantNo();
                restBloodGroup();
                restRh();
                setBlood('null');
                setPrice(0);
                setUnit("null");
                restDateTime();

            } catch (error) {
                console.log(error);
                window.alert("Please enter your register Email Id")
            }
        } else {
            window.alert(`Please fill all details `);
        }

        // if (rh !== "") {
        // getUnit();
        const bloodID = bloodUnit[0]._id;
        const forUnit = bloodUnit[0].unit - parseFloat(unit)

        try {
            await axios.put(`http://localhost:8800/api/bloodStock/update/${bloodID}`, { unit: forUnit })
        } catch (error) {
            console.log(error);
        }
        // }
    }


    let classForFirstName = firstValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForEmail = emailValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForAddress = addressValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForPin = pinValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForAdhaar = adhaarValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForPhone = phoneValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForPatient = patientValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForAge = ageValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForGender = genderValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForHospital = hospitalValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForConsultant = consultantValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForHospitalNo = hospitalNoValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForConsultantNo = consultantNoValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForBloodGroup = bloodGroupValueIsNotValid ? 'bloodTypeLeft wrong' : 'bloodTypeLeft';
    let classForRh = rhValueIsNotValid ? 'bloodTypeRight wrong' : 'bloodTypeRight';
    let classForDateTime = dateTimeValueIsNotValid ? 'requiredDate wrong' : 'requiredDate';

    return (
        <div className="model">

            <h1 style={{ color: 'white', textAlign: "center", marginTop: "2%" }}>Request Form For Blood</h1>
            <form className="FormRequest" onSubmit={submitForm}>
                <div className="modal-content">
                    <div className="requestFormInputLeft">

                        <div className={classForFirstName}>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                placeholder='First Name'
                                value={firstName}
                                onChange={firstNameChangeHandler}
                                onBlur={firstNameBlurHandler}
                            />
                            {firstValueIsNotValid && <p>Please Enter Your First Name</p>}
                        </div>

                        <div className={classForEmail}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder='Email'
                                value={email}
                                onChange={emailChangeHandler}
                                onBlur={emailBlurHandler}
                            />
                            {emailValueIsNotValid && <p>Please Enter Your Email ID</p>}
                        </div>
                        <div className={classForAddress}>
                            <label htmlFor="address">Full Address</label>
                            <textarea
                                placeholder='House no., Blg/Area name, City, District, State'
                                style={{ width: '85%', height: '60px' }}
                                value={address}
                                onChange={addressChangeHandler}
                                onBlur={addressBlurHandler}
                            />
                            {addressValueIsNotValid && <p>Please Enter Your Full Address</p>}
                        </div>
                        <div className={classForPin}>
                            <label htmlFor="pinCode">Pin Code</label>
                            <input
                                type="text"
                                placeholder='Pin Code'
                                minLength='6' maxLength='6'
                                value={pin}
                                onChange={pinChangeHandler}
                                onBlur={pinBlurHandler}
                            />
                            {pinValueIsNotValid && <p>Please Enter Your Pin Code</p>}
                        </div>
                        <div className={classForAdhaar}>
                            <label htmlFor="adhaarNumber">Adhaar Card Number</label>
                            <input
                                type="text"
                                placeholder="Adhaar Card Number"
                                minLength='12' maxLength='12'
                                value={adhaar}
                                onChange={adhaarChangeHandler}
                                onBlur={adhaarBlurHandler}
                            />
                            {adhaarValueIsNotValid && <p>Please Enter Your Adhaar Card Number</p>}
                        </div>
                        <div className={classForPhone}>
                            <label htmlFor="Phone">Phone Number</label>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                minLength='10' maxLength='10'
                                value={Phone}
                                onChange={phoneChangeHandler}
                                onBlur={phoneBlurHandler}
                            />
                            {phoneValueIsNotValid && <p>Please Enter Your Phone Number</p>}
                        </div>

                        <div className={classForPatient}>
                            <label htmlFor="pName">Patient Name</label>
                            <input
                                type="text"
                                placeholder='Pantient'
                                value={patientName}
                                onChange={patientNameChangeHandler}
                                onBlur={patientNameBlurHandler}
                            />
                            {patientValueIsNotValid && <p>Please Enter Patient Name</p>}
                        </div>

                        <div className="hold">
                            <div className={classForAge}>
                                <label htmlFor="age">Age</label>
                                <input
                                    type="text"
                                    placeholder="Age"
                                    minLength='1' maxLength='2'
                                    value={age}
                                    onChange={ageChangeHandler}
                                    onBlur={ageBlurHandler}
                                />
                                {ageValueIsNotValid && <p>Please Enter Patient Age</p>}
                            </div>
                            <div className={classForGender}>
                                <label htmlFor="gName"
                                >Gender</label>
                                <select
                                    name="gender" id="Gender"
                                    value={gender} onChange={genderChangeHandler} onBlur={genderBlurHandler}>
                                    <option value="null">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                {genderValueIsNotValid && <p>Please Enter Age Your Gender</p>}
                            </div>
                        </div>
                    </div>
                    <div className="requestFormInputright">

                        <div className={classForHospital}>
                            <label htmlFor="hospital">Hospital Name</label>
                            <input
                                type="text"
                                placeholder="Hospital Name"
                                value={hospitalName}
                                onChange={hospitalNameChangeHandler}
                                onBlur={hospitalNameBlurHandler}
                            />
                            {hospitalValueIsNotValid && <p>Please Enter Hospiatl Name</p>}
                        </div>
                        <div className={classForConsultant}>
                            <label htmlFor="consultant">Name Of Consultant</label>
                            <input
                                type="text"
                                placeholder="Name Of Consultant"
                                value={consultant}
                                onChange={consultantChangeHandler}
                                onBlur={consultantBlurHandler}
                            />
                            {consultantValueIsNotValid && <p>Please Enter Patient Consultant Name</p>}
                        </div>
                        <div className={classForHospitalNo}>
                            <label htmlFor="hPhone">Hospital Phone No.</label>
                            <input
                                type="text"
                                placeholder="Hospital Phone Number"
                                minLength='10' maxLength='12'
                                value={hospitalNo}
                                onChange={hospitalNoChangeHandler}
                                onBlur={hospitalNoBlurHandler}
                            />
                            {hospitalNoValueIsNotValid && <p>Please Enter HOspital Contact Number</p>}
                        </div>
                        <div className={classForConsultantNo}>
                            <label htmlFor="cPhone">Consultant Phone No.</label>
                            <input
                                type="text"
                                placeholder="Consultant Phone Number"
                                minLength='10' maxLength='10'
                                value={consultantNo}
                                onChange={consultantNoChangeHandler}
                                onBlur={consultantNoBlurHandler}
                            />
                            {consultantNoValueIsNotValid && <p>Please Enter Patient Contact Number</p>}
                        </div>
                        <div className="bloodType">
                            <div className={classForBloodGroup}>
                                <label htmlFor="bloodGroup">Blood Group</label>
                                <select
                                    value={bloodGroup}
                                    onChange={bloodGroupChangeHandler}
                                    onBlur={bloodGroupBlurHandler}
                                >
                                    <option value="null">Select</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="AB">AB</option>
                                    <option value="O">O</option>
                                </select>
                                {bloodGroupValueIsNotValid && <p>Please Enter Blood Group</p>}
                            </div>
                            <div className={classForRh}>
                                <label htmlFor="rhType">Rh Type</label>
                                <select
                                    value={rh}
                                    onChange={rhChangeHandler}
                                    onBlur={rhBlurHandler}
                                >
                                    <option value="null">Select</option>
                                    <option value="positive">Positive</option>
                                    <option value="negative">Negative</option>
                                </select>
                                {rhValueIsNotValid && <p>Please Enter Rh Type</p>}
                            </div>
                        </div>

                        <div className="bloodComponent">
                            <label htmlFor="componentName">Component Name</label>
                            <select name="componentName" id="componentName" value={blood} onChange={(e) => setBlood(e.target.value)}>
                                <option value='null'>select blood component group</option>
                                {cName.map((bloodTypeList, index) => (
                                    <option value={bloodTypeList.componentName} key={index}>{bloodTypeList.componentName}</option>
                                ))}
                            </select>
                            <div className="small">
                                <label htmlFor="unit" >Select Unit</label>
                                <select name="unit" id="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
                                    <option value="null">Unit</option>
                                    {bloodUnit.map((bloodTypeList, index) => (
                                        <option value={bloodTypeList.unit > 1 ? 1 : 0} key={index}>{bloodTypeList.unit > 1 ? 1 : 0}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="price">
                                <label htmlFor="price">Price</label>
                                <input type="text" style={{ width: '40px' }} disabled value={price}
                                />
                            </div>
                        </div >

                        <div className={classForDateTime}>
                            <label htmlFor="date" className="date">Date</label>
                            <input
                                type="datetime-local"
                                value={dateTime}
                                onChange={dateTimeChangeHandler}
                                onBlur={dateTimeBlurHandler}
                            />
                            {dateTimeValueIsNotValid && <p>Please Enter Date And Time When You Want Blood</p>}
                        </div>
                    </div >
                    <div id="reqButton">
                        <div className="reqButtonLeft">
                            <button onClick={requestBack}>Cancel</button>
                        </div>
                        <div style={{ textAlign: 'center' }} className="reqButtonMiddel">
                            <h5 style={{ textAlign: 'center' }}>For Referance</h5>
                            <button className="forRef" onClick={showRefe}>For Ref</button>
                        </div>
                        <div style={{ textAlign: 'right' }} className="reqButtonRight">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default RequestF
