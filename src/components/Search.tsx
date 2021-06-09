import { useState, useRef } from "react"
import Song from "./Song"
import _Song from "../classes/SongInt"
import styles from "../styles/Search.module.scss"

const Search = () => {

  const queryRef = useRef<HTMLInputElement>(document.createElement("input"))
  const [songs, setSongs] = useState([])

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

  return (
    <div className="App">
      <input ref={queryRef} />
      <button onClick={search}>Search</button>
      <section className={styles.songs}>
        {songs.map((song: _Song) => (
          <Song 
            key={song.id} 
            song={song} />
        ))}
      </section>
    </div>
  )
}

export default Search
