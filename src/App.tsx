import { useState, useRef, useEffect } from "react"
import "./App.scss"

const App = () => {

  const queryRef = useRef<HTMLInputElement>(document.createElement("input"))
  const [songs, setSongs] = useState([])

  const search = async() => {
    const querySrt = queryRef.current.value
    const baseUrl = "https://api.napster.com"
    const key = "apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm"
    const query = `query=${querySrt}`
    const url = baseUrl + `/v2.2/search/verbose?${key}&${query}`
    const response = await fetch(url)
    const json = await response.json()
    setSongs(json.search.data.tracks)
  }

  useEffect(() => {
    console.log(songs)
  }, [songs])

  return (
    <div className="App">
      <input ref={queryRef}/>
      <button onClick={search}>Search</button>
      {songs.map(({id, artistName, name}) => (
        <article key={id}>
          <h4>{artistName}: {name}</h4>
        </article>
      ))}
    </div>
  )
}

export default App

