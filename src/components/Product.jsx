import { useState } from "react"

// function Product({props}){ - OR - 
// function Product({data, favorite}){

function Product({data, addFavoriteProduct}){
    const { name, img, cost } = data
    const productCost = cost/100
    let [changeText, setChangeText] = useState(true);

    const handleClick = () => {

        addFavoriteProduct (name);


            // If button text = "Remove From Favorites" => Change button name back to "Add From Favorites" and Remove the item name from favorites list
    
            // Update the favorites list
            //setFavorites(updatedFavorites);


          return (
            setChangeText(!changeText)
        )

    }


    return(
        
        <>
        <td>
            <img src={img} />
            <h3>{name}</h3>
            <p>${productCost}</p>

            <button 
            onClick={() => {
                handleClick();
        }}>
                {changeText ? "Add to Faves" : "Remove from Faves"}
                
                </button>

        </td>
        </>
    )
}

export default Product