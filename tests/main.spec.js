import { expect } from 'chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify Wrapper', () => {

    describe('Smoke tests', () => {

        it('should exist the search method', () => {
            expect(search).to.exist;

        });

        it('should exist the searchAlbums methos', () => {
            expect(searchAlbums).to.exist;
        });

        it('should exist the searchAlgumns methos', () => {
            expect(searchArtists).to.exist;
        });

        it('should exist the searchAlgumns methos', () => {
            expect(searchTracks).to.exist;
        });

        it('should exist the searchAlgumns methos', () => {
            expect(searchPlaylists).to.exist;
        });
    });

    describe('Generic Search', () => {

        it('shoud call fetch function', () => {
            const artists = search();

        });
    });


});
