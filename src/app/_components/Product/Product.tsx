import Image from 'next/image';
import Link from 'next/link';
import './Product.css'

interface ProductProps {
    imageSrc: any;
    productName: string;
    productPrice: string;
}

const Product: React.FC<ProductProps> = ({ imageSrc, productName, productPrice }) => {
    return (
        <div className="product col-md-4">
            <Image src={imageSrc} alt="" className="img-fluid" />
            <p className="font-weight-light prod-name"><Link href="">Add To Bag</Link></p>
            <div>
                <p>{productName}</p>
                <p>{productPrice}</p>
            </div>
        </div>
    );
}

export default Product;
