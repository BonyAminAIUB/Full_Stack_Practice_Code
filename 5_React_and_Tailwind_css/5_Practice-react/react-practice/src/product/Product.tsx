import { useState } from "react";
import type { ProductType } from "../type"
import './Product.css';

export interface ProductProps {
    product: ProductType,
    handleCartUpdate:(product:ProductType) => void
}

export default function Product({ product, handleCartUpdate }: ProductProps) {

    const [addCart, setAddCart] = useState(false);

    const handleAddCart = () => {
        setAddCart(!addCart);
        handleCartUpdate(product);
    }

    return (
        <div className="product-card">

            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>

            <div className="product-info">

                <p className="product-category">
                    {product.category}
                </p>

                <h2 className="product-title">
                    {product.title}
                </h2>

                <p className="product-description">
                    {product.description}
                </p>

                <div className="product-rating">
                    ⭐ {product.rating.rate}
                    <span> ({product.rating.count} reviews)</span>
                </div>

                <div className="product-bottom">

                    <h3 className="product-price">
                        ${product.price}
                    </h3>

                    <div>
                        <button onClick={handleAddCart} className={`add-to-cart-button ${addCart ? 'added' : ''}`}>
                            {
                                addCart ? 'Added' : 'Add to cart'
                            }
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}