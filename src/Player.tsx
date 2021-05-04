import { useAudio } from "react-use"
import style from "./Player.module.scss"

const Player = ({ src, artist, song }:
    { src: string, artist: string, song: string }) => {
    const [audio, state, controls] = useAudio({
        src: src,
        autoPlay: true,
    });
    return (
        <div className={style.player}>
            {audio}
            <h2>{artist} - {song}</h2>
            <h3>Time: {state.time}</h3>
            <div>
                <button onClick={state.paused ? controls.play : controls.pause}>
                    {state.paused ? 'Play' : 'Pause'}
                </button>
                <br/>
                <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
                <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
                <button onClick={() => controls.volume(1)}>Volume: 100%</button>
            </div>
        </div>
    )
}

export default Player
