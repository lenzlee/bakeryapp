import { productData } from "../utils/productData"
import Favorite from "./Favorite"

console.log(productData)

const removeFavorite = () => {
    localStorage.removeItem('productName')
}

const dataFromStorage = () => {
    localStorage.getItem('productName')
    }

<button onClick={() => removeFavorite()}>Remove</button>

const favoriteList = productData.map(product => {
    return(
    <Favorite key={product.id} data={product} />
    )
})

function FavoritesList(){
    return(
        <>
        <p>&nbsp;</p>
    <h2>Your Favorites List</h2>
    <table className="favorites"><tbody><tr>
    {dataFromStorage}
    </tr></tbody></table>

    <p>&nbsp;</p>

    </>
    )
}

export default FavoritesList