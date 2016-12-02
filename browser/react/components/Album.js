import React, { Component } from 'react';
import Songs from '../components/Songs';

class Album extends Component {
  constructor (props) {
    super(props);
    this.state = {
      album: props.album,
      currentSong: props.currentSong,
      isPlaying: props.isPlaying,
      toggleOne: props.toggleOne
    }
  }

  componentDidMount () {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
  }

  render () {
    console.log(this.state);
    const state = this.state;
    return (
      <div className="album">
        <div>
          <h3>{ state.album.name }</h3>
          <img src={ state.album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs
          songs={state.album.songs}
          currentSong={state.currentSong}
          isPlaying={state.isPlaying}
          toggleOne={state.toggleOne} />
      </div>
    );
  }
}

export default Album;
