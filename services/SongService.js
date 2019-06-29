import SONGS_LIST from "./mock/songs";

export const getAllSongs = async() => {
    return SONGS_LIST;
};

export const filterSong = async (term) => {
    let filteredSongs = [];
    let songs = SONGS_LIST;
    for(let i=0;i<songs.length;i++){
        let song = songs[i];
        if(song.title.toUpperCase().indexOf(term.toUpperCase()) !== -1 ||
            song.album.toUpperCase().indexOf(term.toUpperCase()) !== -1 ||
            song.artist.toUpperCase().indexOf(term.toUpperCase()) !== -1 ||
            song.genre.toUpperCase().indexOf(term.toUpperCase()) !== -1 ) {
                filteredSongs.push(song);
        }

    }
    return filteredSongs;
}