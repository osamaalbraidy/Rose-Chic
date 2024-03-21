import FeaturedProducts from '../_components/FeaturedProducts/FeaturedProducts'
import './index.css'

const page = () => {
    return (
        <>
            <div className='about'>
                <h1>About Us</h1>
                <p><strong>Welcome to Rose Chic, your ultimate destination for chic and
                    elegant women's clothing.</strong><br /> At Rose Chic, we believe that every
                    woman deserves to feel confident and empowered in what she wears,
                    which is why we curate a carefully selected collection of stylish
                    pieces that blend sophistication with contemporary trends. Whether
                    you're searching for the perfect outfit for a special occasion or
                    simply looking to refresh your wardrobe with timeless staples, our
                    diverse range of dresses, tops, bottoms, and accessories has something
                    to suit every style and occasion. With a focus on quality, affordability,
                    and exceptional customer service, we strive to make your shopping experience
                    with us seamless and enjoyable. Join us in embracing your individuality
                    and expressing your unique sense of style with Rose Chic.</p>
            </div>
            <FeaturedProducts />
        </>
    )
}

export default page