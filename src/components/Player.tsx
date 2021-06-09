import { useAudio } from "react-use"
import { useCurrentSongContext } from "../hooks/useCurrentSongContext";
import style from "../styles/Player.module.scss"

const Player = () => {

    const { currentSong: {previewURL, name, artistName} } = useCurrentSongContext();

    const [audio, state, controls] = useAudio({
        src: previewURL,
        autoPlay: true,
    });

    if(!name) return null;

    return (
        <div className={style.player}>
            {audio}
            <h2>{artistName} - {name}</h2>
            <h3>Time: {state.time}</h3>
            <div>
                <input 
                    type="range" 
                    name="volumen" 
                    id="volumen" 
                    value={state.volume}
                    onChange={(e) => controls.volume(Number(e.target.value))}
                    min="0.0" max="1.0" step="0.1"/>
                <button onClick={state.paused ? controls.play : controls.pause}>
                    {state.paused ? 'Play' : 'Pause'}
                </button>
            </div>
        </div>
    )
}

export default Player
