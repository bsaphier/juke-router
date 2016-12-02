import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';

import Albums from './Albums';
import Songs from './Songs';
import { artistLoad } from '../containers/AppContainer'


class Artist extends Component {

  componentDidMount () {
    const { artistId } = this.props.routeParams;

    console.log(this.props.routeParams);

    //const artistName = axios.get(`/api/artists/${artistId}`);
/*************WE ARE HERE************/
    //const artistAlbums = axios.get(`/api/artists/${artistId}/albums`);
/*************WE ARE HERE************/
    //const artistSongs = axios.get(`/api/artists/${artistId}/songs`);
/*************WE ARE HERE************/
    // Promise.all([artistName, artistAlbums, artistSongs])
    //       .then(ress => ress.map(res => res.data))
    //       .then(artistLoad);
  }

  render () {
    const artist = this.props.selectedArtist;
    return (
      <div>
        <h3>{artist.name}</h3>
        {/*<Albums albums={artist.albums} />
        <Songs songs={artist.songs}/>*/}
      </div>
    );
  }
}

export default Artist;
