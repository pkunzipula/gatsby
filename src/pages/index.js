import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import 'typeface-emilys-candy';
import 'typeface-fira-sans';

const divStyle = {
    margin: '20px auto',
    maxWidth: '1500px',
    textAlign: 'center',
    color: '#878787',
    fontFamily: 'Fira Sans',
};

const h1Style = {
    fontWeight: 'normal',
    fontSize: '1.5',
    lineHeight: '1.8',
};

const pStyle = {
    fontSize: '1.1',
    lineHeight: '1.8'
}

const imgStyle = {
    lineHeight: '1',
    maxWidth: '100%'
}

const candyStyle = {
    fontFamily: 'Emilys Candy'
}

export default () => (
    <div style={divStyle}>
        <img style={imgStyle} src={`../../biggerHair16x6.jpg`} alt="Ary and guests" />
        <h1 style={h1Style}>Hello and welcome to <span style={candyStyle}>Hair by Ary!</span></h1>
        <p style={pStyle}>I'm at Sola Salon on the Southwest corner of Warm Springs and Buffalo.<br/>
            I'm always accepting new guests, so please contact me for an appointment!<br/>
            I can't wait to see you!</p>
    </div>
)
