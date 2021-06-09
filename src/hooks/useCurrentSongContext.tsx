import { createContext, useContext, useEffect, useState } from "react";
import _Song from "../classes/SongInt";

interface CurrentSongContextInt {
    currentSong: _Song;
    setCurrentSong: any;
}

const CurrentSongContext = createContext<CurrentSongContextInt>({
    currentSong: {id: '', previewURL: '', name: '', artistName: '', colorBg: ''},
    setCurrentSong: ''
});
const initialState = JSON.parse(localStorage.getItem("currentSong") || "{}");

export const CurrentSongProvider = ({children}: {children: any}) => {

    const [currentSong, setCurrentSong] = useState<_Song>(initialState);

    useEffect(() => {
        localStorage.setItem("currentSong", JSON.stringify(currentSong));
    }, [currentSong])

    return (
        <CurrentSongContext.Provider value={{currentSong, setCurrentSong}}>
            {children}
        </CurrentSongContext.Provider>
    );
};

export const useCurrentSongContext = () => useContext(CurrentSongContext);