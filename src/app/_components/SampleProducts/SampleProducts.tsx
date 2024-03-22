// SampleProducts.tsx
import './SampleProducts.css';
import Product from '../Product/Product';

interface ProductProps {
    imageSrc: any;
    productName: string;
    productPrice: string;
    productCategory: string;
    ProductId: number;
}

interface SampleProductsProps {
    products: ProductProps[];
    productTitle: string;
}

const SampleProducts = ({ products, productTitle }: SampleProductsProps) => {
    return (
        <div className='sample-products container sample-products-container'>
            <h1 className="font-weight-light title">{productTitle} Products</h1>
            <div className="row products">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        ProductId={product.ProductId}
                        imageSrc={product.imageSrc}
                        productName={product.productName}
                        productCategory={product.productCategory}
                        productPrice={product.productPrice}
                    />
                ))}
            </div>
        </div>
    );
};

export default SampleProducts;
