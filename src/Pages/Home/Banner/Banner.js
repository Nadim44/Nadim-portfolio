import React from 'react';
import { Link } from 'react-router-dom';
import nadim from '../../../images/nadim.png'
const Banner = () => {
    return (
        // <div className="hero min-h-screen bg-base-200">
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src={nadim} className="max-w-sm w-1/2 rounded-lg shadow-2xl" /> */}
                <img src={nadim} className=" w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to <br></br><p>Nadim Mahamud Emon Portfolio!</p></h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    {/* <button className="btn btn-primary">Resume</button> */}
                    {/* <button className="btn btn-primary"><Link to>Resume</Link></button> */}
                    <button className="btn btn-primary"> <a target='_blank' href="https://drive.google.com/file/d/1KqJ4jTI_ZSmbKtnOsJ3byXnCc7blcIRE/view?usp=sharing">Resume</a></button>
                    {/* <a href=""></a> */}
                </div>
            </div>
        </div>
    );
};
export default Banner;