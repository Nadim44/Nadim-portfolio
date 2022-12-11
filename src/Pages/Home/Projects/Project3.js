import React from 'react';
import img9 from '../../../images/img9.PNG'
import img10 from '../../../images/img10.PNG'
import img11 from '../../../images/img11.PNG'

const Project3 = () => {
    return (
        // <div className='my-6 bg-slate-300 rounded-lg'>
        //     <h1 className='text-center mx-auto'><span className='text-3xl'>Project Name:- </span> <span className='text-orange-600 font-bold text-2xl'>Learning Platform website</span></h1>
        //     <h2 className='mt-3 font-semibold text-2xl mx-4'>Features:</h2>
        //     <div className='mx-6'>
        //         <p>● Daily learning platform</p>
        //         <p>● Implement daily routine</p>
        //     </div>
        //     <h2 className='mx-4'><span className='font-semibold text-2xl'>Link:</span> <span className='text-blue-600 font-bold text-2xl'><a href="https://dancing-chimera-0c5074.netlify.app/" target="_blank" rel="noopener noreferrer">Live Website</a></span></h2>
        //     <p className='mx-4 font-semibold text-xl pb-3'>Github repository: <span className='text-blue-600'><a href="https://github.com/Nadim44/learning-platform-9" target="_blank" rel="noopener noreferrer">Client-site</a></span></p>
        //     <p className='mx-3'><span className='font-bold'>Technologies:</span> Tailwinds, DaisyUI, Netlify, Javascript, React.</p>
        // </div>
        <div>
            <h1 className='text-center mx-auto mb-3'><span className='text-3xl'>Project Name:- </span> <span className='text-blue-600 font-bold text-2xl'>Learning Platform website</span></h1>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img9} className="w-full h-96" alt='/' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img10} className="w-full h-96" alt='/' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img11} className="w-full h-96" alt='/' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='my-6 bg-slate-300 rounded-lg'>
                <h2 className='mt-3 pt-4 font-semibold text-2xl mx-4'>Features:</h2>
                <div className='mx-6'>
                    <p>● Daily learning platform</p>
                    <p>● Implement daily routine</p>
                </div>
                <h2 className='mx-4'><span className='font-semibold text-2xl'>Link:</span> <span className='text-blue-600 font-bold text-2xl'><a href="https://dancing-chimera-0c5074.netlify.app/" target="_blank" rel="noopener noreferrer">Live Website</a></span></h2>
                <p className='mx-4 font-semibold text-xl pb-3'>Github repository: <span className='text-blue-600'><a href="https://github.com/Nadim44/learning-platform-9" target="_blank" rel="noopener noreferrer">Client-site</a></span></p>
                <p className='mx-3'><span className='font-bold'>Technologies:</span> Tailwinds, DaisyUI, Netlify, Javascript, React.</p>
            </div>
        </div>
    );
};

export default Project3;