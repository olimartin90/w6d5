class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    this.playlists.push(playlist);
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
    this.overallRating = 0;
    this.totalDuration = 0;
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  ovallRateFct(track) {
    this.tracks {

    };
    let sumAllRate = 0;
    let overallRate = 0;
    for (let rate in track) {
      console.log(rate)
      let trRate = rate.rating
      sumAllRate += trRate
    }
    console.log(sumAllRate)
    overallRate = sumAllRate/this.tracks.length;
    console.log(overallRate)
    // return this.overallRating = overallRate;
  };

  // ovallrateFct()

}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

// Create a new track
let newTrack = new Track ('Bro Hymn', 4.8/5, 182);
// console.log('New Track:', newTrack);

// Create a new playlist
let newPlaylist = new Playlist ('Bootcamp');
// console.log('New Playlist:', newPlaylist);

// Create a new Library
let newLibrary = new Library ('My Music', 'Oli Martin');
// console.log('New Library:', newLibrary);

// Add the new track to playlist
newPlaylist.addTrack(newTrack);
console.log('New Playlist:', newPlaylist);

// Add the new playlist to library
newLibrary.addPlaylist(newPlaylist);
console.log('New Library:', newLibrary);

newPlaylist.ovallRateFct(newPlaylist);
console.log(newPlaylist);