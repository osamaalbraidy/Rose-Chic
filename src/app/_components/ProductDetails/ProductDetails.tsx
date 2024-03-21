import './ProductDetails.css'
import Image from 'next/image';

interface ProductDetailsProps {
    imageUrl: any;
    name: string;
    size: string;
    price: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ imageUrl, name, size, price }) => {
    return (
        <div className='product-details'>
            <div className='product-image'>
                <Image
                    src={imageUrl}
                    alt="product"
                    width={100} height={100} />
            </div>
            <h1 style={{ textAlign: "start" }}>
                Name: {name} <br />
                Size: {size} <br />
                Price: {price}
            </h1>
        </div>
    );
}

export default ProductDetails;
