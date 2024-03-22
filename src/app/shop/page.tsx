import ShopCategorySection from '../_components/ShopCategorySection/ShopCategorySection'
import SampleProducts from '../_components/SampleProducts/SampleProducts'
import './index.css'
import { DressesProducts, BagProducts, PantProducts, SetProducts, ShoesProducts, TopProducts, FeaturedProducts } from '../data/productsData'

const page = () => {

    return (
        <div className='shop-container'>
            <ShopCategorySection />
            <SampleProducts products={FeaturedProducts} productTitle="Featured" />
            <SampleProducts products={TopProducts} productTitle="Tops" />
            <SampleProducts products={PantProducts} productTitle="Pants" />
            <SampleProducts products={SetProducts} productTitle="Sets" />
            <SampleProducts products={DressesProducts} productTitle="Dresses" />
            <SampleProducts products={ShoesProducts} productTitle="Shoes" />
            <SampleProducts products={BagProducts} productTitle="Bags" />

        </div>
    )
}

export default page