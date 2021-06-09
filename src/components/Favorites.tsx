import Song from "./Song"
import _Song from "../classes/SongInt"
import { useFavoritesContext } from "../hooks/useFavoritesContext"

const Favorites = () => {

    const { favoriteSongs } = useFavoritesContext();

    return (
        <main>
            <h1>Favorite songs</h1>
            <section>
                {favoriteSongs.length > 0 ? favoriteSongs.map((song: _Song) =>
                    <Song
                        key={song.id}
                        song={song} />
                ) : <h4>Empty favorite song list</h4>}
            </section>
        </main>
    )
}

export default Favorites
