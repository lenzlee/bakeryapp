import { useState } from "react"

function Favorite({data}){
    const { name, img, cost } = data

    const productCost = cost/100

    // let [changeText, setChangeText] = useState(true);

    const btnClick = () => {
        console.log({name})
        localStorage.removeItem('productName')
        localStorage.removeItem('productCost')
        sessionStorage.removeItem('productName')
        sessionStorage.removeItem('productCost')
   
        // return (
        //     setChangeText(!changeText)
        // )
    }

    return(
        <>
        <td>
            <img src={img} />
            <h3>{name}</h3>
            <p>${productCost}</p>
            <button onClick={() => btnClick()}>Remove</button>
            
        </td>
        </>
    )
}

export default Favorite