import React from 'react'

export default function PageNotFound(props) {
    return (
        <div>
            Not Found 404
            <button className='btn btn-danger' onClick={()=>{
                props.history.push('/home')
            }}>
                Back
            </button>
        </div>
    )
}
