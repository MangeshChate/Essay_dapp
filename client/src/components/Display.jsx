import React, { useEffect, useState } from 'react'

function Display({ state }) {
    const [essay, setEssay] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const { contract } = state;
        const fetchData = async () => {
            try {
                const info = await contract.getEssay();
                setEssay(info);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching essay data:", error.message);
              
                setLoading(false);
            }
        };
    
        if (contract) {
            setLoading(true); 
            fetchData();
        }
    }, [state]);
    
    

    return (
        <div className='m-5'>
            <h1 className='container text-muted fw-bold p-3'>Published Essays</h1>
            <hr />
            {loading ? (
                <p>Loading...</p>
            ) : (
                essay.map((e) => (
                    <div className="p-5  rounded-3 container text-light shadow bg-light text-dark mt-5" key={e.heading}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h3>{e.heading}</h3>
                            <span>{e.name} {(new Date(e.timestamp * 1000).toLocaleString())}</span>
                        </div>
                        <hr />
                        <p className='mt-3'>{e.essay}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Display;
