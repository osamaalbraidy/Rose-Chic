"use client"
import './index.css'

const page = () => {
    return (
        <div className='contact container'>
            <h1>Contact us</h1>
            <textarea 
            name="" 
            id="" 
            rows={3} 
            placeholder='Comment'
            style={{ resize: 'none' }}
            ></textarea>
            <button>Send</button>
        </div>
    )
}

export default page