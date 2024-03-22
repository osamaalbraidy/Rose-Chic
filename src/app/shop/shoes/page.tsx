import '../index.css'
import {
    AllShoesProducts
} from '../../data/productsData'
import ShopCategorySection from '../../_components/ShopCategorySection/ShopCategorySection'
import SampleProducts from '../../_components/SampleProducts/SampleProducts'

const page = () => {
    return (
        <div className='shop-container'>
            <ShopCategorySection />
            <SampleProducts products={AllShoesProducts} productTitle="All Shoes" />
        </div>
    )
}

export default page

