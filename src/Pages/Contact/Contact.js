import React from 'react';

const Contact = () => {
    return (
        <div className=''>
            <h1 className='text-center text-3xl font-bold mb-4'>Contact Form</h1>
            <div>
                {/* <form method="POST" action="https://formsubmit.co/nadimmahamud661@gmail.com" enctype="multipart/form-data"> */}
                <form method="POST" action="https://formsubmit.co/56bdf1437eebad2d9f801e4d105e3647">
                    <p className='text-center my-2 '><input type="text" name='Name' placeholder="Name" className=" input input-bordered input-md w-full max-w-xs" required /></p>
                    <p className='text-center my-2 '><input type="email" name='Email' placeholder="Email" className=" input input-bordered input-md w-full max-w-xs" required /></p>
                    <p className='text-center my-2 '> <textarea name='Message' className="textarea input input-bordered input-md w-full max-w-xs" placeholder="Message" required></textarea></p>
                    <p className='text-center my-2 '><button type='submit' className="btn btn-success input input-bordered input-md w-full max-w-xs">Submit</button></p>

                </form>
            </div>
        </div>
    );
};

export default Contact;