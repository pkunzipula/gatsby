import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import 'typeface-emilys-candy';
import 'typeface-fresca';

const divStyle = {
    margin: '20px auto',
    maxWidth: '1500px',
    textAlign: 'center',
    color: '#ccc',
    fontFamily: 'Fresca',
    fontSize: '2rem',
    lineHeight: '1.825rem'
};

const imgStyle = {
    lineHeight: '1',
    maxWidth: '100%'
}

const nameStyle = {
    candyFamily: 'Emilys Candy'
}

export default () => (
    <div style={divStyle}>
        <img style={imgStyle} src={`../../biggerHair16x6.jpg`} alt="Ary and guests" />
        <h1>Hello and welcome to <span style={candyStyle}>Hair by Ary!</span></h1>
        <p>I'm at Sola Salon on the Southwest corner of Warm Springs and Buffalo.<br/>
            I'm always accepting new guests, so please contact me for an appointment!<br/>
            I can't wait to see you!</p>
    </div>
)
