export const spotifySearchAPIURL = (artist, type_) => `https://api.spotify.com/v1/search?q=${artist}&type=${type_}`;

export const search = (artist, type_) => {
  fetch(spotifySearchAPIURL(artist, type_))
    .then(data => data.json);
};
export const searchAlbums = () => {};
export const searchArtists = () => {};
export const searchTracks = () => {};
export const searchPlaylists = () => {};
