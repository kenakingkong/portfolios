import axios, { AxiosRequestConfig } from "axios";
import btoa from 'btoa';

//user-read-recently-played


/**
 * 
 * @param 
 * @returns Access Tokem
 */
export const getPlayerAuth = () => {
  const basicToken = btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_SECRET_KEY}`);

  const options: AxiosRequestConfig = {
    url: "https://accounts.spotify.com/api/token",
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basicToken}`,
      'Content-Type':'application/x-www-form-urlencoded'
    },
    params: {
      grant_type: 'client_credentials'
    }
  };

  axios(options)
    .then(res => {
      console.log(res.data.access_token)
      process.env['SPOTIFY_ACCESS_TOKEN'] = res.data.access_token;
      return;
    })
    .catch(err => {
      console.log(err);
      return;
    })
};

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