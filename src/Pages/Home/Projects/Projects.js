import React from 'react';
import { Link } from 'react-router-dom';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import img2 from '../../../images/img2.PNG'
import img5 from '../../../images/img5.PNG'
import img9 from '../../../images/img9.PNG'

const Projects = () => {
    return (
        <div className='mt-6'>
            <h1 className='font-bold text-5xl mx-auto text-center text-blue-600 mb-6'>Projects</h1>
            {/* <Project1></Project1>
                <Project2></Project2>
                <Project3></Project3> */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 p-4 '>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-orange-600 font-bold">Reselling Product</h2>
                        <p>It is a Reselling product website. When we need used phone buy or sell, we can buy or sell phone in this website.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to='/project1'>Details</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-orange-600 font-bold">Learning Platform</h2>
                        <p>It is a Course information website. We provide some course. If you need course information, you must be visit this website. </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to='/project2'>Details</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img9} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-orange-600 font-bold">Calculate Daily Routine </h2>
                        <p>It is a daily routine website. When we set our daily routine, you must be visit this website. </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to='/project3'>Details</Link></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;