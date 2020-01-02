import { combineReducers } from 'redux';

const songsReducer = () =>{
    return [
        { title: 'Sola', duration: '4:05'},
        { title: 'Mala', duration: '3:05'},
        { title: 'B11', duration: '4:30'},
        { title: 'BEBE', duration: '3:00'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});