import './LandingSection.css'
import Image from 'next/image'
import landing1 from '../../assets/Images/Bannner-02.jpg'
import landing2 from '../../assets/Images/Bannner-01.jpg'

const LandingSection = () => {
    return (
        <div className='landing'>
            <div className=" row landing-container ps-md-5 pe-md-5 ps-sm-0 pe-sm-0 container">
                <Image src={landing1} alt='' className='col-md-4' height={500}/>
                <Image src={landing2} alt='' className='col-md-8' height={500}/>
            </div>
        </div>
    )
}

export default LandingSection
