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
  }

  addTrack(track) {
    this.tracks.push(track);
  }

  overallRateFct() {
    let average = 0;
    let total = 0;
    for (let i = 0; i < this.tracks.length; i++) {
        total += this.tracks[i].rating;
    }
    average = total / this.tracks.length;
    return this.overallRating = Math.round(average);
  };

  totalDurationFn() {
    let total = 0;
    for (let i = 0; i < this.tracks.length; i++) {
        total += this.tracks[i].length;
    }
    return this.totalDuration = total;
  }

}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

// new track
const hellYeah = new Track("Hell Yeah", 2, 110)
const young = new Track("Young", 5, 95)
const brohymn = new Track("Bro Hymn", 3, 180)
console.log("new track : ", hellYeah)

// new Playlist
const summerVibe = new Playlist('Summer Vibe');
console.log("new playlist : ", summerVibe)

// New library
const iphoneOli = new Library("iphoneOli", "Olivier Martin");
console.log("New Library : ", iphoneOli)

// push track in Playlist
summerVibe.addTrack(hellYeah)
summerVibe.addTrack(young)
summerVibe.addTrack(brohymn)
console.log("add track to playlist : ", summerVibe)


// push playlist in Library
iphoneOli.addPlaylist(summerVibe)
console.log("Playlist in library : ", iphoneOli);

console.log(summerVibe.overallRateFct())
console.log(summerVibe.totalDurationFn())
console.log("Add track to playlist : ", summerVibe)