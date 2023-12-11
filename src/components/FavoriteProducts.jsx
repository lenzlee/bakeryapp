export default function FavoriteProducts({favorites}) {
    console.log(favorites)

    const list = favorites.length > 0 
        ? favorites.map((product, i) => <p key={i}>{product}</p>)
        : null

    const title = favorites.length > 0 
    ? <h2>My Favorites</h2>
    : <h2>You have not selected any favorites yet</h2>

    return(
        <>
        {title}
        {list}
        </>
    )
}