import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import './Model.css'

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose}>{props.children}</div>
}

const Protal = (props) => {
    return (
       
       <div className="protal">
            <div className="contain">
                {props.children}
            </div>
        </div>
    )
}

let proptelModel = document.getElementById('overlay');

const Model = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, proptelModel)}
            {ReactDom.createPortal(<Protal>
                {props.children}
            </Protal>, proptelModel)}
        </Fragment>
    )
}

export default Model
