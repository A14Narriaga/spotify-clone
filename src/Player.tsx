import { useAudio } from "react-use"

const Player = ({ src, artist, song }:
    { src: string, artist: string, song: string }) => {
    const [audio, state, controls] = useAudio({
        src: src,
        autoPlay: true,
    });
    return (
        <div>
            {audio}
            <h2>{artist} - {song}</h2>
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <button onClick={controls.pause}>Pause</button>
            <button onClick={controls.play}>Play</button>
            <br />
            <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
            <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
            <button onClick={() => controls.volume(1)}>Volume: 100%</button>
        </div>
    )
}

export default Player
