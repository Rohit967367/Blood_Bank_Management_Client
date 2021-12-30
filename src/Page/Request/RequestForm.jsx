import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import './RequestForm.css'
import useDynamicForm from '../../DynamicForm'
// import { bloodtype } from '../../Componant/DummyData'
import axios from 'axios';
// import download from 'downloadjs'
// import { PDFDocument } from 'pdf-lib'
// import pdfFile from '../../Picture/Blue3.pdf'
import { generate } from './GeneratePFDForF';



const RequestForm = () => {

    // let [refe, setRefe] = useState(false);
    // let showRefe = () => {
    //     setRefe(!refe);
    // }
    // if(refeName !== ''){
    //     refeValueIsValid = true;
    // }




    const [blood, setBlood] = useState('null')
    const [unit, setUnit] = useState('null')
    const [price, setPrice] = useState(0)


    // useEffect(() => {
    //     if (blood !== 'null' && unit !== 'null') {
    //         cName.map((bloodPrice) => {
    //             if (bloodPrice.componentName === blood) {
    //                 ////akshay
    //                 let price = bloodPrice.Price * Number(unit)

    //                 ////maine
    //                 let price = bloodPrice.price * Number(unit)
    //                 setPrice(price)
    //             }
    //         })
    //     }
    //     //akshay
    //     }, [blood, unit, price])

    //     ///main
    // }, [blood, unit, cName])






    // useEffect(() => {
    //     if (blood !== 'null' && unit !== 'null') {
    //         bloodtype.map((bloodPrice) => {
    //             if (bloodPrice.componentName === blood) {
    //                 console.log({blood, unit, bloodPrice})
    //                 let price = bloodPrice.Price * Number(unit)
    //                 setPrice(price)
    //             }
    //         })
    //     }
    // }, [blood, price, unit])




    let reqBack = useHistory();
    let requestBack = () => {
        reqBack.push('/Request');
    }

    // let {
    //     value: userName,
    //     valueIsValid: userNameValueIsValid,
    //     errorMsg: userNameValueIsNotValid,
    //     changeHandler: userNameChangeHandler,
    //     blurHandler: userNameBlurHandler,
    //     rest: restUserName,
    // } = useDynamicForm(value => value.trim() !== '');

    let {
        value: firstName,
        valueIsValid: firstNameValueIsValid,
        errorMsg: firstValueIsNotValid,
        changeHandler: firstNameChangeHandler,
        blurHandler: firstNameBlurHandler,
        rest: restFirstName,
    } = useDynamicForm(value => value.trim() !== '');

    // let {
    //     value: lastName,
    //     valueIsValid: lastNameValueIsValid,
    //     errorMsg: lastValueIsNotValid,
    //     changeHandler: lastNameChangeHandler,
    //     blurHandler: lastNameBlurHandler,
    //     rest: restLastName,
    // } = useDynamicForm(value => value.trim() !== '');

    // let {
    //     value: occupation,
    //     valueIsValid: occupationValueIsValid,
    //     errorMsg: occupationValueIsNotValid,
    //     changeHandler: occupationChangeHandler,
    //     blurHandler: occupationBlurHandler,
    //     rest: restOccupation,
    // } = useDynamicForm(value => value.trim() !== '');

    // let {
    //     value: fName,
    //     valueIsValid: fNameValueIsValid,
    //     errorMsg: fNameValueIsNotValid,
    //     changeHandler: fNameChangeHandler,
    //     blurHandler: fNameBlurHandler,
    //     rest: restFName,
    // } = useDynamicForm(value => value.trim() !== '');

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

    let {
        value: refeName,
        valueIsValid: refeNameValueIsValid,
        errorMsg: refeNameValueIsNotValid,
        changeHandler: refeNameChangeHandler,
        blurHandler: refeNameBlurHandler,
        rest: restRefeName,
    } = useDynamicForm(value => value.trim() !== '');

    let {
        value: refeAdhaar,
        valueIsValid: refeAdhaarValueIsValid,
        errorMsg: refeAdhaarValueIsNotValid,
        changeHandler: refeAdhaarChangeHandler,
        blurHandler: refeAdhaarBlurHandler,
        rest: restRefeAdhaar,
    } = useDynamicForm(value => value.trim().length === 12);

    let {
        value: refePhone,
        valueIsValid: refePhoneValueIsValid,
        errorMsg: refePhoneValueIsNotValid,
        changeHandler: refePhoneChangeHandler,
        blurHandler: refePrefePhoneBlurHandler,
        rest: restRefePhone,
    } = useDynamicForm(value => value.trim().length === 10);

    let {
        value: refeRelation,
        valueIsValid: refeRelationValueIsValid,
        errorMsg: refeRelationValueIsNotValid,
        changeHandler: refeRelationChangeHandler,
        blurHandler: refeRelationBlurHandler,
        rest: restRefeRelation,
    } = useDynamicForm(value => value.trim() !== '');





    const [cName, setCName] = useState([])


    const [bloodUnit, setBloodUnit] = useState([]);
    useEffect(() => {
        const getUnit = async () => {
            try {
                const req = await axios.get(`http://localhost:8800/api/bloodStock/BloodName?componentName=${blood}`)
                setBloodUnit(req.data);
            } catch (error) {
                console.log(error);
            }
        }
        getUnit();

    }, [blood])
    // console.log(bloodUnit);

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


    useEffect(() => {
        if (blood !== 'null' && unit !== 'null') {
            cName.map((bloodPrice) => {
                if (bloodPrice.componentName === blood) {
                    let price = bloodPrice.price * Number(unit)
                    setPrice(price)
                }
            })
        }
    }, [blood, unit, cName])



    let formIsValid = false;
    // let refeValueIsValid
    // if(! refeNameValueIsValid){
    //     refeValueIsValid = "refeNameValueIsValid";
    // }else{
    //     refeValueIsValid = "";
    // }



    if (
        // userNameValueIsValid &&  lastNameValueIsValid && occupationValueIsValid && fNameValueIsValid
        firstNameValueIsValid && emailValueIsValid && addressValueIsValid && pinValueIsValid && adhaarValueIsValid && phoneValueIsValid
        && patientNameValueIsValid && ageValueIsValid
        && genderValueIsValid
        && hospitalNameValueIsValid && ConsultantValueIsValid && hospitalNoValueIsValid
        && consultantNoValueIsValid && bloodGroupValueIsValid && rhValueIsValid && dateTimeValueIsValid
        && refeNameValueIsValid && refeAdhaarValueIsValid && refeRelationValueIsValid && refePhoneValueIsValid) {
        formIsValid = true;
    }


    const add = `${address} - ${pin}`
    const patientDetail = `${patientName}
${consultant}
${hospitalName}
${hospitalNo} 
`
    const refe =
        `${refeName}
${refeRelation}
${refePhone}`

    const id = Math.floor((Math.random() * 100000) + 1);

    let allForm = async (event) => {
        event.preventDefault();

        if (formIsValid) {


            const RequestData = {
                firstName, email, address, pinCode: pin, adhaarNumber: adhaar, phoneNumber: Phone,
                patientName, age, gender, hospitalName, consultantName: consultant, hospitalNumber: hospitalNo, consultantNumber: consultantNo,
                bloodG: bloodGroup, RH: rh, date: dateTime, price, unit, componentName: blood, refeName, refePhone, refeAdhaar, refeRelation
            }

            try {

                /////For Posting data and match price form api
                const res = await axios.post("http://localhost:8800/api/requestform", RequestData)
                window.alert(res.data.price ? `your are not eligiable for free blood of  $ ${res.data.price}` : `Your are eligiable for free blood of $ ${price}`)


                ////For Generate PDF
                const bloodPrice = res.data.price ? `${res.data.price}` : "0";
                const date = new Date(`${res.data.createdAt}`)
                const component = res.data.componentName;
                generate(firstName, add, refe, patientDetail, new Date(dateTime).toDateString(), date.toDateString(), id.toString(), bloodPrice, component, unit);



                ////AFTER SUBMIT
                reqBack.push('/Request');

                console.log(
                    //  userName, lastName, occupation,fName,
                    firstName, email, address, pin, adhaar, Phone,
                    patientName, age,
                    gender,
                    hospitalName, consultant, hospitalNo, consultantNo,
                    bloodGroup, rh, dateTime, refeName, refePhone, refeAdhaar, refeRelation, price, unit, blood);


                // restUserName();
                restFirstName();
                // restLastName();
                // restOccupation();
                // restFName();
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
                restRefeName();
                restRefePhone()
                restRefeAdhaar()
                restRefeRelation();

            } catch (error) {
                console.log(error);
                window.alert("Please enter your register Email Id")
            }
        } else {
            window.alert(`Please fill all details `);
        }

        const bloodID = bloodUnit[0]._id;
        const forUnit = bloodUnit[0].unit - parseFloat(unit)

        try {
            /////update BloodStock 
            await axios.put(`http://localhost:8800/api/bloodStock/update/${bloodID}`, { unit: forUnit })
        } catch (error) {
            console.log(error);
        }
        // console.log(cName[0]._id, forUnit, cName[0].unit, checkunit, bloodID);
    }

    // let classForUser = userNameValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    let classForFirstName = firstValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    // let classForLastName = lastValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    // let classForOccupation = occupationValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';
    // let classForFName = fNameValueIsNotValid ? 'requestFormInput wrong' : 'requestFormInput';

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
    let classForRefeName = refeNameValueIsNotValid ? 'refeFormInput  wrong' : 'refeFormInput ';
    let classForRefeAdhaar = refeAdhaarValueIsNotValid ? 'refeFormInput  wrong' : 'refeFormInput ';
    let classForRefePhone = refePhoneValueIsNotValid ? 'refeFormInput  wrong' : 'refeFormInput ';
    let classForRefeRelation = refeRelationValueIsNotValid ? 'refeFormInput  wrong' : 'refeFormInput ';

    // const phoneNum = /^(0-9){9}$/
    // const checkNuumber = phoneNum.test(Phone);


    return (
        <div className="model">
            <h1 style={{ color: 'white', textAlign: "center", marginTop: "2%" }}>Request Form For Blood</h1>
            <form className="FormRequest" onSubmit={allForm}>
                <div className="modal-content">
                    <div className="requestFormInputLeft">

                        {/* <div className={classForUser}>
                            <label htmlFor="userName">User Name</label>
                            <input
                                type="text"
                                placeholder='User Name'
                                value={userName}
                                onChange={userNameChangeHandler}
                                onBlur={userNameBlurHandler}
                            />
                            {userNameValueIsNotValid && <p>Please Enter Your User Name</p>}
                        </div> */}
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
                        {/* <div className={classForLastName}>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                placeholder='Last Name'
                                value={lastName}
                                onChange={lastNameChangeHandler}
                                onBlur={lastNameBlurHandler}
                            />
                            {lastValueIsNotValid && <p>Please Enter Your Last Name</p>}
                        </div> */}



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
                            <label htmlFor="address">Address</label>
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
                                minLength='12' maxLength='12'
                                placeholder="Adhaar Card Number"
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
                                value={Phone}
                                onChange={phoneChangeHandler}
                                onBlur={phoneBlurHandler}
                                maxLength="10"
                                minLength="10"
                            />
                            {phoneValueIsNotValid && <p>Please Enter Your Phone Number</p>}
                        </div>
                        {/* <div className={classForOccupation}>
                            <label htmlFor="occupation">Occupation</label>
                            <input
                                type="text"
                                placeholder="Student, Employee"
                                value={occupation}
                                onChange={occupationChangeHandler}
                                onBlur={occupationBlurHandler}
                            />
                            {occupationValueIsNotValid && <p>Please Enter Your Occupation</p>}
                        </div> */}



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
                        {/* <div className={classForFName}>
                            <label htmlFor="gName">Father/Husband Name</label>
                            <input
                                type="text"
                                placeholder='Patient Father/Husband Name'
                                value={fName}
                                onChange={fNameChangeHandler}
                                onBlur={fNameBlurHandler}
                            />
                            {fNameValueIsNotValid && <p>Please Enter Patient Father/Husband Name</p>}
                        </div> */}
                        <div className="hold">
                            <div className={classForAge}>
                                <label htmlFor="age">Age</label>
                                <input
                                    type="text"
                                    placeholder="Age"
                                    value={age}
                                    onChange={ageChangeHandler}
                                    onBlur={ageBlurHandler}
                                    maxLength="2"
                                    minLength="1"
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
                        {/* <div className={classForPatient}>
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
                        <div className={classForFName}>
                            <label htmlFor="gName">Father/Husband Name</label>
                            <input
                                type="text"
                                placeholder='Patient Father/Husband Name'
                                value={fName}
                                onChange={fNameChangeHandler}
                                onBlur={fNameBlurHandler}
                            />
                            {fNameValueIsNotValid && <p>Please Enter Patient Father/Husband Name</p>}
                        </div>
                        <div className={classForAge}>
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                placeholder="Age"
                                value={age}
                                onChange={ageChangeHandler}
                                onBlur={ageBlurHandler}
                            />
                            {ageValueIsNotValid && <p>Please Enter Patient Age</p>}
                        </div>
                        ///<div className="requestFormInput">
                        <label htmlFor="gName" id="gender"
                        value={gender} onChange={genderChangeHandler} onBlur={genderBlurHandler}
                        >Gender</label>
                        <input type="radio" />Male
                        <input type="radio" />Female
                        <input type="radio" />Other */}
                        {/* {genderValueIsNotValid && <p>Please Enter Age Your Gender</p>} */}
                        {/* </div> */}
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
                                value={hospitalNo}
                                onChange={hospitalNoChangeHandler}
                                onBlur={hospitalNoBlurHandler}
                                maxLength="12"
                            />
                            {hospitalNoValueIsNotValid && <p>Please Enter HOspital Contact Number</p>}
                        </div>
                        <div className={classForConsultantNo}>
                            <label htmlFor="cPhone">Consultant Phone No.</label>
                            <input
                                type="text"
                                maxLength='10'
                                minLength='10'
                                placeholder="Consultant Phone Number"
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
                                    <option value='A'>A</option>
                                    <option value='B'>B</option>
                                    <option value='AB'>AB</option>
                                    <option value='O'>O</option>
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

                            {/* <div className="bloodComponentLeft"> */}
                            <label htmlFor="componentName">Component Name</label>
                            <select name="componentName" id="componentName" value={blood} onChange={(e) => setBlood(e.target.value)}>
                                <option value='null'>select blood component group</option>
                                {cName.map((bloodTypeList, index) => (
                                    <option value={bloodTypeList.componentName} key={index}>{bloodTypeList.componentName}</option>
                                ))}
                            </select>
                            {/* </div> */}
                            {/* <div className="bloodComponentRight"> */}
                            <div className="small">
                                <label htmlFor="unit" >Select Unit</label>
                                <select name="unit" id="unit" value={unit} onChange={(e) => setUnit(e.target.value)}>
                                    <option value="null">Unit</option>
                                    {/* {bloodtype.map((present, index)=>(
                                        <option value={present.unit} key={index}>{present.unit}</option>
                                    ))} */}
                                    {bloodUnit.map((unit) => (
                                        <option value={unit.unit > 1 ? "1" : "0"} key={unit._id}>{unit.unit > 1 ? "1" : "0"}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="price">
                                <label htmlFor="price">Price</label>
                                <input type="text" style={{ width: '40px' }} disabled value={price}
                                // value="600"
                                />
                            </div>
                            {/* </div> */}
                        </div >

                        {/* <div className="required"> */}
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
                        {/* <div className="requiredTime">
                            <label htmlFor="time" className="time">Time</label>
                            <input type="time" />
                        </div> */}
                        {/* </div> */}
                    </div >


                    {/* {!refe && <div id="reqButton">
                        <div className="reqButtonLeft">
                            <button onClick={requestBack}>Cancel</button>
                        </div>
                        <div style={{ textAlign: 'center' }} className="reqButtonMiddel">
                            <h5 style={{ textAlign: 'center' }}>For Referance</h5>
                            <button className="forRef" onClick={showRefe}>For Ref</button>
                        </div>
                        <div style={{ textAlign: 'right' }} className="reqButtonRight">
                            <button type="submit" onClick={form} >Submit</button>
                        </div>
                    </div>} */}

                </div>
                {/* {
                    refe && */}
                {/* // <div className="modal-content"> */}
                <div className="forRefe">
                    <h3 style={{ color: "black" }}>Reference Person Datials</h3>
                    <br />
                    <div className="forRefeLabel">
                        <div className="forRefeLeft">
                            <div className={classForRefeName}>
                                <label htmlFor="refe">Refe Name</label>
                                <input
                                    type="text"
                                    placeholder="Reference Person Name"
                                    value={refeName}
                                    onChange={refeNameChangeHandler}
                                    onBlur={refeNameBlurHandler}
                                />
                                {refeNameValueIsNotValid && <p>Please Enter Your Reference Name</p>}
                            </div>

                            <div className={classForRefeAdhaar}>
                                <label htmlFor="refeAdhhar">Refe Adhaar Card Number</label>
                                <input
                                    type="text"
                                    placeholder="Reference Adhaar Card No."
                                    value={refeAdhaar}
                                    onChange={refeAdhaarChangeHandler}
                                    onBlur={refeAdhaarBlurHandler}
                                />
                                {refeAdhaarValueIsNotValid && <p>Please Enter Reference Adhaar Card Number</p>}
                            </div>
                        </div>
                        <div className="forRefeRight">
                            <div className={classForRefePhone}>
                                <label htmlFor="refeNo">Refe Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Reference Phone no"
                                    maxLength='10'
                                    minLength='10'
                                    value={refePhone}
                                    onChange={refePhoneChangeHandler}
                                    onBlur={refePrefePhoneBlurHandler}
                                />
                                {refePhoneValueIsNotValid && <p>Please Enter Reference Phone Number</p>}
                            </div>
                            <div className={classForRefeRelation}>
                                <label htmlFor="refeRelation">Refe Relation</label>
                                <input
                                    type="text"
                                    placeholder="Friends, Cousin"
                                    value={refeRelation}
                                    onChange={refeRelationChangeHandler}
                                    onBlur={refeRelationBlurHandler}
                                />
                                {refeRelationValueIsNotValid && <p>Please Enter Relation with Your Reference</p>}
                            </div>
                        </div>
                    </div>
                    <br />
                    <div id="reqButton">
                        <div className="reqButtonLeft">
                            <button onClick={requestBack} >Back</button>
                        </div>
                        <div style={{ textAlign: 'right' }} className="reqButtonRight">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                    {/* </div> */}
                </div>


                {/* } */}
            </form >



            {/* </option> */}


            {/* <option value="ffp">Fresh Frozen Plasma(FFP)</option>
                                <option value="prbc">Packed Red Cell(PRBC)</option>
                                <option value="pc">Platelet Concentrate(PC)</option>
                                <option value="wb">Singel Donor Platelet(SDP)</option>
                                <option value="Cryoprecipitate">Cryoprecipitate</option> */}
        </div >



    )
}

export default RequestForm
