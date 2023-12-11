import Product from "../components/Product"
import { productData } from "../utils/productData"

console.log(productData)

function ProductList( { addFavoriteProduct } ){
    
    const list = productData.map(product => {
        return(
        <Product 
            key={product.id} 
            data={product} 
            addFavoriteProduct={addFavoriteProduct} 
        />
        )
    })

    return(
    <table><tbody><tr>
    {list}
    </tr></tbody></table>
    )
}

export default ProductList