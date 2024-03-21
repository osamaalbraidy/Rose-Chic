import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
    imageSrc: any;
    categoryName: string;
    categoryLink: string;
}

const ShopCategoryCard: React.FC<CategoryProps> = ({ imageSrc, categoryName, categoryLink }) => {
    return (
        <div className="col-md-4">
            <div className="category">
                <Image src={imageSrc} alt="" className="img-fluid" />
                <h1 className="font-weight-light"><Link href={categoryLink} className="cat-name">{categoryName}</Link></h1>
            </div>
        </div>
    );
}

export default ShopCategoryCard;
