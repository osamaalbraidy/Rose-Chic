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
                <h1 className="font-weight-light title">Shop Categories</h1>
                <div className="row categories">
                    <ShopCategoryCard
                        imageSrc={tops}
                        categoryName="Tops"
                        categoryLink="/shop/tops"
                    />
                    <ShopCategoryCard
                        imageSrc={pants}
                        categoryName="Pants"
                        categoryLink="/shop/pants"
                    />
                    <ShopCategoryCard
                        imageSrc={sets}
                        categoryName="Sets"
                        categoryLink="/shop/sets"
                    />
                    <ShopCategoryCard
                        imageSrc={dresses}
                        categoryName="Dresses"
                        categoryLink="/shop/dresses"
                    />
                    <ShopCategoryCard
                        imageSrc={shoes}
                        categoryName="Shoes"
                        categoryLink="/shop/shoes"
                    />
                    <ShopCategoryCard
                        imageSrc={bags}
                        categoryName="Bags"
                        categoryLink="/shop/bags"
                    />
                </div>
            </div>
        </>
    )
}

export default ShopCategorySection;
