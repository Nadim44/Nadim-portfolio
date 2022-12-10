import React from 'react';

const Project2 = () => {
    return (
        <div className='my-6 bg-slate-300 rounded-lg'>
            <h1 className='text-center mx-auto'><span className='text-3xl'>Project Name:- </span> <span className='text-orange-600 font-bold text-2xl'>Course information website</span></h1>
            <h2 className='mt-3 font-semibold text-2xl mx-4'>Features:</h2>
            <div className='mx-6'>
                <p>● Many course options</p>
                <p>● Firebase Authentication</p>
                <p>● JWT security implement</p>
            </div>
            <h2 className='mx-4'><span className='font-semibold text-2xl'>Link:</span> <span className='text-blue-600 font-bold text-2xl'><a href="https://study-world-5941f.web.app/" target="_blank" rel="noopener noreferrer">Live Website</a></span></h2>
            <p className='mx-4 font-semibold text-xl pb-3'>Github repository: <span className='text-blue-600'><a href="https://github.com/Nadim44/study-client-repo-10" target="_blank" rel="noopener noreferrer">Client-site</a></span> | <span className='text-blue-600'><a href="https://github.com/Nadim44/study-server-repo-10" target="_blank" rel="noopener noreferrer">Server-site</a></span></p>
            <p className='mx-3'><span className='font-bold'>Technologies:</span> Tailwinds, DaisyUI, MongoDB, Firebase, JWT, React
                query</p>
        </div>
    );
};

export default Project2;