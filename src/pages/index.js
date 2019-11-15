import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const divStyle = {
    margin: '0 auto',
    maxWidth: '1500px',
    textAlign: 'center',
    color: '#ccc'
};

const imgStyle = {
    lineHeight: '1',
    maxWidth: '100%'
}

export default () => (
    <div style={divStyle}>
        <img style={imgStyle} src={`../../biggerHair16x6.jpg`} alt="Ary and guests" />
        <h1>Hello and welcome to Hair by Ary!</h1>
        <p>I'm at Sola Salon on the Southwest corner of Warm Springs and Buffalo.<br/>
            I'm always accepting new guests, so please contact me for an appointment!<br/>
            I can't wait to see you!</p>
    </div>
)
