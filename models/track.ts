export interface Artist {
  name: string,
  url: string,
};

export interface Song {
  name: string,
  url: string,
};

export interface Track {
  song: Song,
  artist: Artist,
  playedAt: Date
};

export default Track;