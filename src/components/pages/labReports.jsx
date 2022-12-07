import React, { Component } from 'react';
import '../../CSS/labReports.css';





const LabReports = (props) => {
    const handleOnClick = (path) => {
        props.redirect('labReports/' + path);
    }
    return (
        <>
            <div className='LRTitle'>
                Lab Reports
            </div>
            <div className='LRBody'>
                <button className='btn' onClick={() => { handleOnClick('lab01') }}> Determination of Characteristic Curve of a Diode  </button>
                <br />
                <button className='btn' onClick={() => { handleOnClick('lab02') }}>  Study of Diode Rectifiers  </button>
                <br />
                <button className='btn' onClick={() => { handleOnClick('lab04') }}>  Study of Zener Diode  </button>
                <br />
                <button className='btn' onClick={() => { handleOnClick('lab05') }}>  Study of Transistor Characteristic in Common Emitter Amplifier</button>
                <br />
                <button className='btn' onClick={() => { handleOnClick('lab06') }}>  Study of BJT Biasing Circuit</button>
                <br />
                <button className='btn' onClick={() => { handleOnClick('lab06') }}>  Study of BJT Biasing Circuit</button>
                <br />
                <button className='btn' onClick={() => { handleOnClick('lab07') }}>  Bipolar Junction Transistor (BJT): Study of Single Stage Transistor Common Emitter Amplifier</button>
                <br />
                <button className='btn' onClick={() => { handleOnClick('lab08') }}>  Study of JFET and MOSFET Characterization</button>
                <br />
                <button className='btn' onClick={() => { handleOnClick('lab09') }}>  Study of Inverter Circuit using MOSFET and BJT</button>
            </div>
        </>
    );
}

export default LabReports;