import React, { useRef, useState } from 'react'


function InputData({state}) {

    const name = useRef();
    const email = useRef();
    const heading = useRef();
    const essay = useRef();

    const[deploy , setDeploy] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { contract } = state;
        const d = await contract.setEssay(
            name.current.value,
            email.current.value,
            heading.current.value,
            essay.current.value
        );
        await d.wait();
        setDeploy("Deployment is Successful!");
    };
    
    return (
        <div className="container bg-light p-5 shadow-lg">
            <form onSubmit={handleSubmit} className=' m-5 ' >
                <h6 className='m-2 p-3 text-muted  fw-bold font-monospace'>Create Your Own Essay !</h6>
                <input type="text" name="" id="" placeholder='Enter Name' required className="form-control p-3 m-2 shadow rounded-0"  ref={name}/>
                <input type="email" name="" id="" placeholder='Enter email'required className="form-control p-3 m-2 shadow rounded-0" ref={email} />
                <input type="text" name="" id="" placeholder='Enter Essay Heading' required className="form-control p-3 m-2 shadow rounded-0" ref={heading} />
                <textarea name="" id="" cols="60" rows="10" className='w-100 form-control p-3 m-2 shadow rounded-0' placeholder='Start Writing Essay here ...' ref={essay}></textarea>
                
                <button className="btn  btn-dark shadow rounded-0 border-0 p-3 m-3" type="submit">Publish</button>
               {deploy}

            </form>

        </div>
    )
}

export default InputData
