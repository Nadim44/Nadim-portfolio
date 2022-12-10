import React from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const Projects = () => {
    return (
        <div className='mt-6'>
            <h1 className='font-bold text-5xl mx-auto text-center'>Projects</h1>
            <div>
                <Project1></Project1>
                <Project2></Project2>
                <Project3></Project3>
            </div>
        </div>
    );
};

export default Projects;