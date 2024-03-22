import '../index.css'
import {
    AllSetProducts
} from '../../data/productsData'
import ShopCategorySection from '../../_components/ShopCategorySection/ShopCategorySection'
import SampleProducts from '../../_components/SampleProducts/SampleProducts'

const page = () => {
    return (
        <div className='shop-container'>
            <ShopCategorySection />
            <SampleProducts products={AllSetProducts} productTitle="All Sets" />
        </div>
    )
}

export default page

