
/**
 * 
 * @param data (spotify response object)
 * @returns Track 
 */
 export const handleTrackResponse = (data: any) => {
  const { track, played_at } = data?.items[0];
  const { artists, external_urls, name } = track;
  const artist = artists[0];

  const newArtist = { 
    name: artist.name,
    url: artist.external_urls.spotify
  };

  const newSong = {
    name: name,
    url: external_urls.spotify
  };

  const playedAt = new Date(played_at);

  const newTrack = {
    artist: newArtist,
    song: newSong,
    playedAt: playedAt
  };

  return newTrack;
}

/*
expected response structure

{
  "items": [
    {
      "track": {
        "album": {...}
        "artists": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/181bsRPaVXVlUKXrxwZfHK"
            },
            "name": "Megan Thee Stallion",
            "type": "artist",
          }
        ],
        "external_urls": {
          "spotify": "https://open.spotify.com/track/4HyVMzg0sUQsdOxRvSO8Ka"
        },
        "name": "Megan's Piano",
      },
      "played_at": "2022-01-31T03:27:50.130Z",
    }
  ]
}
*/