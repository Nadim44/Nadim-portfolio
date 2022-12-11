import React from 'react';
import img1 from '../../../images/img1.PNG'
import img3 from '../../../images/img3.PNG'
import img4 from '../../../images/img4.PNG'

const Project1 = () => {
    return (
        // <div className='my-6 bg-slate-300 rounded-lg'>
        //     <h1 className='text-center mx-auto'><span className='text-3xl'>Project Name:- </span> <span className='text-orange-600 font-bold text-2xl'>Reselling product website</span></h1>
        //     <h2 className='mt-3 font-semibold text-2xl mx-4'>Features:</h2>
        //     <div className='mx-6'>
        //         <p>● 3 different login system (Admin/Buyer/Seller)</p>
        //         <p>● Firebase Authentication</p>
        //         <p>● JWT security implement</p>
        //     </div>
        //     <h2 className='mx-4'><span className='font-semibold text-2xl'>Link:</span> <span className='text-blue-600 font-bold text-2xl'><a href="https://products-resale-e5dcd.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Live Website</a></span></h2>
        //     <p className='mx-4 font-semibold text-xl pb-3'>Github repository: <span className='text-blue-600'><a href="https://github.com/Nadim44/products-resale-client-repo-12" target="_blank" rel="noopener noreferrer">Client-site</a></span> | <span className='text-blue-600'><a href="https://github.com/Nadim44/products-resale-server-repo-12" target="_blank" rel="noopener noreferrer">Server-site</a></span></p>
        //     <p className='mx-3'><span className='font-bold'>Technologies:</span> Tailwinds, DaisyUI, MongoDB, Firebase,JWT, React
        //         query,Stripe Payment.</p>
        // </div>
        <div>
            <h1 className='text-center mx-auto'><span className='text-3xl'>Project Name:- </span> <span className='text-orange-600 font-bold text-2xl'>Reselling product website</span></h1>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-96" alt='/' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-96" alt='/' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img4} className="w-full h-96" alt='/' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='my-2 bg-slate-200 rounded-lg'>
                <h2 className='pt-4 font-semibold text-2xl mx-4'>Features:</h2>
                <div className='mx-6 '>
                    <p>● 3 different login system. (Admin/Buyer/Seller)</p>
                    <p>● Firebase Authentication.</p>
                    <p>● JWT security implement.</p>
                    <p>● Easy payment system.</p>
                    <p>● Many product added.</p>
                </div>
                <h2 className='mx-4'><span className='font-semibold text-2xl'>Link:</span> <span className='text-blue-600 font-bold text-2xl'><a href="https://products-resale-e5dcd.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Live Website</a></span></h2>
                <p className='mx-4 font-semibold text-xl pb-3'>Github repository: <span className='text-blue-600'><a href="https://github.com/Nadim44/products-resale-client-repo-12" target="_blank" rel="noopener noreferrer">Client-site</a></span> | <span className='text-blue-600'><a href="https://github.com/Nadim44/products-resale-server-repo-12" target="_blank" rel="noopener noreferrer">Server-site</a></span></p>
                <p className='mx-3 pb-4'><span className='font-bold text-xl'>Technologies:</span> Tailwinds, DaisyUI, MongoDB, Firebase, JWT, React
                    query,Stripe Payment.</p>
            </div>
        </div>
    );
};

export default Project1;