import Image from 'next/image';
import Link from 'next/link';
import './Product.css'

interface ProductProps {
    imageSrc: any;
    productName: string;
    productPrice: string;
    productCategory: string;
    ProductId: number;
}

const Product: React.FC<ProductProps> = ({ imageSrc, productName, productPrice, productCategory, ProductId }) => {
    return (
        <div className="product col-md-4 col-sm-12">
            <div className='product-card'><Image src={imageSrc} alt="" className="img-fluid" /></div>
            <p className="font-weight-light prod-name"><Link href="">Add To Bag</Link></p>
            <div>
                <p>{productName}</p>
                <p style={{ display: "none" }}>{ProductId}</p>
                <p>{productCategory}</p>
                <p>{productPrice}</p>
            </div>
        </div>
    );
}

export default Product;
