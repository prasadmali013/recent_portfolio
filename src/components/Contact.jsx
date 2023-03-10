import React from 'react'

const Contact = () => {
    return (
        // cutting w-full and h-screen 
        <div name='contact' className='bg-[#0a192f] w-full h-screen flex justify-center mt-10 items-center p-4'>
            <form method='POST' action="https://getform.io/f/adefcfa7-f2ff-49e6-92db-5eb96b774426" className='flex flex-col max-w-[600px] w-full '>
                <div className=''>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-100'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - prmali013@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="9" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-3 py-2 my-7 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact