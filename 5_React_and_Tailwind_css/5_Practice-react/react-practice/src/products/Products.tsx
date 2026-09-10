import { use, useState } from "react"
import type { ProductType } from "../type"
import Product from "../product/Product";
import './Products.css';

export interface ProductsProps {
    productPromise: Promise<ProductType[]>
}

export default function Products({ productPromise }: ProductsProps) {

    const products = use(productPromise);
    //console.log(products);

    const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

    const handleCartUpdate = (product: ProductType): void => {
        let newCartProducts = [...cartProducts, product];

        if(cartProducts.includes(product)){
            newCartProducts = cartProducts.filter(p => p.id != product.id);
        }

        setCartProducts(newCartProducts);
    }

    return (
        <>
            <h2>Cart Item: {cartProducts.length}</h2>
            <div className="products-section">
                {
                    products.map((product, index) => <Product handleCartUpdate={handleCartUpdate} key={index} product={product}></Product>)
                }
            </div>
        </>
    );
}