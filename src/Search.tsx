import { useState, useRef, useEffect } from "react"
import Player from "./Player"
import randomColor from "randomcolor"
import styles from "./Search.module.scss"

interface Song {
  id: string
  name: string
  artistName: string
  previewURL: string
}

const Search = () => {

  const queryRef = useRef<HTMLInputElement>(document.createElement("input"))
  const [songs, setSongs] = useState([])
  const [currentSong, setCurrentSong] = useState<Song>({} as Song)

  const search = async () => {
    setSongs([])
    const querySrt = queryRef.current.value
    const baseUrl = "https://api.napster.com"
    const key = "apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm"
    const query = `query=${querySrt}`
    const url = baseUrl + `/v2.2/search/verbose?${key}&${query}`
    const response = await fetch(url)
    const json = await response.json()
    setSongs(json.search.data.tracks)
    queryRef.current.value = ""
  }

  useEffect(() => {
    console.log(songs)
  }, [songs])

  return (
    <div className="App">
      <input ref={queryRef} />
      <button onClick={search}>Search</button>
      <section className={styles.songs}>
        {songs.map((song: Song) => (
          <div key={song.id} style={{ backgroundColor: randomColor() }}>
            <h3>{song.artistName} - {song.name}</h3>
            <button onClick={() => setCurrentSong(song)}>▶</button>
          </div>
        ))}</section>
      {currentSong.id && (
        <Player
          src={currentSong.previewURL}
          artist={currentSong.artistName}
          song={currentSong.name}
        />
      )}
    </div>
  )
}

export default Search
