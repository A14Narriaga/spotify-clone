import { useState } from "react"
import { useFavoritesContext } from "../hooks/useFavoritesContext"
import { useCurrentSongContext } from "../hooks/useCurrentSongContext"
import _Song from "../classes/SongInt"

const Song = ({ song } : { song: _Song }) => {

    const [icon, setIcon] = useState("🤍")
    const { setCurrentSong } = useCurrentSongContext();
    const { favoriteSongs, setFavoriteSongs } = useFavoritesContext();

    const addToFavoriteSongs = () => {
        const exist = favoriteSongs.includes(song)
        if (!exist) {
            setFavoriteSongs([...favoriteSongs, song]);
            setIcon(icon => icon = "❤");
            console.log("No existe");
          }
          else {
            const newSongs = favoriteSongs.filter((s: _Song) => s !== song)
            setFavoriteSongs(newSongs);
            console.log("Existe");
            setIcon(icon => icon = "🤍");
          }
    }

    return (
        <div key={song.id} style={{ backgroundColor: song.colorBg }}>
            <h3>{song.artistName} - {song.name}</h3>
            <button onClick={() => setCurrentSong(song)}>▶</button>
            <button onClick={addToFavoriteSongs}>{icon}</button>
        </div>
    )
}

export default Song