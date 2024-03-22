import '../index.css'
import {
    AllPantProducts
} from '../../data/productsData'
import ShopCategorySection from '../../_components/ShopCategorySection/ShopCategorySection'
import SampleProducts from '../../_components/SampleProducts/SampleProducts'

const page = () => {
    return (
        <div  className='shop-container'>
            <ShopCategorySection />
            <SampleProducts products={AllPantProducts} productTitle="All Pants" />
        </div>
    )
}

export default page

