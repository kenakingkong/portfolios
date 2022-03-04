
import axios, { AxiosRequestConfig } from 'axios';
import { RequestHandler } from 'express';
import { getPlayerAuth, handleTrackResponse } from '../helpers/spotify';

export const getSpotifyTest: RequestHandler = (req, res) => {
  res.status(201).json({ message: 'spotify' });
};

export const getLastPlayedSong: RequestHandler = (request, response) => {
  // if (!process.env.SPOTIFY_ACCESS_TOKEN)
  //  getPlayerAuth();

  const options: AxiosRequestConfig = {
    //url: "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    url: "https://api.spotify.com/v1/users/kenaking",
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`
    }
  };

  axios(options)
    .then(res => {
      //const newTrack = handleTrackResponse(res.data);
      //response.status(200).json(newTrack);
      console.log(res.data)
      response.status(200).json(res.data)
    })
    .catch(err => {
      console.log('error');
      console.log(err)
      console.log(err.response)
      console.log(err.statusCode)
      response.status(err.response.status).json(err)
    })
};

