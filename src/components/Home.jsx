import { useState } from 'react'
import Intro from './Intro'
import ProductList from './ProductList'
import FavoriteProducts from './FavoriteProducts'


function Home() {

    const [favorites, setFavorites] = useState([])

    const addFavoriteProduct = (name) => {
    //   console.log('name', name)
      if (!favorites.includes(name)){
      const updatedFavorites = [...favorites, name]
      setFavorites(updatedFavorites)
     //sessionStorage.setItem('favorites', [updatedFavorites])
      localStorage.setItem('favorites', updatedFavorites)
    //   localStorage.setItem('name', name)
    }

    else {

        const updatedFavorites = favorites.filter(elem => elem !== name);

        setFavorites(updatedFavorites)
        console.log('hello', updatedFavorites)
        localStorage.removeItem('name', name)
        // localStorage.removeItem('favorites', updatedFavorites)
    }
    
    }

    return(
        <>
        <p>Welcome to our bakery!</p>

        <Intro />
     <ProductList addFavoriteProduct ={addFavoriteProduct} />
     <FavoriteProducts favorites={favorites} />

        </> 

        
    )

}

export default Home

