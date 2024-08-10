import React from 'react'
import RingLoader from "react-spinners/RingLoader";

const Loader = () => {
    return (
        <div className='min-h-[100vh] flex justify-center items-center'>
            <RingLoader
                color={'#007CF0'}
                loading={true}
                size={150}
            />
        </div>
    )
}

export default Loader
