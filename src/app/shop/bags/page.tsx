import '../index.css'
import {
    AllBagProducts
} from '../../data/productsData'
import ShopCategorySection from '../../_components/ShopCategorySection/ShopCategorySection'
import SampleProducts from '../../_components/SampleProducts/SampleProducts'

const page = () => {
    return (
        <div className='shop-container'>
            <ShopCategorySection />
            <SampleProducts products={AllBagProducts} productTitle="All Bags" />
        </div>
    )
}

export default page

