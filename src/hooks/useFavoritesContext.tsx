import { createContext, useContext, useEffect, useState } from "react";
import _Song from "../classes/SongInt"

interface FavoriteContextInt {
    favoriteSongs: _Song[];
    setFavoriteSongs: any;
}

const FavoriteContext = createContext<FavoriteContextInt>({
    favoriteSongs: [],
    setFavoriteSongs: ''
});
const initialState = JSON.parse(localStorage.getItem("favoritos") || "[]");

export const FavoritesProvider = ({children} : {children: any}) => {

    const [favoriteSongs, setFavoriteSongs] = useState(initialState);

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(favoriteSongs));
    }, [favoriteSongs])

    return (
        <FavoriteContext.Provider value={{favoriteSongs, setFavoriteSongs}}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavoritesContext = () => useContext(FavoriteContext);