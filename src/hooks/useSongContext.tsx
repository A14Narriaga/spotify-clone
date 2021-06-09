import { createContext, useState } from "react";
import _Song from "../classes/SongInt";

interface SongContextInt {
    currentSong: _Song;
    setCurrentSong: any;
}

export const currentSongContext = createContext<SongContextInt>({
    currentSong: {id: '', previewURL: '', name: '', artistName: ''},
    setCurrentSong: ''
});

export const SongProvider = ({children}: {children: any}) => {

    const [currentSong, setCurrentSong] = useState<_Song>({} as _Song);

    return (
        <currentSongContext.Provider value={{currentSong, setCurrentSong}}>
            {children}
        </currentSongContext.Provider>
    );
}