import './ShopCategorySection.css';
import ShopCategoryCard from '../ShopCategoryCard/ShopCategoryCard';
import tops from '../../assets/Images/Tops.jpg'
import pants from '../../assets/Images/Pants.jpg'
import sets from '../../assets/Images/Sets.jpg'
import dresses from '../../assets/Images/Dresses.jpg'
import shoes from '../../assets/Images/Shoes.jpg'
import bags from '../../assets/Images/Bags.jpg'

const ShopCategorySection = () => {
    return (
        <>
            <div className="shop-category shop-category-container container">
                <h1 className="font-weight-light title">Shop Category</h1>
                <div className="row categories">
                    <ShopCategoryCard
                        imageSrc={tops}
                        categoryName="Tops"
                        categoryLink=""
                    />
                    <ShopCategoryCard
                        imageSrc={pants}
                        categoryName="Pants"
                        categoryLink=""
                    />
                    <ShopCategoryCard
                        imageSrc={sets}
                        categoryName="Sets"
                        categoryLink=""
                    />
                    <ShopCategoryCard
                        imageSrc={dresses}
                        categoryName="Dresses"
                        categoryLink=""
                    />
                    <ShopCategoryCard
                        imageSrc={shoes}
                        categoryName="Shoes"
                        categoryLink=""
                    />
                    <ShopCategoryCard
                        imageSrc={bags}
                        categoryName="Bags"
                        categoryLink=""
                    />
                </div>
            </div>
        </>
    )
}

export default ShopCategorySection;
