import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';

import Albums from './Albums';
import Songs from './Songs';
// import { artistLoad } from '../containers/AppContainer'


class Artist extends Component {

  componentDidMount () {
    const { artistId } = this.props.routeParams;
    this.props.artistLoad(artistId);
  }

  render () {
    const selectedArtist = this.props.selectedArtist;
    const children = this.props.children;
    const propsToPassToChildren = {
          albums: this.props.albums,
          selectAlbum: this.props.selectedAlbum,
          songs: this.props.artistSongs,
          currentSong: this.props.currentSong,
          isPlaying: this.props.isPlaying,
          toggle: this.props.toggle,
          toggleOne: this.props.toggleOne
    }

    return (<div>
      <h3>{ selectedArtist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
        <li><Link to={`/artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
      </ul>
      { children && React.cloneElement(children, propsToPassToChildren) }
    </div>);
  }
}

export default Artist;
