import ProductDetails from '../ProductDetails/ProductDetails';

const ProductsBagDetail: React.FC = () => {
    const products = [
        { imageUrl: "", name: "Product 1", size: "Medium", price: "15.00$" },
        { imageUrl: "", name: "Product 2", size: "Large", price: "20.00$" },
        { imageUrl: "", name: "Product 3", size: "Small", price: "10.00$" },
    ];

    return (
        <div>
            {products.map((product, index) => (
                <ProductDetails
                    key={index}
                    imageUrl={product.imageUrl}
                    name={product.name}
                    size={product.size}
                    price={product.price}
                />
            ))}
        </div>
    );
}

export default ProductsBagDetail;
