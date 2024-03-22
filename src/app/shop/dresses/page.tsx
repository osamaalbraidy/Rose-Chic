import '../index.css'
import {
    AllDressesProducts
} from '../../data/productsData'
import ShopCategorySection from '../../_components/ShopCategorySection/ShopCategorySection'
import SampleProducts from '../../_components/SampleProducts/SampleProducts'

const page = () => {
    return (
        <div className='shop-container'>
            <ShopCategorySection />
            <SampleProducts products={AllDressesProducts} productTitle="All Dresses" />
        </div>
    )
}

export default page

