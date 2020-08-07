import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import {
    search,
    searchAlbums,
    searchArtists,
    searchTracks,
    searchPlaylists,
} from '../src/main';

describe('Spotify Wrapper', () => {

    describe('Smoke tests', () => {

        it('should exist the search method', () => {
            expect(search).to.exist;

        });

        it('should exist the searchAlbums method', () => {
            expect(searchAlbums).to.exist;
        });

        it('should exist the searchArtists method', () => {
            expect(searchArtists).to.exist;
        });

        it('should exist the searchTracks method', () => {
            expect(searchTracks).to.exist;
        });

        it('should exist the searchPlaylists method', () => {
            expect(searchPlaylists).to.exist;
        });
    });

    describe('Generic Search', () => {

        it('shoud call fetch function', () => {
            const fetchStub = sinon.stub(global, 'fetch');
            const artists = search();

            expect(fetchStub).to.have.been.calledOnce;

            fetchStub.restore();

        });

        it('should receive the correct URL to fetch', () => {

            const fetchStub = sinon.stub(global, 'fetch');
            const artists = search('AnnenMayKantereit', 'artist');

            const expectedUrl = 'https://api.spotify.com/v1/search?q=AnnenMayKantereit&type=artist';
            expect(fetchStub).to.have.been.calledWith(expectedUrl);

        });
    });


});
