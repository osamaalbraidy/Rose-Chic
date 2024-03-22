import '../index.css'
import {
    AllTopProducts
} from '../../data/productsData'
import ShopCategorySection from '../../_components/ShopCategorySection/ShopCategorySection'
import SampleProducts from '../../_components/SampleProducts/SampleProducts'

const page = () => {
    return (
        <div className='shop-container'>
            <ShopCategorySection />
            <SampleProducts products={AllTopProducts} productTitle="All Tops" />
        </div>
    )
}

export default page

