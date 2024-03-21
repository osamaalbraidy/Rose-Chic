import './FeaturedProducts.css'
import product1 from '../../assets/Images/Product 1.jpg'
import product2 from '../../assets/Images/Product 2.jpg'
import product3 from '../../assets/Images/Product 3.jpg'
import Product from '../Product/Product';

const FeaturedProducts = () => {

    const products = [
        { imageSrc: product1, productName: "Product 1", productPrice: "20.00$" },
        { imageSrc: product2, productName: "Product 2", productPrice: "10.00$" },
        { imageSrc: product3, productName: "Product 3", productPrice: "30.00$" },
        { imageSrc: product3, productName: "Product 3", productPrice: "30.00$" },
        { imageSrc: product1, productName: "Product 1", productPrice: "20.00$" },
        { imageSrc: product2, productName: "Product 2", productPrice: "10.00$" },
    ];

    return (
        <div className='featured-products container featured-products-container'>
            <h1 className="font-weight-light title">Featured Products</h1>
            <div className="row products">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        imageSrc={product.imageSrc}
                        productName={product.productName}
                        productPrice={product.productPrice}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts
