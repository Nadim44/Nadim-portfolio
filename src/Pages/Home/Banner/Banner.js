import React from 'react';
import nadim from '../../../images/nadim.png'

const Banner = () => {
    return (
        // <div className="hero min-h-screen bg-base-200">
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <img alt='' src={nadim} className=" w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">Welcome to <br></br><p className=''><span className='text-orange-600 text-5xl'>Nadim Mahamud Emon</span> Portfolio!</p></h1>
                    <p className="py-6">I am expert with HTML, CSS, Bootstrap, Tailwind CSS, Javascript, ReactJS, React Bootstrap, DaisyUI, Node JS, Firebase, MongoDB.</p>
                    <button className="btn btn-primary"> <a target='_blank' href="https://drive.google.com/file/d/1ygplNh66cbdcjQCeaBaSXHfSo_raBNCk/view">Resume</a></button>
                </div>
            </div>
        </div>
    );
};
export default Banner;