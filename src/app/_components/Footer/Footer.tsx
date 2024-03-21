import './Footer.css'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../../assets/Footer Logo/Footer Logo-01.png'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center footer-C">
                <div className="logo mb-3 mb-md-0">
                    <Image src={logo} alt="" width={350}/>
                    <p>© 2024 Rose Chic</p>
                </div>
                <div className="links d-flex flex-column flex-md-row align-items-center">
                    <ul className='collections mb-3 mb-md-0'>
                        <li><Link href="/">Search</Link></li>
                        <li><Link href="/shop/collections">Collections</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                    <ul className='social d-flex'>
                        <li><Link href=""><FaWhatsapp /></Link></li>
                        <li><Link href=""><FaInstagram /></Link></li>
                        <li><Link href=""><FaFacebook /></Link></li>
                    </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer


